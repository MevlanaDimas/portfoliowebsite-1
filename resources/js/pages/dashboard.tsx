import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { index as about } from '@/routes/about';
import { index as project } from '@/routes/project';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Box, UserRoundPen } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex justify-center items-center h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex gap-20 justify-center items-center lg:grid-cols-2">
                    <Link className='bg-white/10 gap-2 px-3 py-5 flex justify-center items-center rounded-xl border border-sidebar-border/70 dark:border-sidebar-border cursor-pointer hover:bg-white/20' as='button' href={about().url}>
                        <UserRoundPen />
                        Abouts
                    </Link>
                    <Link className='bg-white/10 gap-2 px-3 py-5 flex justify-center items-center rounded-xl border border-sidebar-border/70 dark:border-sidebar-border cursor-pointer hover:bg-white/20' as='button' href={project().url}>
                        <Box />
                        Projects
                    </Link>
                </div>
            </div>
        </AppLayout>
    );
}
