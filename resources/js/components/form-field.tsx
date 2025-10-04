import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import InputError from '@/components/input-error';
import { Upload } from 'lucide-react';
import PreviewImage from '@/components/preview-image';
import { getSafeUrl } from '@/lib/utils';

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  value?: string;
  onChange: (val: any) => void;
  placeholder?: string;
  error?: string;
  type?: 'text' | 'textarea' | 'file';
  file?: File ;
  currentFile?: { url: string; name: string };
  progress?: { percentage: number };
  isEdit?: boolean;
}

export default function FormField({
  id,
  name,
  label,
  value,
  onChange,
  placeholder,
  error,
  type = 'text',
  currentFile,
  progress,
  isEdit = false,
}: FormFieldProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const previewFile = (newFile: File | null) => {
    if (newFile) {
      const reader = new FileReader();
      reader.onload = () => setPreviewUrl(reader.result as string);
      reader.readAsDataURL(newFile);
    } else {
      setPreviewUrl(null);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFile = e.target.files?.[0];
    if (newFile) {
      onChange(newFile);
      previewFile(newFile);
    }
  };

  const handleFileDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    const dropped = e.dataTransfer.files?.[0];
    if (dropped) {
      onChange(dropped);
      previewFile(dropped);
    }
  };

  const handleRemove = () => {
    onChange(null);
    setPreviewUrl(null);
  };

  return (
    <div className="gap-1.5 flex flex-col">
      <Label htmlFor={id}>{label}</Label>

      {type === 'text' && (
        <Input
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full"
        />
      )}

      {type === 'textarea' && (
        <Textarea
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full"
        />
      )}

      {type === 'file' && (
        <div className="flex flex-col gap-2 items-center">
          <Label
            htmlFor={`${id}_file`}
            className="flex flex-col w-full h-60 border rounded-sm justify-center items-center cursor-pointer"
            onDrop={handleFileDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            {!isEdit ? (
              <>
                <Input id={`${id}_file`} type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                <Upload size={50} />
                <p className="text-sm my-2 font-extralight">
                  <span className="font-extrabold">Click to Upload</span> or{' '}
                  <span className="font-extrabold">Drag and Drop</span>
                </p>
              </>
            ) : (
              currentFile && (
                <>
                  <Input id={`${id}_file`} type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                  <img src={getSafeUrl(currentFile.url)} alt={currentFile.name} className="w-40 object-cover" />
                </>
              )
            )}
          </Label>

          {previewUrl && (
            <div className="mt-6 flex gap-2 justify-center items-center">
              <PreviewImage url={previewUrl} onRemove={handleRemove} />
            </div>
          )}

          {progress && <Progress className="h-[5px]" value={progress.percentage} />}
        </div>
      )}

      <InputError className="text-red-600" message={error} />
    </div>
  );
}
