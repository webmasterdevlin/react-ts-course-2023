// React Hook Form with Zod

import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { TodoFormSchema } from '../validations/todo';
import Button from './Button';
import type { TodoFormSchemaType } from '../validations/todo';
import type { SubmitHandler } from 'react-hook-form';

type Props = {
  save: (values: any) => Promise<void>;
};

const FormSubmission = ({ save }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { isValid, errors },
    reset,
  } = useForm<TodoFormSchemaType>({
    mode: 'all',
    resolver: zodResolver(TodoFormSchema),
  });

  const onSubmit: SubmitHandler<TodoFormSchemaType> = async data => {
    try {
      await save(data);
      reset();
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={'flex flex-col items-center justify-center'}>
        <div>
          <div className={'mb-5 flex flex-col'}>
            <label htmlFor={'title'}>Title</label>
            <input id={'title'} {...register('title')} data-testid={'todo-input'} />
            <ErrorMessage
              errors={errors}
              name="title"
              render={({ message }: any) => {
                return <p>{message}</p>;
              }}
            />
          </div>
          <Button color="primary" disabled={!isValid} type="submit" data-testid={'save-todo'}>
            + ADD
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FormSubmission;
