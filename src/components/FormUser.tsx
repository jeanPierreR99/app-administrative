import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { InputSelect } from "./InputSelect";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const FormSchema = z.object({
    dni: z.string().nonempty("El DNI es requerido."),
    nombres: z.string().nonempty("Los nombres son requeridos."),
    apellidos: z.string().nonempty("Los apellidos son requeridos."),
    area: z.string().nonempty("El área es requerida."),
    estado: z.string().nonempty("El estado es requerido."),
});

const FormUser = ({ data, setData }: any) => {
    const { toast } = useToast();
    const [visible, setVisible] = useState(false);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    const { setValue, watch, handleSubmit } = form;

    const onSubmit = (values: z.infer<typeof FormSchema>) => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);

            const newUser = {
                ...values,
            };

            setData([...data, newUser]);

            toast({
                title: "Usuario agregado",
                description: `Se ha agregado al usuario con DNI: ${values.dni}`,
            });

            form.reset(); // Resetea los campos
        }, 2000);
    };

    return (
        <FormProvider {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="dni"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>DNI</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Ingrese el DNI" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="nombres"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nombres</FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="Ingrese los nombres"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="apellidos"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Apellidos</FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="Ingrese los apellidos"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="area"
                    render={() => (
                        <FormItem>
                            <FormLabel>Área</FormLabel>
                            <InputSelect
                                value={watch("area")}
                                onChange={(value) => setValue("area", value)}
                                options={[
                                    { label: "A. Comercio", value: "A. Comercio" },
                                    { label: "A. Administrativa", value: "A. Administrativa" },
                                    { label: "A. Contable", value: "A. Contable" },
                                    { label: "A. Legal", value: "A. Legal" },
                                ]}
                            />
                        </FormItem>
                    )}
                />

                <Button className="w-full bg-blue-500 hover:bg-blue-400" type="submit">
                    {visible ? <Loader2 className="animate-spin" /> : "Agregar Usuario"}
                </Button>
            </form>
        </FormProvider>
    );
};

export default FormUser;
