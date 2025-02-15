import React from "react";
import { Control } from "react-hook-form";
import { BaseFormFieldsType } from "./types";
import { HorizontalFieldGroup } from "./horizontal-field-group";
import { VerticalFieldGroup } from "./vertical-input-group";
import { RepeatedInputGroup } from "./repeated-field-group";

export enum FromInputGroupType {
  Vertical,
  Horizontal,
  Repeated,
}

export interface CoreFormFieldGroupProps {
  fields: BaseFormFieldsType[];
  title?: string;
  groupType?: FromInputGroupType;
  group: true;
  groupName?: string;
  className?: string;
  defaultValue?: Record<string, never>;
  label?: string;
}

export interface FormFieldGroupProps extends CoreFormFieldGroupProps {
  control: Control;
  fieldPrefix?: string;
}

const componentMapping = {
  [FromInputGroupType.Horizontal]: HorizontalFieldGroup,
  [FromInputGroupType.Vertical]: VerticalFieldGroup,
  [FromInputGroupType.Repeated]: RepeatedInputGroup,
};

export const FormFieldGroup = ({
  fields,
  control,
  title,
  groupType = FromInputGroupType.Horizontal,
  groupName,
  fieldPrefix,
  className,
  defaultValue,
  label,
}: FormFieldGroupProps) => {
  const Component = componentMapping[groupType];
  return (
    <div>
      <div>{title}</div>
      <Component
        fields={fields}
        control={control}
        fieldPrefix={fieldPrefix}
        groupName={groupName}
        className={className}
        defaultValue={defaultValue}
        label={label}
      />
    </div>
  );
};
