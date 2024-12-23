import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface InputSelectProps {
    value: string | undefined;
    onChange: (value: string) => void;
    options: any;
}

export function InputSelect({ value, onChange, options }: InputSelectProps) {
    return (
        <Select value={value} onValueChange={onChange}>
            <SelectTrigger>
                <SelectValue placeholder="Selecciona una Región" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Asignar</SelectLabel>
                    {options.map((data: any, index: any) =>
                        <SelectItem key={index} value={data.value}>{data.label}</SelectItem>
                    )}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
