<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function index(Request $request)
    {
        $search = trim((string) $request->input('q', ''));

        $pages = [
            [
                'title' => 'Home',
                'description' => 'Build a better digital presence.',
                'url' => '/',
            ],
            [
                'title' => 'About',
                'description' => 'Learn more about our company and values.',
                'url' => '/about',
            ],
            [
                'title' => 'Services',
                'description' => 'Explore our digital services.',
                'url' => '/services',
            ],
            [
                'title' => 'FAQ',
                'description' => 'Frequently asked questions.',
                'url' => '/faq',
            ],
            [
                'title' => 'Contact',
                'description' => 'Get in touch with our team.',
                'url' => '/contact',
            ],
        ];

        if ($search !== '') {
            $pages = collect($pages)
                ->filter(function ($page) use ($search) {
                    return str_contains(
                        strtolower($page['title']),
                        strtolower($search)
                    )
                    ||
                    str_contains(
                        strtolower($page['description']),
                        strtolower($search)
                    );
                })
                ->values()
                ->all();
        }

        return Inertia::render('Search', [
            'search' => $search,
            'results' => $pages,
        ]);
    }
}