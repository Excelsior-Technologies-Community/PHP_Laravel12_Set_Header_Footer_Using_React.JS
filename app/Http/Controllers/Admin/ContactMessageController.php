<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactMessage;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactMessageController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Messages', ['messages' => ContactMessage::latest()->get()]);
    }

    public function update(Request $request, ContactMessage $contactMessage): RedirectResponse
    {
        $contactMessage->update($request->validate(['status' => ['required', 'in:new,read,replied']]));
        return back();
    }

    public function destroy(ContactMessage $contactMessage): RedirectResponse
    {
        $contactMessage->delete();
        return back();
    }
}