import { useForm } from 'react-hook-form';
import { TextInput } from '../components/Input';

export const PostCreate = () => {
    const { register,
            handleSubmit,
            formState: { errors } } 
    = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 max-w-md mx-auto'>
            <TextInput type="email" name="Email" placeholder="Email" register={register} errors={errors} />
            <TextInput type="text" name="Body" placeholder="Body" register={register} errors={errors} />
            <TextInput type="text" name="Author" placeholder="Author" register={register} errors={errors} />
            <TextInput type="text" name="Title" placeholder="Title" register={register} errors={errors} />
            <input type="submit" />
        </form>
    );
}