import React from "react";
import { Button } from "../button";
import { cn } from "@/lib/utils";

export interface BaseFormSubmitButton {
  children?: string;
  isLoading?: boolean;
  className?: string;
  render?: () => React.ReactNode;
}

export const BaseFormSubmitButton = ({
  children = "Submit",
  isLoading,
  render,
  className,
}: BaseFormSubmitButton) => {
  if (render) {
    return render();
  }
  return (
    <Button
      type="submit"
      isLoading={isLoading}
      className={cn("w-full", className)}
    >
      {children}
    </Button>
  );
};
