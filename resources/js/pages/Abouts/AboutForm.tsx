import AppLayout from '@/layouts/app-layout';
import { index as about, store as storeAbout, update } from '@/routes/about';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { aboutSchema } from '@/schemas/aboutSchema';
import SchemaForm from '@/components/schema-form';
import FormHeader from '@/components/form-header';


export default function AboutForm({ ...props }) {
  const isEdit = props.isEdit || false;
  const breadcrumbs: BreadcrumbItem[] = [
    { title: `${isEdit ? 'Edit' : 'Create a new'} About`, href: about().url },
  ];
  const items = props.about;

  const { data, setData, post, transform, processing, errors, progress, reset } = useForm<{
    photo: File | null;
    bio: string;
  }>({ photo: null as File | null, bio: items?.bio || '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEdit) {
      // When updating with a file, Inertia needs to send a POST request with method spoofing.
      // We use `transform` to add the `_method` field to the data for this request.
      transform((data) => ({ ...data, _method: 'patch' }));
      post(update(items.id).url, {
        onSuccess: () => reset(),
        // Reset the transform function on finish to not affect subsequent requests.
        onFinish: () => transform(data => data),
      });
    } else {
      post(storeAbout().url, { onSuccess: () => reset() });
    }
  };

  const fields = aboutSchema.map((field) => ({
    ...field,
    currentFile: field.isFile && props.about?.[field.currentFileKey] ?
      { url: props.about[field.currentFileKey], name: props.about[field.currentFileNameKey] } :
      undefined,
  }));

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
        <Head title={isEdit ? 'Edit About' : 'Create a new About'} />

        <div className="flex flex-col w-full p-4">
            <FormHeader breadcrumbs={breadcrumbs} backUrl={about().url} />

            <SchemaForm
            fields={fields}
            data={data}
            setData={setData}
            errors={errors}
            progress={progress}
            isEdit={isEdit}
            processing={processing}
            onSubmit={handleSubmit}
            createLabel="About"
            updateLabel="About"
            />
        </div>
    </AppLayout>
  );
}
