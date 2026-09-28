import { Head } from '@inertiajs/react'
import AppLayout from '@/Layouts/AppLayout'

const questions = [
    [
        'How do we start?',
        'Send us a message with your goals and timeline. We will reply with the best next step.',
    ],
    [
        'How long does a project take?',
        'Most projects take between four and twelve weeks, depending on scope.',
    ],
    [
        'Do you support existing applications?',
        'Yes. We can audit, improve, and extend Laravel and React applications.',
    ],
]

export default function FAQ() {
    return (
        <AppLayout>
            <Head title="FAQ" />

            <div
                className="
                    mx-auto
                    max-w-3xl
                    px-6
                    py-12
                "
            >
                {/* Page Heading */}
                <h1
                    className="
                        text-4xl
                        font-bold
                        text-gray-900
                        dark:text-white
                    "
                >
                    Frequently asked questions
                </h1>

                {/* Questions */}
                <div className="mt-8 space-y-3">

                    {questions.map(([question, answer]) => (
                        <details
                            key={question}
                            className="
                                group
                                rounded-lg
                                border
                                border-gray-200
                                bg-white
                                p-5
                                shadow-sm
                                transition
                                duration-200
                                hover:border-gray-300
                                hover:shadow-md
                                dark:border-gray-700
                                dark:bg-gray-900
                                dark:hover:border-gray-600
                            "
                        >
                            {/* Question */}
                            <summary
                                className="
                                    cursor-pointer
                                    list-none
                                    font-semibold
                                    text-gray-900
                                    transition
                                    dark:text-white
                                "
                            >
                                <span className="flex items-center justify-between gap-4">
                                    <span>{question}</span>

                                    <span
                                        className="
                                            text-gray-500
                                            transition-transform
                                            duration-200
                                            group-open:rotate-180
                                            dark:text-gray-400
                                        "
                                    >
                                        ▼
                                    </span>
                                </span>
                            </summary>

                            {/* Answer */}
                            <p
                                className="
                                    mt-3
                                    leading-relaxed
                                    text-gray-600
                                    dark:text-gray-300
                                "
                            >
                                {answer}
                            </p>
                        </details>
                    ))}

                </div>
            </div>
        </AppLayout>
    )
}