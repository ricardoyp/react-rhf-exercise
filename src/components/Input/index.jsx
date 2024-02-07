import { Input } from '@nextui-org/react';   // Importamos el componente

export const TextInput = ({ type, name, placeholder, register, errors }) => {
    let validationRules = {};
    if (type === 'email') {
        validationRules = {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Expresión regular para validar email
        };
    } else {
        validationRules = { required: true };
    }

    return (
            <Input
                type={type}
                label={placeholder}
                {...register(name, validationRules)}
                color={errors[name] ? 'danger' : 'primary'}
                errorMessage={errors[name] && "This field is required" + (type === 'email' ? " and must be a valid email" : "")}
            />
    );
};
