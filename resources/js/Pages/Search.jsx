import { Head, Link } from '@inertiajs/react'
import AppLayout from '@/Layouts/AppLayout'

export default function Search({
    search = '',
    results = [],
}) {
    return (
        <AppLayout>

            <Head title="Search" />

            <div className="mx-auto max-w-5xl px-6 py-12">

                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                    Search
                </h1>

                {search && (
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Search results for:
                        <strong className="ml-1 text-gray-900 dark:text-white">
                            {search}
                        </strong>
                    </p>
                )}

                {!search && (
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Enter a search term to find pages.
                    </p>
                )}

                <div className="mt-8 space-y-4">

                    {results.length === 0 && (
                        <div className="rounded-xl bg-white p-8 text-center shadow-sm dark:bg-gray-800">

                            <div className="text-4xl">
                                🔎
                            </div>

                            <h2 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">
                                No results found
                            </h2>

                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                Try another search term.
                            </p>

                        </div>
                    )}

                    {results.map((result) => (
                        <Link
                            key={result.url}
                            href={result.url}
                            className="block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
                        >
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {result.title}
                            </h2>

                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                {result.description}
                            </p>
                        </Link>
                    ))}

                </div>

            </div>

        </AppLayout>
    )
}