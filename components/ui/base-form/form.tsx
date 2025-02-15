"use client";
import React, { useEffect, useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type * as yup from "yup";
import { Form } from "../form";
import { BaseFormFields } from "./form-fields";
import { BaseFormError } from "./error";
import { BaseFormSubmitButton } from "./submit-button";
import { cn } from "@/lib/utils";
import { BaseFormFieldsType } from "./types";

export interface BaseFormErrorProps {
  property: string;
  errorMessage: string;
}

export interface BaseFormProps {
  schema: yup.AnyObjectSchema;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValues?: Record<string, any>;
  errors?: string | BaseFormErrorProps[];
  button?: BaseFormSubmitButton;
  fields: BaseFormFieldsType[];
  onSubmit: SubmitHandler<Record<string, string>>;
  className?: string;
}

export const BaseForm = ({
  schema,
  fields,
  defaultValues = {},
  errors,
  button = {},
  className,
  onSubmit,
}: BaseFormProps) => {
  const form = useForm<yup.InferType<typeof schema>>({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });

  // Used for showing error message on each field
  useEffect(() => {
    if (Array.isArray(errors)) {
      errors?.forEach(({ property, errorMessage }) => {
        form.setError(property, { message: errorMessage });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  // Used for showing whole form error message like 500 error etc.,
  const formErrorMessage = useMemo(() => {
    if (Array.isArray(errors)) {
      return "";
    }
    return errors;
  }, [errors]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("w-96 space-y-2", className)}
      >
        <BaseFormFields fields={fields} control={form.control} />
        <BaseFormError>{formErrorMessage || ""}</BaseFormError>
        <BaseFormSubmitButton {...button} />
      </form>
    </Form>
  );
};
