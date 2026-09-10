<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactMessageRequest;
use App\Models\ContactMessage;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function create()
    {
        return Inertia::render('Contact');
    }

    public function store(ContactMessageRequest $request): RedirectResponse
    {
        $message = ContactMessage::create($request->validated());
        $adminEmail = config('mail.from.address');

        if ($adminEmail) {
            Mail::raw("New contact message from {$message->name}: {$message->message}", fn ($mail) =>
                $mail->to($adminEmail)->subject($message->subject)
            );
            Mail::raw('Thank you for contacting us. We will get back to you shortly.', fn ($mail) =>
                $mail->to($message->email)->subject('We received your message')
            );
        }

        return back()->with('success', 'Thanks for reaching out. We will reply shortly.');
    }
}