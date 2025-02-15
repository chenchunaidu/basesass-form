import React from "react";

interface BaseFormErrorProps {
  children: string;
}

export const BaseFormError = ({ children }: BaseFormErrorProps) => {
  return <h6 className="text-xs text-red-500">{children}</h6>;
};
