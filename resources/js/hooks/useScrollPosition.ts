import { useEffect, useState } from 'react';

/**
 * A custom hook to track the window's scroll position.
 */
export function useScrollPosition(threshold = 10) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > threshold);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [threshold]);

    return isScrolled;
}
