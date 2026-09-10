import { Link, usePage } from '@inertiajs/react'

export default function Header() {
    const { site = {} } = usePage().props

    return (
        <header className="bg-white shadow">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                <Link href="/" className="flex items-center">
                    {site.logo_url && <img src={site.logo_url} alt={site.site_name || 'Logo'} className="h-10" />}
                    <span className="ml-3 text-xl font-bold text-gray-900">{site.site_name || 'MyCompany'}</span>
                </Link>
                <nav className="space-x-6 text-gray-600">
                    <Link href="/" className="hover:text-blue-600">Home</Link>
                    <Link href="/about" className="hover:text-blue-600">About</Link>
                    <Link href="/services" className="hover:text-blue-600">Services</Link>
                    <Link href="/faq" className="hover:text-blue-600">FAQ</Link>
                    <Link href="/contact" className="hover:text-blue-600">Contact</Link>
                </nav>
            </div>
        </header>
    )
}
