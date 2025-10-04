import Button from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';

interface SubmitButtonProps {
  processing: boolean;
  isEdit?: boolean;
  createLabel: string;
  updateLabel: string;
}

export default function SubmitButton({
  processing,
  isEdit = false,
  createLabel,
  updateLabel,
}: SubmitButtonProps) {
  return (
    <Button type="submit" disabled={processing} className="cursor-pointer">
      {processing && <LoaderCircle className="h-4 w-4 animate-spin mr-2" />}
      {processing
        ? isEdit
          ? `Updating ${updateLabel}...`
          : `Creating ${createLabel}...`
        : isEdit
        ? `Update ${updateLabel}`
        : `Create ${createLabel}`}
    </Button>
  );
}
