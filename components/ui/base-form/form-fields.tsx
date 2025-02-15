import React from "react";
import { BaseFormField } from "./form-field";
import { BaseFormFieldsProps } from "./types";
import { FormFieldGroup } from "./form-field-group";

export const BaseFormFields = ({
  fields = [],
  control,
  fieldPrefix,
}: BaseFormFieldsProps) => {
  return (
    <>
      {fields?.map((field, index) => {
        if (field.group) {
          return (
            <FormFieldGroup
              {...field}
              control={control}
              key={index}
              group
              fieldPrefix={fieldPrefix}
              defaultValue={field.defaultValue}
            />
          );
        }

        const fieldName = fieldPrefix
          ? `${fieldPrefix}.${field.name}`
          : field.name;

        if (!field.group) {
          return (
            <BaseFormField
              key={index}
              control={control}
              {...field}
              name={fieldName}
            />
          );
        }
      })}
    </>
  );
};
