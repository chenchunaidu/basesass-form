import React from "react";
import { BaseFormFields } from "./form-fields";
import { InputGroupComponentProps } from "./types";
import { Button } from "../button";
import { EllipsisVertical } from "lucide-react";
import { UseFieldArrayRemove, useFieldArray } from "react-hook-form";
import { cn } from "@/lib/utils";
import { BaseDropdownMenu } from "../base-dropdown-menu";

interface ActionsProps {
  label: string;
  append: () => void;
  remove: UseFieldArrayRemove;
}

const Actions = ({ label, append, remove }: ActionsProps) => {
  return (
    <div>
      <BaseDropdownMenu
        items={[
          {
            label: `Add ${label}`,
            onClick: append,
          },
          {
            label: `Remove ${label}`,
            onClick: remove,
          },
        ]}
      >
        <EllipsisVertical className="w-4 h-4 text-gray-500" />
      </BaseDropdownMenu>
    </div>
  );
};

export const RepeatedInputGroup = ({
  fields,
  control,
  groupName = "",
  fieldPrefix,
  defaultValue,
  className,
  label = "",
}: InputGroupComponentProps) => {
  const finalFieldPrefix = `${fieldPrefix || ""}${
    fieldPrefix ? "." : ""
  }${groupName}`;

  const {
    fields: repeatableFields,
    append,
    remove,
  } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: finalFieldPrefix, // unique name for your Field Array
  });

  if (repeatableFields?.length === 0) {
    return (
      <Button
        onClick={(e) => {
          e.preventDefault();
          append(defaultValue);
        }}
        className="w-full border-dashed bg-gray-50 capitalize"
        variant="outline"
      >
        Add {groupName}
      </Button>
    );
  }

  return (
    <div className="space-y-2">
      {repeatableFields?.map(({ id }, index) => {
        return (
          <div key={id} className={cn("flex", className)}>
            <div className="w-full space-y-1">
              <BaseFormFields
                fields={fields}
                control={control}
                key={id}
                fieldPrefix={`${finalFieldPrefix}.${index}`}
              />
            </div>
            <Actions
              label={label}
              append={() => append(defaultValue)}
              remove={remove}
            />
          </div>
        );
      })}
    </div>
  );
};
