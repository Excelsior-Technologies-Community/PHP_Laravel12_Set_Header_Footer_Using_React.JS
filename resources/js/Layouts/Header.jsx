import { Link, router, usePage } from '@inertiajs/react'
import { useState } from 'react'
import ThemeToggle from '@/Components/ThemeToggle'

export default function Header() {
    const { site = {} } = usePage().props

    const [mobileMenuOpen, setMobileMenuOpen] =
        useState(false)

    const [search, setSearch] = useState('')

    const currentUrl = window.location.pathname

    const navigation = [
        {
            name: 'Home',
            href: '/',
            active: currentUrl === '/',
        },
        {
            name: 'About',
            href: '/about',
            active: currentUrl === '/about',
        },
        {
            name: 'Services',
            href: '/services',
            active: currentUrl === '/services',
        },
        {
            name: 'FAQ',
            href: '/faq',
            active: currentUrl === '/faq',
        },
        {
            name: 'Contact',
            href: '/contact',
            active: currentUrl === '/contact',
        },
    ]

    const closeMobileMenu = () => {
        setMobileMenuOpen(false)
    }

    const submitSearch = (event) => {
        event.preventDefault()

        const value = search.trim()

        if (!value) {
            return
        }

        router.get(
            '/search',
            { q: value },
            {
                preserveState: true,
                preserveScroll: true,
            }
        )

        closeMobileMenu()
    }

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">

            <div className="container mx-auto px-6">

                <div className="flex min-h-[72px] items-center justify-between gap-4">

                    {/* Logo */}
                    <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className="flex shrink-0 items-center"
                    >
                        {site.logo_url ? (
                            <img
                                src={site.logo_url}
                                alt={site.site_name || 'Logo'}
                                className="h-10 w-auto object-contain"
                            />
                        ) : (
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-lg font-bold text-white dark:bg-white dark:text-gray-900">
                                {(site.site_name || 'M')
                                    .charAt(0)
                                    .toUpperCase()}
                            </div>
                        )}

                        <span className="ml-3 text-xl font-bold text-gray-900 dark:text-white">
                            {site.site_name || 'MyCompany'}
                        </span>
                    </Link>

                    {/* Desktop */}
                    <div className="hidden items-center gap-4 lg:flex">

                        <nav className="flex items-center gap-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                                        item.active
                                            ? 'bg-slate-900 text-white dark:bg-white dark:text-gray-900'
                                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white'
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Search */}
                        <form
                            onSubmit={submitSearch}
                            className="flex items-center"
                        >
                            <input
                                type="search"
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                                placeholder="Search..."
                                className="w-36 rounded-l-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-cyan-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                            />

                            <button
                                type="submit"
                                className="rounded-r-lg bg-slate-900 px-3 py-2 text-white dark:bg-white dark:text-gray-900"
                                aria-label="Search"
                            >
                                🔍
                            </button>
                        </form>

                        <ThemeToggle />

                    </div>

                    {/* Mobile controls */}
                    <div className="flex items-center gap-2 lg:hidden">

                        <ThemeToggle />

                        <button
                            type="button"
                            onClick={() =>
                                setMobileMenuOpen(
                                    !mobileMenuOpen
                                )
                            }
                            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
                            aria-label="Toggle navigation menu"
                        >
                            {mobileMenuOpen ? (
                                <span className="text-xl">
                                    ✕
                                </span>
                            ) : (
                                <span className="text-xl">
                                    ☰
                                </span>
                            )}
                        </button>

                    </div>

                </div>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className="border-t border-gray-200 py-4 dark:border-gray-700 lg:hidden">

                        <form
                            onSubmit={submitSearch}
                            className="mb-4 flex"
                        >
                            <input
                                type="search"
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                                placeholder="Search website..."
                                className="min-w-0 flex-1 rounded-l-lg border border-gray-300 bg-white px-3 py-3 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                            />

                            <button
                                type="submit"
                                className="rounded-r-lg bg-slate-900 px-4 text-white dark:bg-white dark:text-gray-900"
                            >
                                🔍
                            </button>
                        </form>

                        <nav className="flex flex-col gap-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={closeMobileMenu}
                                    className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                                        item.active
                                            ? 'bg-slate-900 text-white dark:bg-white dark:text-gray-900'
                                            : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                    </div>
                )}

            </div>
        </header>
    )
}