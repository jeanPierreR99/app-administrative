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
}

export function InputSelect({ value, onChange }: InputSelectProps) {
    return (
        <Select value={value} onValueChange={onChange}>
            <SelectTrigger>
                <SelectValue placeholder="Selecciona una Región" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Región</SelectLabel>
                    <SelectItem value="Oriente">Oriente</SelectItem>
                    <SelectItem value="Sur">Sur</SelectItem>
                    <SelectItem value="Norte">Norte</SelectItem>
                    <SelectItem value="Lima">Lima</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
