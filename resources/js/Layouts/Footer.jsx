import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link, usePage } from '@inertiajs/react'

export default function Footer() {
    const { site = {} } = usePage().props

    return (
        <footer className="bg-gray-900 text-gray-300 mt-16">
            <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Company About */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-3">
                        {site.site_name || 'MyCompany'}
                    </h3>
                    <p className="text-sm leading-relaxed">
                        {site.footer_about || site.tagline || 'We build fast, secure and scalable digital products.'}
                    </p>
                </div>

                {/* Legal */}
                <div>
                    <h4 className="text-white font-semibold mb-3">Legal</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
                        <li><Link href="/terms-condition" className="hover:text-white">Terms & Conditions</Link></li>
                        <li><Link href="/refund-policy" className="hover:text-white">Refund Policy</Link></li>
                    </ul>
                </div>

                {/* Social Media Icons */}
                <div>
                    <h4 className="text-white font-semibold mb-3">Follow Us</h4>
                    <div className="flex gap-4 text-xl">
                        <a href={site.facebook_url || 'https://facebook.com'} target="_blank" rel="noreferrer" className="hover:text-blue-500">
                            <FaFacebookF />
                        </a>
                        <a href={site.instagram_url || 'https://instagram.com'} target="_blank" rel="noreferrer" className="hover:text-pink-500">
                            <FaInstagram />
                        </a>
                        <a href={site.twitter_url || 'https://twitter.com'} target="_blank" rel="noreferrer" className="hover:text-sky-400">
                            <FaTwitter />
                        </a>
                    </div>
                </div>

                {/* Map */}
                <div>
                    <h4 className="text-white font-semibold mb-3">Our Location</h4>
                    <iframe
                        title="Google Map"
                        src={site.map_url || 'https://www.google.com/maps?q=Ahmedabad&output=embed'}
                        className="w-full h-32 rounded"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-700 text-center py-4 text-sm">
                {site.footer_text || `© ${new Date().getFullYear()} ${site.site_name || 'MyCompany'}. All rights reserved.`}
            </div>
        </footer>
    )
}
