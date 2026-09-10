import { Head, useForm, usePage } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

const sections = [
    { title: 'Brand and home page', fields: [['site_name', 'Site name'], ['tagline', 'Tagline'], ['hero_title', 'Home headline'], ['hero_text', 'Home introduction']] },
    { title: 'Contact and footer', fields: [['contact_intro', 'Contact introduction'], ['footer_about', 'Footer description'], ['footer_text', 'Footer copyright']] },
    { title: 'Links and media', fields: [['logo_url', 'Logo URL'], ['facebook_url', 'Facebook URL'], ['instagram_url', 'Instagram URL'], ['twitter_url', 'Twitter URL'], ['map_url', 'Map embed URL']] },
]
const fields = sections.flatMap(section => section.fields)

export default function Settings({ settings = {} }) {
    const { flash = {} } = usePage().props
    const { data, setData, put, processing, errors } = useForm({ settings: Object.fromEntries(fields.map(([key]) => [key, settings[key] ?? ''])) })
    const submit = (event) => { event.preventDefault(); put('/admin/settings') }
    return <AuthenticatedLayout header={<h2 className="text-xl font-semibold text-gray-800">Site settings</h2>}><Head title="Site settings" /><form onSubmit={submit} className="space-y-6">{flash.success && <p className="rounded bg-green-100 p-4 text-green-800">{flash.success}</p>}{sections.map(section => <section key={section.title} className="rounded bg-white p-6 shadow-sm"><h3 className="mb-5 text-lg font-semibold text-gray-900">{section.title}</h3><div className="grid gap-5 md:grid-cols-2">{section.fields.map(([key, label]) => { const longText = key === 'hero_text' || key === 'contact_intro' || key === 'footer_about'; return <label key={key} className={longText ? 'md:col-span-2' : ''}><span className="mb-1 block font-medium text-gray-700">{label}</span>{longText ? <textarea rows="3" value={data.settings[key]} onChange={e => setData('settings', { ...data.settings, [key]: e.target.value })} className="w-full rounded border-gray-300" /> : <input type={key.endsWith('_url') ? 'url' : 'text'} value={data.settings[key]} onChange={e => setData('settings', { ...data.settings, [key]: e.target.value })} className="w-full rounded border-gray-300" />}{errors[`settings.${key}`] && <p className="mt-1 text-sm text-red-600">{errors[`settings.${key}`]}</p>}</label> })}</div></section>)}<button disabled={processing} className="rounded bg-slate-900 px-6 py-3 font-semibold text-white disabled:opacity-50">{processing ? 'Saving...' : 'Save settings'}</button></form></AuthenticatedLayout>
}