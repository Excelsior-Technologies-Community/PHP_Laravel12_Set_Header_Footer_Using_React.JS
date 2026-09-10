import { Head, Link } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

export default function Dashboard() {
    return <AuthenticatedLayout header={<h2 className="text-xl font-semibold text-gray-800">Admin</h2>}><Head title="Admin" /><div className="grid gap-6 md:grid-cols-2"><Link href="/admin/settings" className="rounded bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold">Site settings</h3><p className="mt-2 text-gray-600">Update the header, footer, contact copy, and social links.</p></Link><Link href="/admin/messages" className="rounded bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold">Contact messages</h3><p className="mt-2 text-gray-600">Review and manage messages sent from the contact form.</p></Link></div></AuthenticatedLayout>
}