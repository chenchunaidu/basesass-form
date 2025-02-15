import React from "react";
import { Input, InputProps } from "./input";

import { BaseSelect, BaseSelectProps } from "./base-select";
import { Textarea, TextareaProps } from "../textarea";

export enum FormInputType {
  Input = "input",
  Select = "select",
  Textarea = "textarea",
}

const componentMapping = {
  [FormInputType.Input]: Input,
  [FormInputType.Textarea]: Textarea,
  [FormInputType.Select]: BaseSelect,
};

export interface InputFormFieldProps extends InputProps {
  fieldType?: FormInputType.Input;
}

export interface TextAreaFormFieldProps extends TextareaProps {
  fieldType?: FormInputType.Textarea;
}

export interface SelectFormFieldProps extends BaseSelectProps {
  fieldType?: FormInputType.Select;
}

export type BaseFormInputProps =
  | InputFormFieldProps
  | TextAreaFormFieldProps
  | SelectFormFieldProps;

export const BaseFormInput = ({ fieldType, ...props }: BaseFormInputProps) => {
  const Component = componentMapping[fieldType || FormInputType.Input];

  //@ts-expect-error FIXME: Remove ts-ignore
  return <Component {...(props || {})} />;
};
