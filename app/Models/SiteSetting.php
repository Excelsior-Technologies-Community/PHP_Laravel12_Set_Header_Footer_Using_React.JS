<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Schema;

class SiteSetting extends Model
{
    protected $fillable = ['key', 'value'];

    public static function defaults(): array
    {
        return [
            'site_name' => 'MyCompany',
            'tagline' => 'Digital products, thoughtfully built',
            'hero_title' => 'Build a better digital presence.',
            'hero_text' => 'We create reliable web experiences that help ambitious businesses move forward.',
            'contact_intro' => 'Tell us what you are building and how we can help.',
            'footer_about' => 'We build fast, secure and scalable digital products.',
            'footer_text' => '© '.date('Y').' MyCompany. All rights reserved.',
            'logo_url' => '',
            'facebook_url' => '',
            'instagram_url' => '',
            'twitter_url' => '',
            'map_url' => '',
        ];
    }

    public static function values(): array
    {
        $defaults = static::defaults();

        if (! Schema::hasTable('site_settings')) {
            return $defaults;
        }

        return array_merge($defaults, static::query()->pluck('value', 'key')->all());
    }
}