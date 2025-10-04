import { Link } from '@inertiajs/react';
import Button from '@/components/ui/button';
import { SquareArrowLeft } from 'lucide-react';
import { type BreadcrumbItem } from '@/types';

interface FormHeaderProps {
  breadcrumbs: BreadcrumbItem[];
  backUrl: string;
}

export default function FormHeader({ breadcrumbs, backUrl }: FormHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      {/* Page Title */}
      <h1 className="text-xl font-bold">
        {breadcrumbs[0]?.title}
      </h1>

      {/* Back Button */}
      <Link href={backUrl} className="flex justify-center items-center">
        <Button className="cursor-pointer flex items-center gap-1">
          <SquareArrowLeft />
          Back
        </Button>
      </Link>
    </div>
  );
}
