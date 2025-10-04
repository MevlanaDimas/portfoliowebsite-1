import FormErrors from '@/components/form-erros';
import FormField from '@/components/form-field';
import SubmitButton from '@/components/submit-button';

interface FieldSchema {
  id: string;
  name: string;
  label: string;
  type: 'text' | 'textarea' | 'file';
  isFile?: boolean;
  placeholder?: string;
  currentFile?: { url: string; name: string };
}

interface SchemaFormProps {
  fields: FieldSchema[];
  data: Record<string, any>;
  setData: (key: string, value: any) => void;
  errors: Record<string, any>;
  progress?: { percentage: number };
  isEdit?: boolean;
  processing: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  createLabel: string;
  updateLabel: string;
}

export default function SchemaForm({
  fields,
  data,
  setData,
  errors,
  progress,
  isEdit = false,
  processing,
  onSubmit,
  createLabel,
  updateLabel,
}: SchemaFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <FormErrors errors={errors} />

      {fields.map((field) => (
        <FormField
          key={field.id}
          id={field.id}
          name={field.name}
          label={field.label}
          type={field.type}
          value={!field.isFile ? data[field.name] : undefined}
          file={field.isFile ? data[field.name] : null}
          onChange={(val) => setData(field.name, val)}
          error={errors[field.name]}
          progress={field.isFile ? progress : undefined}
          isEdit={isEdit}
          currentFile={field.currentFile}
          placeholder={field.placeholder}
        />
      ))}

      <SubmitButton
        processing={processing}
        isEdit={isEdit}
        createLabel={createLabel}
        updateLabel={updateLabel}
      />
    </form>
  );
}
