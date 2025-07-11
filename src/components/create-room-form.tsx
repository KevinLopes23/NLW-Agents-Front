import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField, FormItem, FormMessage } from "./ui/form";
import { FormLabel } from "./ui/form";
import { FormControl } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useCreateRoom } from "@/http/use-create-room";

const createRoomSchema = z.object({
  name: z.string().min(3, { message: "Inclua no minimo 3 caracteres" }),
  description: z.string(),
});

type CreateRoomFormData = z.infer<typeof createRoomSchema>;

export function CreateRoomForm() {
  const { mutateAsync: createRoom } = useCreateRoom();

  const createRoomForm = useForm<CreateRoomFormData>({
    resolver: zodResolver(createRoomSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  async function handleCreateRoom({ name, description }: CreateRoomFormData) {
    await createRoom({ name, description });
     createRoomForm.reset();
  }

  return (
    <Card className="w-full max-w-md h-fit">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg">Criar sala</CardTitle>
        <CardDescription className="text-sm">
          Crie uma nova sala para começar a fazer perguntas e receber respostas
          da I.A
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <Form {...createRoomForm}>
          <form
            onSubmit={createRoomForm.handleSubmit(handleCreateRoom)}
            className="flex flex-col gap-3"
          >
            <FormField
              control={createRoomForm.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel className="text-sm">Nome da sala</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Digite o nome da sala ..."
                      className="h-9"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={createRoomForm.control}
              name="description"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel className="text-sm">Descrição</FormLabel>
                  <FormControl>
                    <Textarea {...field} className="min-h-[80px] resize-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full mt-2">
              Criar sala
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
