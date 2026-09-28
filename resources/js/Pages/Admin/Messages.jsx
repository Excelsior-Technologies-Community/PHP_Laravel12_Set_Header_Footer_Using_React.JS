import { Head, router } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

export default function Messages({ messages = [] }) {

    const update = (id, status) => {
        router.patch(
            `/admin/messages/${id}`,
            { status }
        )
    }

    const remove = (id) => {
        if (
            window.confirm(
                'Are you sure you want to delete this message?'
            )
        ) {
            router.delete(`/admin/messages/${id}`)
        }
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

            <div className="mx-auto max-w-7xl space-y-4 px-4 py-8 sm:px-6 lg:px-8">

                {messages.length === 0 && (
                    <div className="rounded-xl bg-white p-8 text-center shadow-sm dark:bg-gray-800">

                        <div className="text-4xl">
                            📭
                        </div>

                        <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">
                            No messages yet
                        </h3>

                        <p className="mt-1 text-gray-600 dark:text-gray-400">
                            Messages submitted through the contact form will appear here.
                        </p>

                    </div>
                )}

                {messages.map((message) => (
                    <article
                        key={message.id}
                        className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md dark:bg-gray-800"
                    >

                        <div className="flex flex-wrap items-start justify-between gap-4">

                            <div>

                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {message.subject}
                                </h3>

                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                    {message.name} · {message.email}
                                </p>

                            </div>

                            <select
                                value={message.status}
                                onChange={(e) =>
                                    update(
                                        message.id,
                                        e.target.value
                                    )
                                }
                                className="rounded-lg border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
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

                        </div>

                        <div className="mt-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-900">

                            <p className="whitespace-pre-line text-gray-700 dark:text-gray-300">
                                {message.message}
                            </p>

                        </div>

                        <div className="mt-4 flex items-center justify-between">

                            <span
                                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                    message.status === 'new'
                                        ? 'bg-blue-100 text-blue-700'
                                        : message.status === 'read'
                                            ? 'bg-yellow-100 text-yellow-700'
                                            : 'bg-green-100 text-green-700'
                                }`}
                            >
                                {message.status.toUpperCase()}
                            </span>

                            <button
                                type="button"
                                onClick={() =>
                                    remove(message.id)
                                }
                                className="text-sm font-medium text-red-600 transition hover:text-red-800"
                            >
                                Delete
                            </button>

                        </div>

                    </article>
                ))}

            </div>

        </AuthenticatedLayout>
    )
}