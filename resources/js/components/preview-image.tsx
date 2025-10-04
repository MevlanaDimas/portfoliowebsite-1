import Button  from '@/components/ui/button';
import { X } from 'lucide-react';

interface PreviewImageProps {
  url: string;
  onRemove: () => void;
}

export default function PreviewImage({ url, onRemove }: PreviewImageProps) {
  return (
    <div className="relative flex flex-col items-center rounded-sm border p-2 shadow-md">
      <Button
        type="button"
        className="absolute top-1 right-1 bg-red-600 p-1 hover:bg-red-500 rounded-md border-white cursor-pointer"
        onClick={onRemove}
      >
        <X size={20} className="text-white" />
      </Button>
      <img src={url} alt="preview" className="rounded-sm w-40 object-cover" />
    </div>
  );
}
