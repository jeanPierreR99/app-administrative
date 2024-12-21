import { Search } from "lucide-react";

const DataTable = ({ data }: any) => {

    return (
        <div className="overflow-x-auto ">
            <div className="mb-2 relative w-fit"><input className="border-b px-2 pr-10 py-1 text-gray-500" placeholder="Buscar"></input><Search className="absolute right-2 text-gray-300 top-[50%] translate-y-[-50%]"></Search></div>
            <table className="w-full">
                <thead className="text-left">
                    <tr className="bg-gray-100 text-sm">
                        <th className="border-r border-gray-200 px-4 py-2 text-blue-500">Código</th>
                        <th className="border-r border-gray-200 px-4 py-2">Región</th>
                        <th className="border-r border-gray-200 px-4 py-2">Fecha de creación</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item: any, index: any) => (
                        <tr key={index} className="hover:bg-gray-50 text-gray-500 text-sm">
                            <td className="px-4 py-2 font-bold text-blue-500">{item.code}</td>
                            <td className="px-4 py-2">{item.region}</td>
                            <td className="px-4 py-2">{item.create_at}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;