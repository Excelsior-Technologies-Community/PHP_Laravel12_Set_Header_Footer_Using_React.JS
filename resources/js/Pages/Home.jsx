import { Head, Link } from '@inertiajs/react'
import AppLayout from '@/Layouts/AppLayout'

export default function Home({ site = {} }) {
    return <AppLayout><Head title={site.site_name || 'Home'} /><section className="rounded-2xl bg-slate-900 px-8 py-20 text-white"><p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">{site.tagline || 'Digital products, thoughtfully built'}</p><h1 className="max-w-3xl text-5xl font-bold">{site.hero_title || 'Build a better digital presence.'}</h1><p className="mt-6 max-w-2xl text-lg text-slate-300">{site.hero_text || 'We create reliable web experiences that help ambitious businesses move forward.'}</p><Link href="/contact" className="mt-8 inline-block rounded bg-cyan-400 px-6 py-3 font-semibold text-slate-950">Start a conversation</Link></section></AppLayout>
}
