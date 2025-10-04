import { type SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

/**
 * A custom hook to manage flash message notifications from Inertia.
 */
export function useFlashMessages() {
    const { flash } = usePage<SharedData>().props;
    const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    useEffect(() => {
        if (flash?.success) {
            setNotification({ type: 'success', message: flash.success });
        } else if (flash?.error) {
            setNotification({ type: 'error', message: flash.error });
        }

        if (flash?.success || flash?.error) {
            const timer = setTimeout(() => {
                setNotification(null);
            }, 5000); // 5 seconds

            return () => clearTimeout(timer);
        }
    }, [flash]);

    return { notification, setNotification };
}
