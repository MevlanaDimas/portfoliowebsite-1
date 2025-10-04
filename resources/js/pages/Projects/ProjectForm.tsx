import AppLayout from '@/layouts/app-layout';
import { index as project, store as storeProject, update } from '@/routes/project';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { projectSchema } from '@/schemas/projectSchema';
import SchemaForm from '@/components/schema-form';
import FormHeader from '@/components/form-header';

export default function ProjectForm({ ...props }) {
  const isEdit = props.isEdit || false;
  const breadcrumbs: BreadcrumbItem[] = [
    { title: `${isEdit ? 'Edit' : 'Create a new'} Project`, href: project().url },
  ];
  const items = props.project;

  const { data, setData, post, transform, processing, errors, progress, reset } = useForm<{
    title: string;
    description: string;
    link: string;
    github_link: string;
    image: File | null;
  }>({
    title: items?.title || '',
    description: items?.description || '',
    link: items?.link || '',
    github_link: items?.github_link || '',
    image: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEdit) {
      transform((data) => ({ ...data, _method: 'patch' }));
      post(update(items.id).url, {
        onSuccess: () => reset()
      });
    } else {
      post(storeProject().url, { onSuccess: () => reset() });
    }
  };

    const fields = projectSchema.map((field) => ({
    ...field,
    currentFile: field.isFile && props.project?.[field.currentFileKey]
        ? { url: props.project[field.currentFileKey], name: props.project[field.currentFileNameKey] }
        : undefined,
    }));

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
        <Head title={isEdit ? 'Edit Project' : 'Create a new Project'} />

        <div className="flex flex-col w-full p-4">
            <FormHeader breadcrumbs={breadcrumbs} backUrl={project().url} />

            <SchemaForm
            fields={fields}
            data={data}
            setData={setData}
            errors={errors}
            progress={progress}
            isEdit={isEdit}
            processing={processing}
            onSubmit={handleSubmit}
            createLabel="Project"
            updateLabel="Project"
            />
        </div>
    </AppLayout>
  );
}
