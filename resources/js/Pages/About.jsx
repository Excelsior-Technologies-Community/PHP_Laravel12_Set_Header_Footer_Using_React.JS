import AppLayout from '@/Layouts/AppLayout'

export default function About() {
    return (
        <AppLayout>
            {/* Page Header */}
            <section className="bg-gray-50 px-6 py-16 text-center transition-colors duration-200 dark:bg-gray-950">
                <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
                    About Us
                </h1>

                <p className="mx-auto max-w-2xl leading-relaxed text-gray-600 dark:text-gray-300">
                    We are a passionate team dedicated to building modern,
                    reliable, and scalable web applications for businesses
                    worldwide.
                </p>
            </section>

            {/* About Content */}
            <section className="mx-auto max-w-4xl px-6 py-12">
                <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                    Who We Are
                </h2>

                <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">
                    MyCompany is a technology-driven company focused on
                    delivering high-quality digital solutions. We specialize
                    in Laravel and React to create fast, secure, and scalable
                    web applications.
                </p>

                <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                    Our mission is to help startups and enterprises transform
                    their ideas into powerful digital products that make a
                    real impact.
                </p>
            </section>

            {/* Values */}
            <section className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-8 px-6 pb-16 text-center md:grid-cols-3">

                {/* Innovation */}
                <div
                    className="
                        rounded-lg
                        border
                        border-gray-200
                        bg-white
                        p-6
                        shadow-sm
                        transition
                        duration-200
                        hover:-translate-y-1
                        hover:shadow-md
                        dark:border-gray-700
                        dark:bg-gray-900
                        dark:hover:border-gray-600
                    "
                >
                    <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                        💡 Innovation
                    </h3>

                    <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                        We use modern technologies to build future-ready
                        solutions.
                    </p>
                </div>

                {/* Trust */}
                <div
                    className="
                        rounded-lg
                        border
                        border-gray-200
                        bg-white
                        p-6
                        shadow-sm
                        transition
                        duration-200
                        hover:-translate-y-1
                        hover:shadow-md
                        dark:border-gray-700
                        dark:bg-gray-900
                        dark:hover:border-gray-600
                    "
                >
                    <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                        🤝 Trust
                    </h3>

                    <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                        Transparency and honesty are at the core of everything
                        we do.
                    </p>
                </div>

                {/* Quality */}
                <div
                    className="
                        rounded-lg
                        border
                        border-gray-200
                        bg-white
                        p-6
                        shadow-sm
                        transition
                        duration-200
                        hover:-translate-y-1
                        hover:shadow-md
                        dark:border-gray-700
                        dark:bg-gray-900
                        dark:hover:border-gray-600
                    "
                >
                    <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                        🎯 Quality
                    </h3>

                    <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                        We deliver reliable, maintainable, and high-quality
                        products.
                    </p>
                </div>

            </section>
        </AppLayout>
    )
}