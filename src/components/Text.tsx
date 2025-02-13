import { DetailedHTMLProps, HTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export default function Text({ size = "md", className = "", ...rest }: Props) {
  if (size === "xl")
    return <h1 className={`font-bold text-2xl ${className}`} {...rest} />;
  if (size === "lg")
    return <h2 className={`font-bold text-xl ${className}`} {...rest} />;
  if (size === "md")
    return <h3 className={`font-bold text-lg ${className}`} {...rest} />;
  if (size === "sm") return <p className={`text-md ${className}`} {...rest} />;

  return <p className={`text-sm ${className}`} {...rest} />;
}
