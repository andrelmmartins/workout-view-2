import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

export default function Button({
  className = "",
  ...rest
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <button
      className={`bg-black text-green font-bold text-xl w-full h-16 ${className}`}
      {...rest}
    />
  );
}
