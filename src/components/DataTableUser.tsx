import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

type User = {
    dni: string;
    nombres: string;
    apellidos: string;
    area: string;
    estado: string;
};

const users: User[] = [
    { dni: "87654321", nombres: "María", apellidos: "González", area: "A. Administrativa", estado: "Activo" },
    { dni: "56781234", nombres: "Carlos", apellidos: "Ramírez", area: "A. Contable", estado: "Activo" },
    { dni: "43218765", nombres: "Ana", apellidos: "López", area: "A. Legal", estado: "Activo" },
    { dni: "34567812", nombres: "Pedro", apellidos: "Martínez", area: "A. Comercio", estado: "Baja" },
];

const DataTableUser = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="text-left">
                        <tr className="text-sm bg-blue-50 border-b">
                            <th className="border-r border-gray-200 px-4 py-3">DNI</th>
                            <th className="border-r border-gray-200 px-4 py-3">Nombres</th>
                            <th className="border-r border-gray-200 px-4 py-3">Apellidos</th>
                            <th className="border-r border-gray-200 px-4 py-3">Área</th>
                            <th className="border-r border-gray-200 px-4 py-3">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index} className="hover:bg-blue-50 text-gray-500 text-sm">
                                <td className="px-4 py-3">{user.dni}</td>
                                <td className="px-4 py-3">{user.nombres}</td>
                                <td className="px-4 py-3">{user.apellidos}</td>
                                <td className="px-4 py-3">{user.area}</td>
                                <td className="px-4 py-3"><span className={`${user.estado == "Activo" ? "bg-blue-50 text-blue-500 border-blue-300" : "bg-red-50 text-red-500 border-red-300"} px-3  rounded-sm py-[2px] border `}>{user.estado}</span></td>
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

export default DataTableUser;
