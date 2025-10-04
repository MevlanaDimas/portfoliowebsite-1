import { CustomTable } from '@/components/custom-table';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Button from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Pagination } from '@/components/ui/pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { index as project } from '@/routes/project';
import { create } from '@/routes/project';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
import { CircleCheckBig, CirclePlus, Eraser, TriangleAlert } from 'lucide-react';
import { useEffect, useState } from 'react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Projects',
        href: project().url,
    },
];

interface LinkProps {
    active: boolean;
    label: string;
    url: string | null;
}

interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
    github_link: string;
    image_url: string;
    image_name: string;
    image_hash_name: string;
    updated_at: string;
}

interface ProjectPagination {
    data: Project[];
    links: LinkProps[];
    from: number;
    to: number;
    total: number;
}

interface FilterProps {
    search: string;
    perPage: string;
}

interface ProjectProps {
    projects: ProjectPagination;
    filters: FilterProps;
    totalCount: number;
    filteredCount: number;
}

export default function Project({projects, filters, totalCount, filteredCount} : ProjectProps) {

    const { flash } = usePage<{ flash?: { success?: string; error?: string} }>().props;
    const flashMessage = flash?.success || flash?.error;
    const [showAlert, setShowAlert] = useState(flash ? true : false);

    useEffect(() => {
        if (flashMessage) {
            const timer = setTimeout(() => setShowAlert(false), 3000);

            return () => clearTimeout(timer);
        }
    }, [flashMessage]);

    const {data, setData} = useForm<{
        search: string;
        perPage: string;
    }>(
        {
            search: filters.search || '',
            perPage: filters.perPage || '10'
        }
    );

    const handleSearch = (edit: React.ChangeEvent<HTMLInputElement>) => {
        const value = edit.target.value;
        setData('search', value);

        const queryString = {
            ...(value && { search: value }),
            ...(data.perPage && {perPage: data.perPage})
        };

        router.get(project({ query: queryString}).url, {
            preserveState: true,
            preserveScrool: true
        });
    }

    const handleResetSearch = () => {
        setData('search', '');
        setData('perPage', '10');

        router.get(project({}).url, {
            perserveState: true,
            perserveScroll: true
        });
    }

    const handlePerPageChange = (value: string) => {
        setData('perPage', value);

        const queryString = {
            ...(data.search && {search: data.search}),
            ...(value && { perPage: value })
        };

        router.get(project({ query: queryString }).url, {
            perserveState: true,
            perserveScroll: true
        });
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="About" />
            <div className='flex flex-col w-full'>
                <div className='flex justify-end items-center'>
                    {showAlert && flashMessage && (
                        <Alert variant={'default'} className={`${flash?.success ? 'bg-green-500/30 border-none' : (flash?.error ? 'bg-red-500/30 border-none' : '')} absolute justify-end items-center ml-auto max-w-75 text-white`}>
                            {flash.success ? <CircleCheckBig /> : <TriangleAlert />}
                            <AlertTitle className='font-bold'>
                                {flash.success ? 'Success' : 'Error'}
                            </AlertTitle>
                            <AlertDescription className='text-white'>
                                {flashMessage}
                            </AlertDescription>
                        </Alert>
                    )}
                </div>
                <div className='flex justify-between items-center mt-6 mb-4 mx-5'>
                    <div className='flex h-10 py-2 items-center border rounded-2xl'>
                        <Input
                            type='text' 
                            name='search'
                            placeholder='Search Project...'
                            onChange={handleSearch}
                            value={data.search}
                            className='border-none'
                        />
                        {data.search.length > 0 ? (
                            <Button
                                className='mt-0.5 bg-transparent hover:bg-transparent cursor-pointer'
                                onClick={handleResetSearch}
                            >
                                <div className='flex flex-col justify-center items-center'>
                                <Eraser size={20} className='text-white'/>
                                <span className='m-0 p-0 text-center text-[10px] text-stone-400'>Reset</span>
                                </div>
                            </Button>
                        ) : ("")}
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='text-sm'>Row per page</span>
                        <Select
                            onValueChange={handlePerPageChange}
                            defaultValue={data.perPage}
                        >
                            <SelectTrigger className='w-[90px] cursor-pointer'>
                                <SelectValue placeholder="Row"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem className='cursor-pointer' value='10'>10</SelectItem>
                                <SelectItem className='cursor-pointer' value='25'>25</SelectItem>
                                <SelectItem className='cursor-pointer' value='50'>50</SelectItem>
                                <SelectItem className='cursor-pointer' value='100'>100</SelectItem>
                                <SelectItem className='cursor-pointer' value='-1'>All</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Link href={create().url} className='flex justify-center items-center'>
                        <Button className='cursor-pointer'>
                            <CirclePlus />
                            Create Project
                        </Button>
                    </Link>
                </div>
                <div className="w-full flex px-5">
                    <CustomTable abouts={[]} projects={projects.data} isAbout={false} />
                </div>
            </div>
            <Pagination
                data={projects}
                filters={filters}
                totalCount={totalCount}
                filteredCount={filteredCount}
            />
        </AppLayout>
    );
}
