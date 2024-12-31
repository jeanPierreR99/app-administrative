import { Search } from "lucide-react";
import { Input } from "./ui/input";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

const DataTable = ({ data }: any) => {

    return (
        <div>
            <div className="overflow-x-auto ">
                <div className="relative mb-2 w-fit float-right py-2 pr-1">
                    <Input
                        placeholder="Buscar código"
                        type="text"
                    />
                    <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300" />
                </div>

                <table className="w-full">
                    <thead className="text-left">
                        <tr className="bg-blue-50 text-sm">
                            <th className="border-r border-gray-200 px-4 py-3">Código</th>
                            <th className="border-r border-gray-200 px-4 py-3">Región</th>
                            <th className="border-r border-gray-200 px-4 py-3">Fecha de creación</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item: any, index: any) => (
                            <tr key={index} className="hover:bg-blue-50 text-gray-500 text-sm">
                                <td className="px-4 py-3 text-blue-500"><span className="bg-blue-50 text-blue-500 border rounded-sm px-2 py-[3px] border-blue-300">{item.code}</span></td>
                                <td className="px-4 py-3">{item.region}</td>
                                <td className="px-4 py-3">{item.create_at}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination className="justify-end text-gray-500">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
};

export default DataTable;