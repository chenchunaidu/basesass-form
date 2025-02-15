import React, { useMemo } from "react";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import { Control } from "react-hook-form";
import { BaseFormInput } from "./form-input";
import { CoreBaseFormFields } from "./types";

export interface BaseFormFieldProps extends CoreBaseFormFields {
  control: Control;
}

export const BaseFormField = ({
  label = "",
  name = "",
  description,
  inputProps = {},
  control,
}: BaseFormFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-1 w-full">
          <FormLabel className="text-slate-600">{label}</FormLabel>
          <FormControl>
            <BaseFormInput {...inputProps} {...field} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
