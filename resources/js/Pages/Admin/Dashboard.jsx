import { Head, Link } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

export default function Dashboard() {

    const cards = [
        {
            title: 'Site Settings',
            description:
                'Update the header, footer, contact copy, logo, social links and map.',
            href: '/admin/settings',
            icon: '⚙️',
        },
        {
            title: 'Contact Messages',
            description:
                'Review, update and manage messages submitted through the contact form.',
            href: '/admin/messages',
            icon: '✉️',
        },
    ]

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                    Admin Dashboard
                </h2>
            }
        >

            <Head title="Admin Dashboard" />

            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

                <div className="mb-8">

                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Administration
                    </h1>

                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Manage your website layout and contact messages.
                    </p>

                </div>

                <div className="grid gap-6 md:grid-cols-2">

                    {cards.map((card) => (

                        <Link
                            key={card.title}
                            href={card.href}
                            className="group rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800"
                        >

                            <div className="flex items-start gap-4">

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-2xl transition group-hover:bg-slate-900 group-hover:text-white dark:bg-gray-700 dark:group-hover:bg-white dark:group-hover:text-gray-900">
                                    {card.icon}
                                </div>

                                <div>

                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        {card.title}
                                    </h3>

                                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                                        {card.description}
                                    </p>

                                </div>

                            </div>

                        </Link>

                    ))}

                </div>

            </div>

        </AuthenticatedLayout>
    )
}