import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, X, XCircle } from 'lucide-react';

export const NotificationPopup = ({ notification, setNotification }: { notification: { type: 'success' | 'error'; message: string } | null; setNotification: (notification: null) => void }) => (
    <AnimatePresence>
        {notification && (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] flex items-center gap-5 rounded-lg p-6 shadow-lg ${
                    notification.type === 'success' ? 'bg-green-500/90' : 'bg-red-500/90'
                } text-white`}
            >
                {notification.type === 'success' ? <CheckCircle className="size-8" /> : <XCircle className="size-8" />}
                <p className="font-medium text-lg">{notification.message}</p>
                <button onClick={() => setNotification(null)} className="absolute top-2 right-2 rounded-full p-1 transition-colors hover:bg-black/10 cursor-pointer">
                    <X className="size-5" />
                </button>
            </motion.div>
        )}
    </AnimatePresence>
);
