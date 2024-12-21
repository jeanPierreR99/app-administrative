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
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { InputSelect } from "./InputSelect";
import { useToast } from "@/hooks/use-toast";

const FormSchema = z.object({
    code: z.string().nonempty("Campo requerido."),
    region: z.string().nonempty("Campo requerido."),
    inmuebles: z.string().nonempty("Campo requerido."),
});

const FormCode = ({ data, setData, idString }: any) => {
    const [visible, setVisible] = useState(false);
    const { toast } = useToast()
    const [code, setCode] = useState("");

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    const { setValue, watch, handleSubmit } = form;

    const lastCode = data[data.length - 1]?.code;

    const extractNumber = (code: string) => {
        const match = code.split("-");
        return parseInt(match[1]);
    };

    const nextNumber = lastCode ? extractNumber(lastCode) + 1 : 0;
    const currentDate = new Date().toISOString().split("T")[0];

    const generateCode = (numInmuebles: number, nextNumber: number) => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let letterPart = "";

        for (let i = 0; i < numInmuebles - 1; i++) {
            letterPart += letters[i];
        }

        return `${idString}-${nextNumber}-${letterPart}`;
    };

    function onSubmit(values: z.infer<typeof FormSchema>) {
        setVisible(true);
        const codeAux = generateCode(parseInt(values.inmuebles), nextNumber);
        setTimeout(() => {

            setVisible(false);
            setCode(codeAux)

            const setBBVA = {
                code: codeAux,
                region: values.region,
                inmuebles: values.inmuebles,
                create_at: currentDate
            };
            setData([...data, setBBVA]);

            toast({
                title: "Codigo generado y guardado",
                description: `Se Genero el código ${codeAux}`,
            })
        }, 3000);
    }

    useEffect(() => {

        setValue("code", nextNumber.toString());
    }, [nextNumber, setValue]);

    return (
        <FormProvider {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 h-fit border p-2 rounded-md">
                <FormField
                    control={form.control}
                    name="code"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Código</FormLabel>
                            <FormControl>
                                <Input
                                    className="bg-gray-200 font-bold"
                                    {...field}
                                    disabled
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="region"
                    render={() => (
                        <FormItem>
                            <FormLabel>Región</FormLabel>
                            <InputSelect
                                value={watch("region")}
                                onChange={(value) => setValue("region", value)}
                            />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="inmuebles"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Cantidad de inmuebles</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <Button className="w-full bg-blue-500 hover:bg-blue-400" type="submit">
                    {visible ? <Loader2 className="animate-spin" /> : "Generar"}
                </Button>
                {code && (<h2 className='font-bold'>Codigo Generado: <span className=' bg-blue-100 p-1 px-2 rounded-lg font-normal text-blue-400'>{code}</span></h2>)}
            </form>
        </FormProvider>
    );
};

export default FormCode;
