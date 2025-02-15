import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { cn } from "@/lib/utils";

interface BaseDropdownMenuItem {
  label: React.ReactNode;
  onClick?: () => void;
}

interface BaseDropdownMenuProps {
  children: React.ReactNode;
  contentClassName?: string;
  items?: BaseDropdownMenuItem[];
}

export function BaseDropdownMenu({
  children,
  contentClassName,
  items = [],
}: BaseDropdownMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className={cn("w-56", contentClassName)}>
        {items?.map(({ label, onClick }, index) => (
          <DropdownMenuItem onClick={onClick} key={index}>
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
