"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const SignupSchema = yup
  .object({
    name: yup.string().required(),
    email: yup.number().positive().integer().required(),
  })
  .required();

export const RHFForm = () => {
  // initialize useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  // handle on submit
  const onSubmit = (data: yup.InferType<typeof SignupSchema>) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        {/* register input field for accessing the input value */}
        <input {...register("name")} className="border" />
        {/* Show error message */}
        {errors?.name && <p>{errors?.name?.message}</p>}
      </div>

      <div>
        <label>Email</label>
        <input {...register("email")} className="border" />
        {errors?.email && <p>{errors?.email?.message}</p>}
      </div>
      <input type="submit" className="bg-black text-white" />
    </form>
  );
};
