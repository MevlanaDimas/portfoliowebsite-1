import { Link } from "@inertiajs/react"
import clsx from "clsx";

interface LinkProps {
    active: boolean;
    label: string;
    url: string | null;
}

interface PaginationData {
    links: LinkProps[];
    from: number;
    to: number;
    total: number;
}

interface FilterProps {
    search: string;
    perPage: string;
}

interface PaginationProps {
    data: PaginationData;
    filters: FilterProps,
    totalCount: number;
    filteredCount: number;
}

export const Pagination = ({data, filters, totalCount, filteredCount} : PaginationProps) => {
    const pageInfo = {
        wordSpacing: "7px"
    }

    return (
        <div className="my-5 mx-auto flex flex-col items-center justify-center">
            <div className="my-3 flex items-center justify-center gap-2">
                {data.links.length > 3 && data.links.map((link, index) => {
                    let label = link.label;
                    if (label === 'pagination.previous') {
                        label = '&laquo;';
                    } else if (label === 'pagination.next') {
                        label = '&raquo;';
                    }

                    if (link.url === null) {
                        return (
                            <div key={`${index}-disabled`} className="px-3 py-2 text-gray-400" dangerouslySetInnerHTML={{ __html: label }}></div>
                        );
                    }

                    return (
                        <Link
                            key={index}
                            className={clsx('px-3 py-2 hover:bg-[#171717] hover:border rounded-md', { 'bg-dark border-none rounded-3xl': link.active })}
                            href={link.url}
                            dangerouslySetInnerHTML={{ __html: label }}
                        />
                    );
                })}
            </div>

            {filters.search ? (
                <p style={pageInfo} className="text-[12px] italic my-4 py-1 px-2 rounded-md bg-white/25 text-center">
                    Showing <span className="font-bold not-italic">{filteredCount}</span> filtered result{filteredCount !== 1 && 's'} <span className="font-bold not-italic">{}</span> out of <span className="font-bold not-italic">{totalCount}</span> entr{totalCount !== 1 ? 'ies' : 'y'}
                </p>
            ) : (
                <p style={pageInfo} className="text-[12px] italic my-4 py-1 px-3 rounded-md bg-white/25 text-center">
                    Showing <span className="font-bold not-italic">{data.from ? data.from : '0'}</span> to <span className="font-bold not-italic">{data.to ? data.to : '0'}</span> from Total <span className="font-bold not-italic">{data.total}</span> entr{totalCount !== 1 ? 'ies' : 'y'}
                </p>
            )}
        </div>
    )
}