import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
} from 'react-icons/fa'

import {
    Link,
    useForm,
    usePage,
} from '@inertiajs/react'

export default function Footer() {
    const { site = {} } = usePage().props

    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
    } = useForm({
        email: '',
    })

    const submitNewsletter = (event) => {
        event.preventDefault()

        post('/newsletter/subscribe', {
            preserveScroll: true,
            onSuccess: () => {
                reset()
            },
        })
    }

    return (
        <footer className="mt-16 border-t border-gray-200 bg-white text-gray-700 transition-colors duration-200 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">

            <div className="container mx-auto grid grid-cols-1 gap-8 px-6 py-10 md:grid-cols-5">

                {/* Company */}
                <div>
                    <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                        {site.site_name || 'MyCompany'}
                    </h3>

                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                        {site.footer_about ||
                            site.tagline ||
                            'We build fast, secure and scalable digital products.'}
                    </p>
                </div>

                {/* Legal */}
                <div>
                    <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">
                        Legal
                    </h4>

                    <ul className="space-y-2 text-sm">

                        <li>
                            <Link
                                href="/privacy-policy"
                                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                                Privacy Policy
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/terms-condition"
                                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                                Terms & Conditions
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/refund-policy"
                                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                                Refund Policy
                            </Link>
                        </li>

                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">
                        Follow Us
                    </h4>

                    <div className="flex gap-4 text-xl">

                        <a
                            href={
                                site.facebook_url ||
                                'https://facebook.com'
                            }
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-600 hover:text-blue-500 dark:text-gray-400"
                            aria-label="Facebook"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href={
                                site.instagram_url ||
                                'https://instagram.com'
                            }
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-600 hover:text-pink-500 dark:text-gray-400"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href={
                                site.twitter_url ||
                                'https://twitter.com'
                            }
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-600 hover:text-sky-500 dark:text-gray-400"
                            aria-label="Twitter"
                        >
                            <FaTwitter />
                        </a>

                    </div>
                </div>

                {/* Newsletter */}
                <div className="md:col-span-2">

                    <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">
                        Newsletter
                    </h4>

                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                        Subscribe for the latest updates.
                    </p>

                    <form
                        onSubmit={submitNewsletter}
                        className="flex"
                    >
                        <input
                            type="email"
                            value={data.email}
                            onChange={(e) =>
                                setData(
                                    'email',
                                    e.target.value
                                )
                            }
                            placeholder="Your email address"
                            className="min-w-0 flex-1 rounded-l-lg border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                        />

                        <button
                            type="submit"
                            disabled={processing}
                            className="rounded-r-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50 dark:bg-white dark:text-gray-900"
                        >
                            {processing
                                ? '...'
                                : 'Subscribe'}
                        </button>
                    </form>

                    {errors.email && (
                        <p className="mt-2 text-sm text-red-600">
                            {errors.email}
                        </p>
                    )}

                </div>

            </div>

            {/* Map */}
            <div className="container mx-auto px-6 pb-8">

                <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">
                    Our Location
                </h4>

                <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800">

                    <iframe
                        title="Google Map"
                        src={
                            site.map_url ||
                            'https://www.google.com/maps?q=Ahmedabad&output=embed'
                        }
                        className="h-32 w-full"
                        loading="lazy"
                    />

                </div>

            </div>

            {/* Copyright */}
            <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">

                {site.footer_text ||
                    `© ${new Date().getFullYear()} ${
                        site.site_name || 'MyCompany'
                    }. All rights reserved.`}

            </div>

        </footer>
    )
}