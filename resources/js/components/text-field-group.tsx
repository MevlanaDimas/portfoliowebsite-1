import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import InputError from '@/components/input-error';

interface TextFieldGroupProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  error?: string;
  type?: string;
  multiline?: boolean;
}

export default function TextFieldGroup({
  id,
  name,
  label,
  value,
  onChange,
  placeholder,
  error,
  type = 'text',
  multiline = false,
}: TextFieldGroupProps) {
  return (
    <div className="gap-1.5 flex flex-col">
      <Label htmlFor={id}>{label}</Label>
      {multiline ? (
        <Textarea
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full"
        />
      ) : (
        <Input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full"
        />
      )}
      <InputError className="text-red-600" message={error} />
    </div>
  );
}
