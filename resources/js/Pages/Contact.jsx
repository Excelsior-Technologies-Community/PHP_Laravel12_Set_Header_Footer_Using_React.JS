import { Head, useForm, usePage } from '@inertiajs/react'
import AppLayout from '@/Layouts/AppLayout'

export default function Contact() {
    const { site = {} } = usePage().props

    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
    } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const submit = (event) => {
        event.preventDefault()

        post('/contact', {
            onSuccess: () => {
                reset()
            },
        })
    }

    return (
        <AppLayout>

            <Head title="Contact" />

            <div className="mx-auto max-w-3xl">

                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                    Let's talk
                </h1>

                <p className="mt-3 text-gray-600 dark:text-gray-300">
                    {site.contact_intro ||
                        'Tell us what you are building and how we can help.'}
                </p>

                <form
                    onSubmit={submit}
                    className="mt-8 space-y-5"
                >

                    {[
                        ['name', 'Name'],
                        ['email', 'Email'],
                        ['subject', 'Subject'],
                    ].map(([key, label]) => (
                        <div key={key}>

                            <label className="mb-1 block font-medium text-gray-700 dark:text-gray-200">
                                {label}
                            </label>

                            <input
                                value={data[key]}
                                onChange={(e) =>
                                    setData(key, e.target.value)
                                }
                                type={
                                    key === 'email'
                                        ? 'email'
                                        : 'text'
                                }
                                className="w-full rounded-lg border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                            />

                            {errors[key] && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors[key]}
                                </p>
                            )}

                        </div>
                    ))}

                    <div>

                        <label className="mb-1 block font-medium text-gray-700 dark:text-gray-200">
                            Message
                        </label>

                        <textarea
                            value={data.message}
                            onChange={(e) =>
                                setData(
                                    'message',
                                    e.target.value
                                )
                            }
                            rows="6"
                            className="w-full rounded-lg border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                        />

                        {errors.message && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.message}
                            </p>
                        )}

                    </div>

                    <button
                        disabled={processing}
                        className="rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700 disabled:opacity-50 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
                    >
                        {processing
                            ? 'Sending...'
                            : 'Send message'}
                    </button>

                </form>

            </div>

        </AppLayout>
    )
}