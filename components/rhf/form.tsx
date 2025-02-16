"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const SignupSchema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
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
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="flex justify-center items-center h-[90vh]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 border p-4 rounded-sm"
      >
        <div className="font-semibold">React Hook Form</div>
        <div>
          <label>Name</label>
          {/* register input field for accessing the input value */}
          <Input {...register("name")} className="border" />
          {/* Show error message */}
          <div className="text-sm text-red-500">
            {errors?.name && <p>{errors?.name?.message}</p>}
          </div>
        </div>

        <div>
          <label>Email</label>
          <Input {...register("email")} className="border" />
          <div className="text-sm text-red-500">
            {errors?.email && <p>{errors?.email?.message}</p>}
          </div>
        </div>
        <Button type="submit" className="bg-black text-white">
          Submit
        </Button>
      </form>
    </div>
  );
};
