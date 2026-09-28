import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'

export default function Dashboard() {

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-white">
                    Dashboard
                </h2>
            }
        >

            <Head title="Dashboard" />

            <div className="py-12">

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <div className="overflow-hidden rounded-xl bg-white shadow-sm dark:bg-gray-800">

                        <div className="p-8">

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                                <div>

                                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                                        Welcome back 👋
                                    </h1>

                                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                                        You are successfully logged into your account.
                                    </p>

                                </div>

                                <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-900 dark:text-green-300">
                                    ● Online
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </AuthenticatedLayout>
    )
}