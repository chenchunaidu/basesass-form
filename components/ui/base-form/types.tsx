import { Control } from "react-hook-form";
import { BaseFormInputProps } from "./form-input";
import { CoreFormFieldGroupProps } from "./form-field-group";

export interface CoreBaseFormFields {
  name: string;
  label?: string;
  description?: string;
  inputProps?: BaseFormInputProps;
  group?: false;
}

export type BaseFormFieldsType = CoreBaseFormFields | CoreFormFieldGroupProps;

export interface BaseFormFieldsProps {
  fields: BaseFormFieldsType[];
  control: Control;
  fieldPrefix?: string;
}

export interface InputGroupComponentProps extends BaseFormFieldsProps {
  groupName?: string;
  className?: string;
  label?: string;
  defaultValue?: Record<string, string>;
}
