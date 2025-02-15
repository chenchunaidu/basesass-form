import React from "react";

import { BaseFormFields } from "./form-fields";
import { InputGroupComponentProps } from "./types";
import { cn } from "@/lib/utils";

export const HorizontalFieldGroup = (props: InputGroupComponentProps) => {
  return (
    <div className={cn("flex w-full space-x-2", props.className)}>
      <BaseFormFields {...props} />
    </div>
  );
};
