import React from "react";
import { BaseFormFields } from "./form-fields";
import { InputGroupComponentProps } from "./types";

export const VerticalFieldGroup = (props: InputGroupComponentProps) => {
  return <BaseFormFields {...props} />;
};
