import { useEffect, useState } from 'react'

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')

        if (savedTheme === 'dark') {
            setDarkMode(true)
            document.documentElement.classList.add('dark')
        } else if (savedTheme === 'light') {
            setDarkMode(false)
            document.documentElement.classList.remove('dark')
        } else {
            const prefersDark = window.matchMedia(
                '(prefers-color-scheme: dark)'
            ).matches

            setDarkMode(prefersDark)

            document.documentElement.classList.toggle(
                'dark',
                prefersDark
            )
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = !darkMode

        setDarkMode(newTheme)

        document.documentElement.classList.toggle(
            'dark',
            newTheme
        )

        localStorage.setItem(
            'theme',
            newTheme ? 'dark' : 'light'
        )
    }

    return (
        <button
            type="button"
            onClick={toggleTheme}
            title={
                darkMode
                    ? 'Switch to light mode'
                    : 'Switch to dark mode'
            }
            aria-label={
                darkMode
                    ? 'Switch to light mode'
                    : 'Switch to dark mode'
            }
            className="
                inline-flex
                items-center
                justify-center
                rounded-lg
                border
                border-gray-300
                bg-white
                px-3
                py-2
                text-lg
                transition
                hover:bg-gray-100
                dark:border-gray-600
                dark:bg-gray-800
                dark:hover:bg-gray-700
            "
        >
            {darkMode ? '☀️' : '🌙'}
        </button>
    )
}   