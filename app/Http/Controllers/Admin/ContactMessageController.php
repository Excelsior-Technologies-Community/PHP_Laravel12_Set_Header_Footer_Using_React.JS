<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactMessage;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\StreamedResponse;

class ContactMessageController extends Controller
{
    public function index(Request $request)
    {
        $query = ContactMessage::query();

        /*
        |--------------------------------------------------------------------------
        | Search
        |--------------------------------------------------------------------------
        */

        if ($request->filled('search')) {
            $search = $request->input('search');

            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                    ->orWhere('email', 'like', "%{$search}%")
                    ->orWhere('subject', 'like', "%{$search}%")
                    ->orWhere('message', 'like', "%{$search}%");
            });
        }

        /*
        |--------------------------------------------------------------------------
        | Status Filter
        |--------------------------------------------------------------------------
        */

        if (
            $request->filled('status') &&
            $request->status !== 'all'
        ) {
            $query->where(
                'status',
                $request->status
            );
        }

        /*
        |--------------------------------------------------------------------------
        | Priority Filter
        |--------------------------------------------------------------------------
        */

        if (
            $request->filled('priority') &&
            $request->priority !== 'all'
        ) {
            $query->where(
                'priority',
                $request->priority
            );
        }

        /*
        |--------------------------------------------------------------------------
        | Favorite Filter
        |--------------------------------------------------------------------------
        */

        if ($request->favorite === '1') {
            $query->where(
                'is_favorite',
                true
            );
        }

        /*
        |--------------------------------------------------------------------------
        | Date Filter
        |--------------------------------------------------------------------------
        */

        if ($request->filled('date')) {
            $query->whereDate(
                'created_at',
                $request->date
            );
        }

        $messages = $query
            ->latest()
            ->paginate(10)
            ->withQueryString();

        /*
        |--------------------------------------------------------------------------
        | Statistics
        |--------------------------------------------------------------------------
        */

        $stats = [
            'total' => ContactMessage::count(),

            'new' => ContactMessage::where(
                'status',
                'new'
            )->count(),

            'read' => ContactMessage::where(
                'status',
                'read'
            )->count(),

            'replied' => ContactMessage::where(
                'status',
                'replied'
            )->count(),

            'favorite' => ContactMessage::where(
                'is_favorite',
                true
            )->count(),

            'urgent' => ContactMessage::where(
                'priority',
                'urgent'
            )->count(),

            'today' => ContactMessage::whereDate(
                'created_at',
                today()
            )->count(),
        ];

        return Inertia::render(
            'Admin/Messages',
            [
                'messages' => $messages,
                'stats' => $stats,
                'filters' => [
                    'search' => $request->search ?? '',
                    'status' => $request->status ?? 'all',
                    'priority' => $request->priority ?? 'all',
                    'favorite' => $request->favorite ?? '0',
                    'date' => $request->date ?? '',
                ],
            ]
        );
    }

    public function update(
        Request $request,
        ContactMessage $contactMessage
    ): RedirectResponse {
        $data = $request->validate([
            'status' => [
                'sometimes',
                'required',
                'in:new,read,replied',
            ],

            'priority' => [
                'sometimes',
                'required',
                'in:low,normal,high,urgent',
            ],
        ]);

        $contactMessage->update($data);

        return back()->with(
            'success',
            'Message updated successfully.'
        );
    }

    public function toggleFavorite(
        ContactMessage $contactMessage
    ): RedirectResponse {
        $contactMessage->update([
            'is_favorite' => !$contactMessage->is_favorite,
        ]);

        return back()->with(
            'success',
            $contactMessage->is_favorite
                ? 'Message added to favorites.'
                : 'Message removed from favorites.'
        );
    }

    public function destroy(
        ContactMessage $contactMessage
    ): RedirectResponse {
        $contactMessage->delete();

        return back()->with(
            'success',
            'Message deleted successfully.'
        );
    }

    public function export(Request $request): StreamedResponse
    {
        $query = ContactMessage::query();

        if ($request->filled('search')) {
            $search = $request->input('search');

            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                    ->orWhere('email', 'like', "%{$search}%")
                    ->orWhere('subject', 'like', "%{$search}%")
                    ->orWhere('message', 'like', "%{$search}%");
            });
        }

        if (
            $request->filled('status') &&
            $request->status !== 'all'
        ) {
            $query->where(
                'status',
                $request->status
            );
        }

        if (
            $request->filled('priority') &&
            $request->priority !== 'all'
        ) {
            $query->where(
                'priority',
                $request->priority
            );
        }

        if ($request->favorite === '1') {
            $query->where(
                'is_favorite',
                true
            );
        }

        if ($request->filled('date')) {
            $query->whereDate(
                'created_at',
                $request->date
            );
        }

        $messages = $query
            ->latest()
            ->get();

        return response()->streamDownload(
            function () use ($messages) {

                $handle = fopen(
                    'php://output',
                    'w'
                );

                fputcsv($handle, [
                    'ID',
                    'Name',
                    'Email',
                    'Subject',
                    'Message',
                    'Status',
                    'Priority',
                    'Favorite',
                    'Created At',
                ]);

                foreach ($messages as $message) {
                    fputcsv($handle, [
                        $message->id,
                        $message->name,
                        $message->email,
                        $message->subject,
                        $message->message,
                        $message->status,
                        $message->priority,
                        $message->is_favorite
                            ? 'Yes'
                            : 'No',
                        $message->created_at,
                    ]);
                }

                fclose($handle);
            },
            'contact-messages.csv',
            [
                'Content-Type' => 'text/csv',
            ]
        );
    }
}