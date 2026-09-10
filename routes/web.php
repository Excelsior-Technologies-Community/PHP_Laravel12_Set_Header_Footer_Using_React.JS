<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Admin\ContactMessageController;
use App\Http\Controllers\Admin\SiteSettingController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProfileController;

Route::get('/', fn () => Inertia::render('Home'))->name('home');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::middleware('auth')->get('/dashboard', fn () => Inertia::render('Dashboard'))->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/contact', [ContactController::class, 'create'])->name('contact');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
Route::get('/faq', fn () => Inertia::render('FAQ'))->name('faq');
Route::get('/services', fn () => Inertia::render('Services'))->name('services');

Route::get('/privacy-policy', fn () => inertia('PrivacyPolicy'));
Route::get('/terms-condition', fn () => inertia('TermsCondition'));
Route::get('/refund-policy', fn () => inertia('RefundPolicy'));

Route::middleware('auth')->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', fn () => Inertia::render('Admin/Dashboard'))->name('dashboard');
    Route::get('/settings', [SiteSettingController::class, 'edit'])->name('settings.edit');
    Route::put('/settings', [SiteSettingController::class, 'update'])->name('settings.update');
    Route::get('/messages', [ContactMessageController::class, 'index'])->name('messages.index');
    Route::patch('/messages/{contactMessage}', [ContactMessageController::class, 'update'])->name('messages.update');
    Route::delete('/messages/{contactMessage}', [ContactMessageController::class, 'destroy'])->name('messages.destroy');
});

require __DIR__.'/auth.php';
