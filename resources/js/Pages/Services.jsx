import { Head } from '@inertiajs/react'
import AppLayout from '@/Layouts/AppLayout'

const services = [
    [
        'Web applications',
        'Scalable Laravel and React products built around your workflow.',
    ],
    [
        'Product design',
        'Clear interfaces that make complex work easier to understand.',
    ],
    [
        'Growth support',
        'Ongoing improvements, performance work, and dependable maintenance.',
    ],
]

export default function Services() {
    return (
        <AppLayout>
            <Head title="Services" />

            <div className="bg-gray-50 px-6 py-12 transition-colors duration-200 dark:bg-gray-950">
                
                <div className="mx-auto max-w-7xl">

                    {/* Page Heading */}
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                        Services
                    </h1>

                    {/* Service Cards */}
                    <div className="mt-10 grid gap-6 md:grid-cols-3">

                        {services.map(([title, text]) => (
                            <article
                                key={title}
                                className="
                                    rounded-lg
                                    border
                                    border-gray-200
                                    bg-white
                                    p-6
                                    shadow-sm
                                    transition
                                    duration-200
                                    hover:-translate-y-1
                                    hover:shadow-md
                                    dark:border-gray-700
                                    dark:bg-gray-900
                                    dark:shadow-gray-950/30
                                    dark:hover:border-gray-600
                                "
                            >

                                {/* Service Title */}
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {title}
                                </h2>

                                {/* Service Description */}
                                <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">
                                    {text}
                                </p>

                            </article>
                        ))}

                    </div>

                </div>
            </div>
        </AppLayout>
    )
}