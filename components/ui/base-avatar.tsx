import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { cn } from "@/lib/utils";

interface BaseAvatar {
  src: string;
  alt?: string;
  imageClassName?: string;
  fallbackClassName?: string;
  className?: string;
}

const getFallBack = (alt?: string) => {
  if (!alt) {
    return "";
  }
  const [string1, string2] = alt.split(" ");
  if (!string2?.length) {
    if (string1.length <= 2) {
      return string1;
    }
    return string1[0] + string1[1];
  }
  return string1[0] + string2[0];
};

export function BaseAvatar({
  src,
  alt = "",
  imageClassName,
  fallbackClassName,
  className,
}: BaseAvatar) {
  return (
    <Avatar className={className}>
      <AvatarImage
        src={src}
        alt={alt}
        className={cn("object-cover", imageClassName)}
      />
      <AvatarFallback className={fallbackClassName}>
        {getFallBack(alt)}
      </AvatarFallback>
    </Avatar>
  );
}
