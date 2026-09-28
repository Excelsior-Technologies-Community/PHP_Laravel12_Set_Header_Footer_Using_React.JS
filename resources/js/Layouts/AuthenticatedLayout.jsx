import ApplicationLogo from '@/Components/ApplicationLogo'
import Dropdown from '@/Components/Dropdown'
import NavLink from '@/Components/NavLink'
import ResponsiveNavLink from '@/Components/ResponsiveNavLink'
import ThemeToggle from '@/Components/ThemeToggle'
import Toast from '@/Components/Toast'
import { Link, usePage } from '@inertiajs/react'
import { useState } from 'react'

export default function AuthenticatedLayout({ header, children }) {
    const { auth, flash = {} } = usePage().props
    const user = auth.user

    const [
        showingNavigationDropdown,
        setShowingNavigationDropdown,
    ] = useState(false)

    return (
        <div
            className="
                min-h-screen
                bg-gray-100
                text-gray-900
                transition-colors
                duration-200
                dark:bg-gray-950
                dark:text-gray-100
            "
        >

            {/* Navigation */}
            <nav
                className="
                    border-b
                    border-gray-200
                    bg-white
                    transition-colors
                    duration-200
                    dark:border-gray-700
                    dark:bg-gray-900
                "
            >

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <div className="flex h-16 justify-between">

                        {/* Left */}
                        <div className="flex">

                            {/* Logo */}
                            <div className="flex shrink-0 items-center">
                                <Link href="/">
                                    <ApplicationLogo
                                        className="
                                            block
                                            h-9
                                            w-auto
                                            fill-current
                                            text-gray-800
                                            dark:text-white
                                        "
                                    />
                                </Link>
                            </div>

                            {/* Desktop Navigation */}
                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">

                                <NavLink
                                    href={route('dashboard')}
                                    active={route().current('dashboard')}
                                >
                                    Dashboard
                                </NavLink>

                            </div>

                        </div>

                        {/* Desktop Right */}
                        <div className="hidden items-center sm:ms-6 sm:flex">

                            <ThemeToggle />

                            <div className="relative ms-3">

                                <Dropdown>

                                    <Dropdown.Trigger>

                                        <span className="inline-flex rounded-md">

                                            <button
                                                type="button"
                                                className="
                                                    inline-flex
                                                    items-center
                                                    rounded-md
                                                    border
                                                    border-transparent
                                                    bg-white
                                                    px-3
                                                    py-2
                                                    text-sm
                                                    font-medium
                                                    leading-4
                                                    text-gray-600
                                                    transition
                                                    duration-150
                                                    ease-in-out
                                                    hover:bg-gray-50
                                                    hover:text-gray-900
                                                    focus:outline-none
                                                    dark:bg-gray-900
                                                    dark:text-gray-300
                                                    dark:hover:bg-gray-800
                                                    dark:hover:text-white
                                                "
                                            >
                                                {user.name}

                                                <svg
                                                    className="-me-0.5 ms-2 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>

                                            </button>

                                        </span>

                                    </Dropdown.Trigger>

                                    <Dropdown.Content>

                                        <Dropdown.Link
                                            href={route('profile.edit')}
                                        >
                                            Profile
                                        </Dropdown.Link>

                                        <Dropdown.Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>

                                    </Dropdown.Content>

                                </Dropdown>

                            </div>

                        </div>

                        {/* Mobile Controls */}
                        <div className="-me-2 flex items-center sm:hidden">

                            <ThemeToggle />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) =>
                                            !previousState
                                    )
                                }
                                className="
                                    ms-2
                                    inline-flex
                                    items-center
                                    justify-center
                                    rounded-md
                                    p-2
                                    text-gray-500
                                    transition
                                    duration-150
                                    ease-in-out
                                    hover:bg-gray-100
                                    hover:text-gray-700
                                    focus:bg-gray-100
                                    focus:text-gray-700
                                    focus:outline-none
                                    dark:text-gray-300
                                    dark:hover:bg-gray-800
                                    dark:hover:text-white
                                    dark:focus:bg-gray-800
                                    dark:focus:text-white
                                "
                                aria-label="Toggle navigation menu"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? 'inline-flex'
                                                : 'hidden'
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />

                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? 'inline-flex'
                                                : 'hidden'
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>

                        </div>

                    </div>

                </div>

                {/* Mobile Menu */}
                <div
                    className={
                        (showingNavigationDropdown
                            ? 'block'
                            : 'hidden') +
                        ' sm:hidden'
                    }
                >

                    {/* Mobile Navigation */}
                    <div className="space-y-1 border-t border-gray-200 pb-3 pt-2 dark:border-gray-700">

                        <ResponsiveNavLink
                            href={route('dashboard')}
                            active={route().current('dashboard')}
                        >
                            Dashboard
                        </ResponsiveNavLink>

                    </div>

                    {/* Mobile User Section */}
                    <div
                        className="
                            border-t
                            border-gray-200
                            pb-1
                            pt-4
                            dark:border-gray-700
                        "
                    >

                        <div className="px-4">

                            <div
                                className="
                                    text-base
                                    font-medium
                                    text-gray-900
                                    dark:text-white
                                "
                            >
                                {user.name}
                            </div>

                            <div
                                className="
                                    text-sm
                                    font-medium
                                    text-gray-500
                                    dark:text-gray-400
                                "
                            >
                                {user.email}
                            </div>

                        </div>

                        <div className="mt-3 space-y-1">

                            <ResponsiveNavLink
                                href={route('profile.edit')}
                            >
                                Profile
                            </ResponsiveNavLink>

                            <ResponsiveNavLink
                                method="post"
                                href={route('logout')}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>

                        </div>

                    </div>

                </div>

            </nav>

            {/* Page Header */}
            {header && (
                <header
                    className="
                        border-b
                        border-gray-200
                        bg-white
                        shadow-sm
                        transition-colors
                        duration-200
                        dark:border-gray-700
                        dark:bg-gray-900
                    "
                >
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            {/* Page Content */}
            <main className="transition-colors duration-200">
                {children}
            </main>

            {/* Global Toast Notification */}
            <Toast message={flash.success} />

        </div>
    )
}