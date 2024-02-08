import { useForm } from 'react-hook-form';
import { TextInput } from '../components/Input';
import { Button } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import { postPost } from '../API/posts';

export const PostCreate = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const { mutate: create } = useMutation({
    mutationFn: (post) => {
      postPost(post);
    }
  });

  const onSubmit = (data) => {
    const newPost = {
      ...data,
      id: Date.now().toString()
    };
    create(newPost)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 mt-5 max-w-md mx-auto'>
      {/* Campos del formulario */}
      <TextInput type="email" name="email" label="Email" register={register} errors={errors} />
      <TextInput type="text" name="author" label="Author" register={register} errors={errors} />
      <TextInput type="text" name="title" label="Title" register={register} errors={errors} />
      <TextInput type="text" name="body" label="Body" register={register} errors={errors} />
      <Button type='submit'>Submit</Button>
    </form>
  );
};
