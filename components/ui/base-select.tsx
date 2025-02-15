import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { SelectProps } from "@radix-ui/react-select";

interface BaseSelectItem {
  value: string;
  label: React.ReactNode;
}

export interface BaseSelectProps extends SelectProps {
  triggerClassName?: string;
  options?: BaseSelectItem[];
  placeholder?: string;
  onChange?: (a: string) => void;
  multi?: boolean;
}

export const BaseSelect = ({
  triggerClassName,
  options = [],
  placeholder = "",
  value,
  onChange,
}: BaseSelectProps) => {
  return (
    <Select onValueChange={onChange} defaultValue={value}>
      <SelectTrigger className={triggerClassName}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options?.map(({ value, label }) => (
          <SelectItem value={value} key={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
