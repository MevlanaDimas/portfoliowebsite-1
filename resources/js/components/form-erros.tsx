import { Alert, AlertTitle } from '@/components/ui/alert';
import { TriangleAlert } from 'lucide-react';

export default function FormErrors({ errors }: { errors: Record<string, any> }) {
  const hasErrors = Object.values(errors).some(Boolean);
  if (!hasErrors) return null;

  return (
    <div className='flex flex-col text-red-600 border-none justify-center items-center'>
      <TriangleAlert />
      <Alert variant="destructive" className="flex flex-col justify-center items-center text-red-600 border-none">
        <AlertTitle className="font-bold">Errors!</AlertTitle>
      </Alert>
    </div>
  );
}
