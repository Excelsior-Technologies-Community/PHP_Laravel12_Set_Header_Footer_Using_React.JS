import { usePage } from '@inertiajs/react'

import Header from './Header'
import Footer from './Footer'
import Toast from '../Components/Toast'

export default function AppLayout({ children }) {

    const { flash } = usePage().props

    return (
        <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">

            <Header />

            <main className="flex-1">
                {children}
            </main>

            <Footer />

            <Toast message={flash?.success} />

        </div>
    )
}