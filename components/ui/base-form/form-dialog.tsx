import React from "react";
import { BaseDialog, BaseDialogProps } from "../base-dialog";
import { Button } from "../button";
import { DialogTrigger } from "../dialog";

interface FormDialog extends Omit<BaseDialogProps, "children"> {
  label: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const FormDialog = (props: FormDialog) => {
  const { content, label, open, onOpenChange, ...remProps } = props;

  return (
    <BaseDialog
      content={content}
      open={open}
      onOpenChange={onOpenChange}
      {...remProps}
    >
      <div className="w-full flex justify-end">
        <DialogTrigger asChild>
          <Button>{label}</Button>
        </DialogTrigger>
      </div>
    </BaseDialog>
  );
};
