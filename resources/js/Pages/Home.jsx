import { Head, Link } from '@inertiajs/react'
import AppLayout from '@/Layouts/AppLayout'

export default function Home({ site = {} }) {
    return (
        <AppLayout>
            <Head title={site.site_name || 'Home'} />

            <section
                className="
                    rounded-2xl
                    border
                    border-gray-200
                    bg-white
                    px-8
                    py-20
                    text-gray-900
                    shadow-sm
                    transition-colors
                    duration-200
                    dark:border-gray-700
                    dark:bg-slate-900
                    dark:text-white
                "
            >
                {/* Tagline */}
                <p
                    className="
                        mb-4
                        text-sm
                        uppercase
                        tracking-[0.3em]
                        text-cyan-600
                        dark:text-cyan-300
                    "
                >
                    {site.tagline || 'Digital products, thoughtfully built'}
                </p>

                {/* Main Heading */}
                <h1
                    className="
                        max-w-3xl
                        text-5xl
                        font-bold
                        text-gray-900
                        dark:text-white
                    "
                >
                    {site.hero_title ||
                        'Build a better digital presence.'}
                </h1>

                {/* Description */}
                <p
                    className="
                        mt-6
                        max-w-2xl
                        text-lg
                        leading-relaxed
                        text-gray-600
                        dark:text-slate-300
                    "
                >
                    {site.hero_text ||
                        'We create reliable web experiences that help ambitious businesses move forward.'}
                </p>

                {/* CTA */}
                <Link
                    href="/contact"
                    className="
                        mt-8
                        inline-block
                        rounded-lg
                        bg-cyan-500
                        px-6
                        py-3
                        font-semibold
                        text-white
                        transition
                        duration-200
                        hover:bg-cyan-600
                        dark:bg-cyan-400
                        dark:text-slate-950
                        dark:hover:bg-cyan-300
                    "
                >
                    Start a conversation
                </Link>
            </section>
        </AppLayout>
    )
}