import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
  useController,
} from "react-hook-form";

interface Props<Type extends FieldValues>
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: Path<Type>;
  control?: Control<Type>;
  rules?: RegisterOptions<Type>;
}

export default function Input<Type extends FieldValues>({
  className = "",
  name,
  control,
  rules,
  ...rest
}: Props<Type>) {
  const { field } = useController({ name, control, rules });

  return (
    <input
      className={`h-14 w-full max-w-none bg-gray-light px-4 rounded-sm font-medium text-md placeholder:text-gray-medium ${className}`}
      {...rest}
      {...field}
    />
  );
}
