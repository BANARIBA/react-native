import { useForm } from "react-hook-form"

type FormInput = {
  email: string;
  password: string;
}

export const FormsPage = () => {
  
  const { register, handleSubmit } = useForm<FormInput>({
    defaultValues: {
      email: 'gohan@gmail.com',
      password: 'asd.456',
    }
  });

  const onSubmit = (loginForm: FormInput) => {
    console.log(loginForm);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Forms</h3>
        <div className="flex flex-col space-y-2 w-[500px]">
          <input type="email" placeholder="email" className="border border-gray-300 p-2 rounded-xl" { ...register('email', { required: true })}/>
          <input type="password" placeholder="password" className="border border-gray-300 p-2 rounded-xl" {...register('password', { required: true })} />

          <button type="submit" className="bg-blue-500 text-white p-2">
            Login
          </button>
        </div>
      </form> 
    </>
  )
}
