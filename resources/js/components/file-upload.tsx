import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import InputError from '@/components/input-error';
import { Upload } from 'lucide-react';
import PreviewImage from '@/components/preview-image';
import imageCompression from 'browser-image-compression';

interface FileUploadProps {
  isEdit: boolean;
  currentFile?: { url: string; name: string };
  field: string;
  dataFiles: File[];
  setData: (field: string, value: any) => void;
  progress?: { percentage: number };
  error?: string;
  label: string;
}

export default function FileUpload({ isEdit, currentFile, field, dataFiles, setData, progress, error, label }: FileUploadProps) {
  const [previewUrl, setPreviewUrl] = useState<string[]>([]);

  const options = {
    maxSizeMb: 5,
    maxWidthOrHeight: 1920,
    useWebWorker: true
  }

  const compressAndSetFile = async (files: File[]) =>{
    const compressedFile: File[] = [];
    const previews: (string | null)[] = [];

    for (const [index, file] of files.entries()){
      let finalFile = file;

      if (file.type.startsWith('image/')){
        finalFile = await imageCompression(file, options);
        previews[index] = URL.createObjectURL(finalFile);
      }
      else {
        previews[index] = null;
      }

      compressedFile.push(finalFile);
    }

    setData(field, compressedFile);
    setPreviewUrl(previews);
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const files = Array.from(e.target.files).slice(0, 1);
      await compressAndSetFile(files);
    }
  };

  const handleFileDrop = async (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    const dropped = Array.from(e.dataTransfer.files).slice(0, 1);
    if (dropped.length) {
      await compressAndSetFile(dropped);
    }
  };

  const handleRemove = (index: number) => {
    const updatedFiles = [...dataFiles];
    updatedFiles.splice(index, 1);
    setData(field, updatedFiles);
    setPreviewUrl(previewUrl.filter((_, i) => i !== index));
  };

  return (
    <div className="gap-1.5 flex flex-col justify-center items-center">
      <div className="w-full">
        <span className="text-sm font-medium">{label}</span>
        <Label
          htmlFor={`${field}_file`}
          className="flex flex-col w-full h-60 border rounded-sm justify-center items-center cursor-pointer"
          onDrop={handleFileDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          {!isEdit ? (
            <>
              <Input id={`${field}_file`} type="file" onChange={handleFileUpload} accept="image/*" className="hidden" />
              <Upload size={50} />
              <p className="text-sm my-2 font-extralight">
                <span className="font-extrabold">Click to Upload</span> or <span className="font-extrabold">Drag and Drop</span>
              </p>
            </>
          ) : (
            currentFile && (
              <>
                <Input id={`${field}_file`} type='file' accept='image/*' onChange={handleFileUpload}/>
                <img src={currentFile.url} alt={currentFile.name} className="w-40 object-cover" />
              </>
            )
          )}
        </Label>

        {previewUrl.length > 0 && (
          <div className="mt-6 flex gap-2 justify-center items-center">
            {previewUrl.map((url, i) => (
              <PreviewImage key={i} url={url} index={i} onRemove={handleRemove} />
            ))}
          </div>
        )}
      </div>
      {progress && <Progress className="h-[5px]" value={progress.percentage} />}
      <InputError className="text-red-600" message={error} />
    </div>
  );
}
