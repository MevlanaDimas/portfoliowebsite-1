import { Check, Pencil, Trash2, UserRoundCheck, X } from 'lucide-react';
import { activating, destroy as deleteAbout, edit as editAbout } from '@/routes/about'
import { destroy as deleteProject, edit as editProject } from '@/routes/project';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import Button from './ui/button';
import { Link, router } from '@inertiajs/react';
import { DialogBox } from './dialog-box'; // Assuming DialogBox is in the same directory or imported correctly
import { getSafeUrl } from '@/lib/utils';
import { useState } from 'react';


interface AboutProps {
    id: number;
    photo_url: string;
    photo_name: string
    photo_hash_name: string;
    bio: string;
    activate: boolean;
    updated_at: string;
}

interface ProjectProps {
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

interface TableProps {
    abouts: AboutProps[];
    projects: ProjectProps[];
    isAbout: boolean;
}


export const CustomTable = ({abouts, projects, isAbout} : TableProps) => {

    const [itemToDelete, setItemToDelete] = useState<{ type: 'about' | 'project', id: number } | null>(null);
    const [aboutActivate, setAboutActivate] = useState<{id: number} | null>(null);

    const truncateUrl = (url: string | null | undefined, maxLength: number = 25): string => {
        if (!url) return '';
        if (url.length <= maxLength) {
            return url;
        }
        return `${url.substring(0, maxLength)}...`;
    };

    const handleConfirmDelete = () => {
        if (!itemToDelete) return;

        const route = itemToDelete.type === 'about' 
            ? deleteAbout(itemToDelete.id).url 
            : deleteProject(itemToDelete.id).url;

        router.delete(route, {
            preserveScroll: true
        });
        setItemToDelete(null);
    };

    const handleConfirmActivate = () => {
        if (!aboutActivate) return;

        router.patch(activating(aboutActivate.id).url, {
            preserveScroll: true
        });
        setAboutActivate(null);
    }

    return (
        <>
            <Table className='p-3 justify-center w-full'>
            <TableHeader className='font-bold text-[15px]'>
                {isAbout ? (
                    <TableRow>
                        <TableHead className='text-center'>ID Key</TableHead>
                        <TableHead className='text-center w-16'>Photo</TableHead>
                        <TableHead className='text-center w-20'>Photo URL</TableHead>
                        <TableHead className='text-center'>Photo Name</TableHead>
                        <TableHead className='text-center'>Photo Hashed Name</TableHead>
                        <TableHead className='text-center'>Bio</TableHead>
                        <TableHead className='text-center'>Activated</TableHead>
                        <TableHead className='text-center'>Updated At</TableHead>
                        <TableHead className='text-center'>Action</TableHead>
                    </TableRow>
                ) : !isAbout ? (
                    <TableRow>
                        <TableHead className='text-center'>ID Key</TableHead>
                        <TableHead className='text-center'>Title</TableHead>
                        <TableHead className='text-center'>Photo</TableHead>
                        <TableHead className='text-center'>Photo URL</TableHead>
                        <TableHead className='text-center'>Photo Name</TableHead>
                        <TableHead className='text-center'>Photo Hashed Name</TableHead>
                        <TableHead className='text-center'>Description</TableHead>
                        <TableHead className='text-center'>Link</TableHead>
                        <TableHead className='text-center'>Github</TableHead>
                        <TableHead className='text-center'>Updated At</TableHead>
                        <TableHead className='text-center'>Action</TableHead>
                    </TableRow>
                ) : (
                    <span className='text-center py-4 text-md font-bold text-white'>
                        No data available. Unable to display table.
                    </span>
                )}
            </TableHeader>
            <TableBody>
                {isAbout ? (
                    abouts.length > 0 ? (
                    abouts.map((about, index) => (
                        <TableRow key={index}>
                            <TableCell className='text-center'>{about.id}</TableCell>
                            <TableCell>
                                <div className='flex justify-center mx-auto my-auto w-70'>
                                    <img src={getSafeUrl(about.photo_url)} alt={about.photo_name} className='w-65 object-cover rounded-2xl'/>
                                </div>
                            </TableCell>
                            <TableCell className='text-center'>
                                <a href={getSafeUrl(about.photo_url)} target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline break-words'>
                                    {truncateUrl(about.photo_url)}
                                </a>
                            </TableCell>
                            <TableCell className='text-center'>{about.photo_name}</TableCell>
                            <TableCell className='text-center'>{about.photo_hash_name}</TableCell>
                            <TableCell className='text-start'>
                                <p className='w-full break-words'>
                                    {about.bio}
                                </p>
                            </TableCell>
                            <TableCell>
                                <div className='flex justify-center items-center mx-auto my-auto'>
                                    {about.activate == true ? (
                                        <Check className='text-green-600'/>
                                    ) : (
                                        <X className='text-red-600'/>
                                    )}
                                </div>
                            </TableCell>
                            <TableCell className='text-center'>{about.updated_at}</TableCell>
                            <TableCell>
                                <div className='flex flex-row gap-3 justify-center mx-auto my-auto'>
                                    <Button 
                                        className='cursor-pointer p-2 rounded-lg bg-green-500 text-white hover:bg-green-500/65'
                                        onClick={() => setAboutActivate({ id: about.id })}
                                    >
                                        <UserRoundCheck size={20}/>
                                    </Button>
                                    <Link 
                                        as='button' 
                                        className='cursor-pointer p-2 rounded-lg bg-yellow-500 text-white hover:bg-yellow-500/65 disabled:opacity-50'
                                        href={editAbout(about.id).url}
                                    >
                                        <Pencil size={20} />
                                    </Link>
                                    <Button 
                                        className='cursor-pointer p-2 rounded-lg bg-red-500 text-white hover:bg-red-500/65'
                                        onClick={() => setItemToDelete({ type: 'about', id: about.id })}
                                    >
                                        <Trash2 size={20} />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))
                ) : (
                    <TableRow>
                        <TableCell colSpan={9} className='text-center py-4 text-md font-bold text-white'>
                            No Abouts Found!
                        </TableCell>
                    </TableRow>
                )) : !isAbout ? (
                    projects.length > 0 ? (
                        projects.map((project, index) => (
                            <TableRow key={index}>
                                <TableCell className='text-center'>{project.id}</TableCell>
                                <TableCell className='text-center'>{project.title}</TableCell>
                                <TableCell>
                                    <div className='flex justify-center mx-auto my-auto w-70'>
                                        <img src={getSafeUrl(project.image_url)} alt={project.image_name} className='w-65 object-cover rounded-sm'/>
                                    </div>
                                </TableCell>
                                <TableCell className='text-center break-all'>
                                    <a href={getSafeUrl(project.image_url)} target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline break-words'>
                                        {truncateUrl(project.image_url)}
                                    </a>
                                </TableCell>
                                <TableCell className='text-center'>{project.image_name}</TableCell>
                                <TableCell className='text-center'>{project.image_hash_name}</TableCell>
                                <TableCell className='text-start'>
                                    <p className='w-full break-words'>
                                        {project.description}
                                    </p>
                                </TableCell>
                                <TableCell className='break-all'>
                                    <a href={getSafeUrl(project.link)} target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>
                                        {project.link}
                                    </a>
                                </TableCell>
                                <TableCell className='break-all'>
                                    <a href={getSafeUrl(project.github_link)} target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>
                                        {project.github_link}
                                    </a>
                                </TableCell>
                                <TableCell className='text-center'>{project.updated_at}</TableCell>
                                <TableCell>
                                    <div className='flex flex-row gap-3 justify-center mx-auto my-auto'>
                                        <Link 
                                            as='button' 
                                            className='cursor-pointer p-2 rounded-lg bg-yellow-500 text-white hover:bg-yellow-500/65 disabled:opacity-50'
                                            href={editProject(project.id).url}
                                        >
                                            <Pencil size={20} />
                                        </Link>
                                        <Button 
                                            className='cursor-pointer p-2 rounded-lg bg-red-500 text-white hover:bg-red-500/65'
                                            onClick={() => setItemToDelete({ type: 'project', id: project.id })}
                                        >
                                            <Trash2 size={20} />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={11} className='text-center py-4 text-md font-bold text-white'>
                                No Projects Found!
                            </TableCell>
                        </TableRow>
                    )
                ) : (
                    <span className='text-center py-4 text-md font-bold text-white'>
                        No data available. Unable to display table.
                    </span>
                )}
            </TableBody>
        </Table>
            <DialogBox
                open={!!itemToDelete}
                onClose={() => setItemToDelete(null)}
                route={handleConfirmDelete}
            >
                <Trash2 className="size-20 mx-auto text-red-600"/>
                <h2 className='text-[2rem] text-red-600 text-center font-extrabold mt-2'>Delete</h2>
                <h4 className='text-center font-extralight'>Are you sure you want to delete this item?</h4>
            </DialogBox>
            <DialogBox
                open={!!aboutActivate}
                onClose={() => setAboutActivate(null)}
                route={handleConfirmActivate}
            >
                <UserRoundCheck className="size-20 mx-auto text-green-600"/>
                <h2 className='text-[2rem] text-green-600 text-center font-extrabold mt-2'>Activate</h2>
                <h4 className='text-center font-extralight'>Are you sure you want to display this item on the home screen?</h4>
            </DialogBox>
        </>
    )
}