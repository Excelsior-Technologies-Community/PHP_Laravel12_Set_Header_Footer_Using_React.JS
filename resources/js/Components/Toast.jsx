import { useEffect, useState } from 'react'

export default function Toast({ message }) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!message) {
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 4000)

        return () => clearTimeout(timer)
    }, [message])

    if (!message || !visible) {
        return null
    }

    return (
        <div className="fixed right-5 top-5 z-[9999] w-full max-w-md">
            <div className="rounded-lg border border-green-200 bg-green-50 p-4 shadow-lg dark:border-green-800 dark:bg-green-900">
                <div className="flex items-start gap-3">

                    <div className="flex-1">
                        <p className="text-sm font-medium text-green-800 dark:text-green-100">
                            {message}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={() => setVisible(false)}
                        className="text-green-600 hover:text-green-900 dark:text-green-300 dark:hover:text-white"
                    >
                        ✕
                    </button>

                </div>
            </div>
        </div>
    )
}