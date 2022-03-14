import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { useForm } from 'react-hook-form';

import './Form.css';


export interface FormData {
  email: string;
  password: string;
}


interface FormProps extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> { }


export function Form({ onSubmit, ...props }: FormProps): JSX.Element {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isValid
    }
  } = useForm<FormData>({ mode: "onBlur" });

  function onsubmit(data: FormData): void {
    alert(JSON.stringify(data));
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onsubmit)} {...props}>
      <label>
        Email:
        <input
          {...register("email", {
            required: "This field is required!",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format"
            }
          })}
          type="email"
          name="email"
        />
      </label>
      {errors?.email && <p role="alert">{errors.email.message}</p>}

      <label>
        Password:
        <input
          {...register("password", {
            required: "This field is required!",
            minLength: {
              value: 3,
              message: "Entered value cannot be less than 3 symbols"
            }
          })}
          type="password"
          name="password"
        />
      </label>
      {errors?.password && <p role="alert">{errors.password.message}</p>}

      <button type="submit" disabled={!isValid}>Submit</button>
    </form>
  );
}
