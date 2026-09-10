<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SiteSetting;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SiteSettingController extends Controller
{
    public function edit()
    {
        return Inertia::render('Admin/Settings', ['settings' => SiteSetting::values()]);
    }

    public function update(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'settings' => ['required', 'array'],
            'settings.site_name' => ['required', 'string', 'max:120'],
            'settings.tagline' => ['nullable', 'string', 'max:255'],
            'settings.hero_title' => ['nullable', 'string', 'max:255'],
            'settings.hero_text' => ['nullable', 'string', 'max:2000'],
            'settings.contact_intro' => ['nullable', 'string', 'max:1000'],
            'settings.footer_about' => ['nullable', 'string', 'max:1000'],
            'settings.footer_text' => ['nullable', 'string', 'max:255'],
            'settings.logo_url' => ['nullable', 'url', 'max:2048'],
            'settings.facebook_url' => ['nullable', 'url', 'max:2048'],
            'settings.instagram_url' => ['nullable', 'url', 'max:2048'],
            'settings.twitter_url' => ['nullable', 'url', 'max:2048'],
            'settings.map_url' => ['nullable', 'url', 'max:2048'],
        ]);

        foreach (array_intersect_key($data['settings'], SiteSetting::defaults()) as $key => $value) {
            SiteSetting::updateOrCreate(['key' => $key], ['value' => is_string($value) ? $value : '']);
        }

        return back()->with('success', 'Site settings updated.');
    }
}