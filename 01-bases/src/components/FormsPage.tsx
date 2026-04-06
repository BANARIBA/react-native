import { useForm } from "react-hook-form";

type FormInputs = {
  email: string;
  password: string;
};

export const FormsPage = () => {

  const { register, handleSubmit, watch } = useForm<FormInputs>({
    defaultValues: {
      email: "goku@google.com",
      password: "123456789",
    },
  });

  // eslint-disable-next-line react-hooks/incompatible-library
  console.log(watch('email'));

  const onSubmit = (data: FormInputs) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
      <div className="flex flex-col space-y-2 w-125">
        <input
          type="email"
          id="email"
          placeholder="email"
          className="border border-gray-300 p-2 rounded-xl"
          {...register("email", { required: "Email is required" })}
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          className="border border-gray-300 p-2 rounded-xl"
          {...register("password", { required: "Password is required" })}
        />

        <button className="bg-blue-500 text-white p2 rounded-xl" type="submit">
          Ingresar
        </button>
      </div>
    </form>
  );
};
