import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Ensures a URL is safe to use in an `href` or `src` attribute.
 * - Returns '#' for null or undefined URLs.
 * - Corrects URLs that might be missing a colon in the protocol (e.g., 'https//').
 * - Prepends 'https://' to URLs that appear to be external but lack a protocol.
 * - Leaves relative paths and fully-qualified URLs as they are.
 * @param url The URL string to process.
 * @returns A safe URL string.
 */
export const getSafeUrl = (url: string | null | undefined): string => {
    if (!url) {
        return '#';
    }

    // Fix for malformed https urls
    if (url.startsWith('https//')) {
        return `https://${url.substring(6)}`;
    }

    // If it's already a valid, absolute URL or a relative path, return it.
    // This includes protocol-relative URLs (e.g., //example.com) because they start with '/'.
    if (
        url.startsWith('http://') ||
        url.startsWith('https://') ||
        url.startsWith('/') ||
        url.startsWith('#') ||
        url.startsWith('mailto:') ||
        url.startsWith('tel:') ||
        url.startsWith('data:') || // Handle data URIs (e.g., for image previews)
        url.startsWith('blob:')    // Handle Blob URLs
    ) {
        return url;
    }

    // If the URL contains a colon but wasn't caught by the above (e.g., 'ftp://', 'custom-scheme://'),
    // assume it's a valid URL with a different scheme and return as is.
    if (url.includes(':')) {
        return url;
    }

    // If no scheme is present and it's not a relative path, assume it's an external URL missing https://
    return `https://${url}`;
};
