import React from "react";
import { BaseForm } from "../ui/base-form/form";
import * as yup from "yup";
import { FormInputType } from "../ui/base-form/form-input";

const fields = [
  { name: "name", label: "Name" },
  { name: "email", label: "Email" },
  {
    name: "bio",
    label: "Bio",
    inputProps: {
      fieldType: FormInputType.Textarea,
    },
  },
  {
    name: "gender",
    label: "Gender",
    inputProps: {
      fieldType: FormInputType.Select,
      options: [
        {
          label: "Male",
          value: "male",
        },
        {
          label: "Female",
          value: "female",
        },
      ],
    },
  },
];
const SignupSchema = yup
  .object({
    name: yup.string().required(),
    bio: yup.string().required(),
    gender: yup.string().required(),
    email: yup.string().email().required(),
  })
  .required();

export const BaseFormSimple = () => {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="space-y-4 border rounded-sm p-4">
        <div className="font-semibold">Base Form</div>
        <BaseForm
          schema={SignupSchema}
          fields={fields}
          onSubmit={(e) => {
            alert(JSON.stringify(e, null, 2));
          }}
          className="space-y-4"
        />
      </div>
    </div>
  );
};
