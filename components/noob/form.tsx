"use client";
import React, { FormEvent, useState } from "react";
import * as yup from "yup";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const SignupSchema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
  })
  .required();

type errorMessageType = yup.InferType<typeof SignupSchema>;

export const NoobForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState<errorMessageType>();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await SignupSchema.validate({ name, email, bio }, { abortEarly: false });
    } catch (err) {
      const errorObj: errorMessageType = { name: "", email: "" };
      (err as yup.ValidationError)?.inner?.forEach((e) => {
        if (e?.path) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          errorObj[e?.path] = e?.message;
        }
      });
      setErrors(errorObj);
      return;
    }

    alert(JSON.stringify({ name, email, bio }, null, 2));
  };

  return (
    <div className="flex justify-center items-center h-[90vh]">
      <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded-sm">
        <div className="font-semibold">Noob Form</div>
        <div>
          <label>
            Name:
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="text-sm text-red-500">
          {errors?.name && <p>{errors?.name}</p>}
        </div>
        <div>
          <label>
            Email:
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <div className="text-sm text-red-500">
            {errors?.email && <p>{errors?.email}</p>}
          </div>
        </div>
        <div>
          <label>
            Bio:
            <Textarea value={bio} onChange={(e) => setBio(e.target.value)} />
          </label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
