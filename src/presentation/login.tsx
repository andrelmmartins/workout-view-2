"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Text from "@/components/Text";
import { useMFit } from "@/contexts/MFitContext";
import { SignInData } from "@/interfaces/mfit";
import { useForm } from "react-hook-form";

export function LoginPage() {
  const { signIn } = useMFit();
  const { control, handleSubmit } = useForm<SignInData>({
    values: {
      mail: "",
      senha: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    signIn(data);
  });

  return (
    <main>
      <div className="flex-1 flex items-center justify-center">
        <Text size="xl">Workout View</Text>
      </div>

      <form className="flex flex-col gap-10 w-full" onSubmit={onSubmit}>
        <div className="flex flex-col gap-4">
          <Input name="mail" control={control} placeholder="E-mail" />
          <Input name="senha" control={control} placeholder="Senha" />
        </div>
        <Button type="submit">Entrar</Button>
      </form>
    </main>
  );
}
