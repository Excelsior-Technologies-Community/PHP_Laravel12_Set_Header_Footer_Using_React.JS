# PHP_Laravel12_Set_Header_Footer_Using_React.JS

---

##  Overview

This README contains **ABSOLUTE FULL CODE** for implementing
a **common Header & Footer layout** using:

- Laravel 12
- Breeze Authentication
- Inertia.js
- React 18
- Tailwind CSS

---

##  Features

- Centralized Header & Footer
- Reusable AppLayout
- SPA navigation (Inertia)
- Tailwind CSS UI
- Laravel 12 compatible
- Clean project structure

---

##  Complete Folder Structure

```
resources/
├── js/
│   ├── app.jsx
│   ├── bootstrap.js
│   ├── Layouts/
│   │   ├── AppLayout.jsx
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   └── Pages/
│       ├── Home.jsx
│       └── About.jsx
routes/
└── web.php

public/
└── images/logo.png

.env
README.md
```

---

##  STEP 1: Install Laravel 12

```bash
composer create-project laravel/laravel laravel12-react-layout
```

---

##  STEP 2: Install Breeze (Inertia + React)

```bash
composer require laravel/breeze --dev

php artisan breeze:install react

npm install

php artisan migrate

npm run dev

php artisan serve
```

---

##  STEP 3: Environment Setup (.env)

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```

---

##  STEP 4: Inertia React Entry File

### resources/js/app.jsx

```jsx
import '../css/app.css'
import './bootstrap'

import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { createRoot } from 'react-dom/client'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.jsx`,
      import.meta.glob('./Pages/**/*.jsx')
    ),
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})
```

---

##  STEP 5: Header Component 

### resources/js/Layouts/Header.jsx

```jsx
import { Link } from '@inertiajs/react'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="flex items-center">
          <img src="/images/logo.png" className="h-10" />
        </Link>

        <nav className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms-condition">Terms</Link>
        </nav>
      </div>
    </header>
  )
}
```

---

##  STEP 6: Footer Component 

### resources/js/Layouts/Footer.jsx

```jsx
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto grid md:grid-cols-4 gap-6 px-6 py-10">
        <div>
          <h3 className="text-white font-bold">MyCompany</h3>
          <p>Laravel + React Projects</p>
        </div>

        <div>
          <h4 className="text-white">Legal</h4>
          <ul>
            <li><a href="/privacy-policy">Privacy</a></li>
            <li><a href="/terms-condition">Terms</a></li>
            <li><a href="/refund-policy">Refund</a></li>
          </ul>
        </div>

        <div className="flex gap-4 text-xl">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
        </div>

        <iframe
          src="https://www.google.com/maps?q=Ahmedabad&output=embed"
          className="w-full h-32"
        ></iframe>
      </div>

      <div className="text-center py-4 text-sm">
        © {new Date().getFullYear()} MyCompany
      </div>
    </footer>
  )
}
```

---

##  STEP 7: App Layout 

### resources/js/Layouts/AppLayout.jsx

```jsx
import Header from './Header'
import Footer from './Footer'

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-8">
        {children}
      </main>
      <Footer />
    </div>
  )
}
```

---

## 🖥STEP 8: Pages 

### Home.jsx

```jsx
import AppLayout from '@/Layouts/AppLayout'

export default function Home() {
  return (
    <AppLayout>
      <h1 className="text-4xl text-center">Home Page</h1>
    </AppLayout>
  )
}
```

### About.jsx

```jsx
import AppLayout from '@/Layouts/AppLayout'

export default function About() {
  return (
    <AppLayout>
      <h1 className="text-3xl text-center">About Page</h1>
    </AppLayout>
  )
}
```

---

##  STEP 9: Routes 

### routes/web.php

```php
<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/privacy-policy', fn () => inertia('PrivacyPolicy'));
Route::get('/terms-condition', fn () => inertia('TermsCondition'));
Route::get('/refund-policy', fn () => inertia('RefundPolicy'));

```

---

##  Run Project

```bash
php artisan serve

npm run dev
```

Open:

```
http://127.0.0.1:8000
```
HEADER:-

<img width="1911" height="932" alt="Screenshot 2025-12-18 173722" src="https://github.com/user-attachments/assets/6a63f781-7404-408a-a5c7-53b5a000a5d5" />


FOOTER:-

<img width="1916" height="927" alt="Screenshot 2025-12-18 173455" src="https://github.com/user-attachments/assets/191ea1b0-233e-4702-baf9-6adef16887df" />


---
