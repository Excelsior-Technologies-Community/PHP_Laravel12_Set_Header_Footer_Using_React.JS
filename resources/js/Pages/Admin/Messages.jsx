import { Head, router } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

export default function Messages({ messages = [] }) {
    const update = (id, status) => router.patch(`/admin/messages/${id}`, { status })
    const remove = (id) => { if (window.confirm('Delete this message?')) router.delete(`/admin/messages/${id}`) }
    return <AuthenticatedLayout header={<h2 className="text-xl font-semibold text-gray-800">Contact messages</h2>}><Head title="Contact messages" /><div className="space-y-4">{messages.length === 0 && <p className="rounded bg-white p-6 text-gray-600">No messages yet.</p>}{messages.map(message => <article key={message.id} className="rounded bg-white p-6 shadow-sm"><div className="flex flex-wrap items-start justify-between gap-4"><div><h3 className="text-lg font-semibold">{message.subject}</h3><p className="text-sm text-gray-500">{message.name} · {message.email}</p></div><select value={message.status} onChange={e => update(message.id, e.target.value)} className="rounded border-gray-300"><option value="new">New</option><option value="read">Read</option><option value="replied">Replied</option></select></div><p className="mt-4 whitespace-pre-line text-gray-700">{message.message}</p><button onClick={() => remove(message.id)} className="mt-4 text-sm text-red-600">Delete</button></article>)}</div></AuthenticatedLayout>
}