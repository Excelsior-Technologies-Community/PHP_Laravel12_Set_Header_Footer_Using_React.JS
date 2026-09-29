import { Head, router } from '@inertiajs/react'
import { useState } from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

export default function Messages({
    messages,
    stats = {},
    filters = {},
}) {
    const [search, setSearch] = useState(
        filters.search || ''
    )

    const applyFilters = () => {
        router.get(
            '/admin/messages',
            {
                search,
                status: filters.status || 'all',
                priority: filters.priority || 'all',
                favorite: filters.favorite || '0',
                date: filters.date || '',
            },
            {
                preserveState: true,
                preserveScroll: true,
            }
        )
    }

    const changeFilter = (key, value) => {
        router.get(
            '/admin/messages',
            {
                ...filters,
                search,
                [key]: value,
            },
            {
                preserveState: true,
                preserveScroll: true,
            }
        )
    }

    const updateStatus = (id, status) => {
        router.patch(
            `/admin/messages/${id}`,
            { status },
            {
                preserveScroll: true,
            }
        )
    }

    const updatePriority = (id, priority) => {
        router.patch(
            `/admin/messages/${id}`,
            { priority },
            {
                preserveScroll: true,
            }
        )
    }

    const toggleFavorite = (id) => {
        router.patch(
            `/admin/messages/${id}/favorite`,
            {},
            {
                preserveScroll: true,
            }
        )
    }

    const remove = (id) => {
        if (
            window.confirm(
                'Are you sure you want to delete this message?'
            )
        ) {
            router.delete(
                `/admin/messages/${id}`,
                {
                    preserveScroll: true,
                }
            )
        }
    }

    const exportMessages = () => {
        const params = new URLSearchParams()

        if (search) {
            params.append('search', search)
        }

        params.append(
            'status',
            filters.status || 'all'
        )

        params.append(
            'priority',
            filters.priority || 'all'
        )

        params.append(
            'favorite',
            filters.favorite || '0'
        )

        if (filters.date) {
            params.append(
                'date',
                filters.date
            )
        }

        window.location.href =
            `/admin/messages/export?${params.toString()}`
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                    Contact Messages
                </h2>
            }
        >

            <Head title="Contact Messages" />

            <div className="mx-auto max-w-7xl space-y-6 px-4 py-8 sm:px-6 lg:px-8">

                {/* Statistics */}
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">

                    {[
                        ['Total', stats.total],
                        ['New', stats.new],
                        ['Read', stats.read],
                        ['Replied', stats.replied],
                        ['Favorite', stats.favorite],
                        ['Urgent', stats.urgent],
                        ['Today', stats.today],
                    ].map(([title, value]) => (
                        <div
                            key={title}
                            className="rounded-xl bg-white p-4 shadow-sm dark:bg-gray-800"
                        >
                            <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                {title}
                            </p>

                            <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
                                {value ?? 0}
                            </p>
                        </div>
                    ))}

                </div>

                {/* Filters */}
                <div className="rounded-xl bg-white p-5 shadow-sm dark:bg-gray-800">

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">

                        <div className="lg:col-span-2">
                            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
                                Search
                            </label>

                            <input
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        applyFilters()
                                    }
                                }}
                                placeholder="Name, email, subject..."
                                className="w-full rounded-lg border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            />
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
                                Status
                            </label>

                            <select
                                value={
                                    filters.status ||
                                    'all'
                                }
                                onChange={(e) =>
                                    changeFilter(
                                        'status',
                                        e.target.value
                                    )
                                }
                                className="w-full rounded-lg border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            >
                                <option value="all">
                                    All
                                </option>
                                <option value="new">
                                    New
                                </option>
                                <option value="read">
                                    Read
                                </option>
                                <option value="replied">
                                    Replied
                                </option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
                                Priority
                            </label>

                            <select
                                value={
                                    filters.priority ||
                                    'all'
                                }
                                onChange={(e) =>
                                    changeFilter(
                                        'priority',
                                        e.target.value
                                    )
                                }
                                className="w-full rounded-lg border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            >
                                <option value="all">
                                    All
                                </option>
                                <option value="low">
                                    Low
                                </option>
                                <option value="normal">
                                    Normal
                                </option>
                                <option value="high">
                                    High
                                </option>
                                <option value="urgent">
                                    Urgent
                                </option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
                                Date
                            </label>

                            <input
                                type="date"
                                value={
                                    filters.date || ''
                                }
                                onChange={(e) =>
                                    changeFilter(
                                        'date',
                                        e.target.value
                                    )
                                }
                                className="w-full rounded-lg border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            />
                        </div>

                    </div>

                    <div className="mt-4 flex flex-wrap gap-3">

                        <button
                            type="button"
                            onClick={applyFilters}
                            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-gray-900"
                        >
                            Search
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                changeFilter(
                                    'favorite',
                                    filters.favorite === '1'
                                        ? '0'
                                        : '1'
                                )
                            }
                            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 dark:border-gray-600 dark:text-gray-200"
                        >
                            {filters.favorite === '1'
                                ? '★ Favorites'
                                : '☆ Favorites'}
                        </button>

                        <button
                            type="button"
                            onClick={exportMessages}
                            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white"
                        >
                            📥 Export CSV
                        </button>

                    </div>

                </div>

                {/* Messages */}
                {messages.data.length === 0 && (
                    <div className="rounded-xl bg-white p-8 text-center shadow-sm dark:bg-gray-800">
                        <div className="text-4xl">
                            📭
                        </div>

                        <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">
                            No messages found
                        </h3>
                    </div>
                )}

                {messages.data.map((message) => (

                    <article
                        key={message.id}
                        className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800"
                    >

                        <div className="flex flex-wrap items-start justify-between gap-4">

                            <div className="flex items-start gap-3">

                                <button
                                    type="button"
                                    onClick={() =>
                                        toggleFavorite(
                                            message.id
                                        )
                                    }
                                    className="text-2xl"
                                    title="Toggle favorite"
                                >
                                    {message.is_favorite
                                        ? '★'
                                        : '☆'}
                                </button>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {message.subject}
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                        {message.name}
                                        {' · '}
                                        {message.email}
                                    </p>
                                </div>

                            </div>

                            <div className="flex flex-wrap gap-2">

                                <select
                                    value={
                                        message.status
                                    }
                                    onChange={(e) =>
                                        updateStatus(
                                            message.id,
                                            e.target.value
                                        )
                                    }
                                    className="rounded-lg border-gray-300 bg-white text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                >
                                    <option value="new">
                                        New
                                    </option>

                                    <option value="read">
                                        Read
                                    </option>

                                    <option value="replied">
                                        Replied
                                    </option>
                                </select>

                                <select
                                    value={
                                        message.priority ||
                                        'normal'
                                    }
                                    onChange={(e) =>
                                        updatePriority(
                                            message.id,
                                            e.target.value
                                        )
                                    }
                                    className="rounded-lg border-gray-300 bg-white text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                >
                                    <option value="low">
                                        Low
                                    </option>

                                    <option value="normal">
                                        Normal
                                    </option>

                                    <option value="high">
                                        High
                                    </option>

                                    <option value="urgent">
                                        Urgent
                                    </option>
                                </select>

                            </div>

                        </div>

                        <div className="mt-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-900">

                            <p className="whitespace-pre-line text-gray-700 dark:text-gray-300">
                                {message.message}
                            </p>

                        </div>

                        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">

                            <div className="flex gap-2">

                                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-200">
                                    {message.status.toUpperCase()}
                                </span>

                                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                                    {(message.priority || 'normal').toUpperCase()}
                                </span>

                            </div>

                            <button
                                type="button"
                                onClick={() =>
                                    remove(
                                        message.id
                                    )
                                }
                                className="text-sm font-medium text-red-600 hover:text-red-800"
                            >
                                Delete
                            </button>

                        </div>

                    </article>

                ))}

                {/* Pagination */}
                {messages.links &&
                    messages.links.length > 3 && (
                        <div className="flex flex-wrap gap-2">

                            {messages.links.map(
                                (link, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        disabled={
                                            !link.url
                                        }
                                        onClick={() =>
                                            link.url &&
                                            router.get(
                                                link.url,
                                                {},
                                                {
                                                    preserveState: true,
                                                    preserveScroll: true,
                                                }
                                            )
                                        }
                                        className={`rounded-lg px-3 py-2 text-sm ${
                                            link.active
                                                ? 'bg-slate-900 text-white dark:bg-white dark:text-gray-900'
                                                : 'bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-200'
                                        } ${
                                            !link.url
                                                ? 'cursor-not-allowed opacity-40'
                                                : ''
                                        }`}
                                    >
                                        {index}
                                    </button>
                                )
                            )}

                        </div>
                    )}

            </div>

        </AuthenticatedLayout>
    )
}