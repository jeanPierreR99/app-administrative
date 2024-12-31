import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useRef } from "react";

const columns = [
    "CARTERA", "PROPUESTA", "CODIGO ARCHIVO", "DEUDOR", "CONTEO", "CODIGO ARCHIVO GRUPAL", "UR", "UBICACIÓN",
    "COD CTRAL", "TERRITORIO OFICINA", "TERRITORIO", "OFICINA", "EQUIPO DE RECUPERACIONES",
    "ESPECIALISTA RECUPERACIONES / JEFE SEGUIMIENTO", "ESTUDIO JURÍDICO", "ENCARGADO ESTUDIO JURÍDICO", "TELÉFONO ESTUDIO JURÍDICO",
    "CODIGO MATRIZ BBVA", "LIMA/PROVINCIA", "DEPARTAMENTO", "PROVINCIA", "DISTRITO", "BROKER", "FECHA ULTIMA ASIGNACION",
    "TIPO DE INMUEBLE", "DECLARATORIA DE FÁBRICA", "FICHA/PARTIDA", "OFICINA SUNARP", "N°PARTIDA", "ÁREA TOTAL M2",
    "ÁREA CONSTRUIDA M2", "MODO DE ADQUISICIÓN", "FECHA ADQUISICIÓN", "FECHA DE CONTABILIZACIÓN", "AÑO CONTABLE", "PASE COMERCIAL",
    "VALOR DE RECONSTRUCCION S/", "VALOR DE RECONSTRUCCION US$", "FECHA DE TASACION AL MOMENTO DE ADQUISICION",
    "MONTO DE ADQUISICIÓN S/", "MONTO DE ADQUISICIÓN US$", "ALCABALA S/", "ALCABALA US$", "VALOR AJUSTADO (ADQ + ALCABALA) S/",
    "VALOR AJUSTADO (ADQ + ALCABALA) US$", "VALOR COMERCIAL AL MOMENTO DE ADQUISICION US$",
    "VALOR COMERCIAL AL MOMENTO DE ADQUISICION S/", "VALOR DE REALIZACIÓN INMEDIATA AL MOMENTO DE ADQUISICIÓN US$",
    "VALOR DE REALIZACIÓN INMEDIATA AL MOMENTO DE ADQUISICIÓN S/", "VALOR A NUEVO AL MOMENTO DE ADQUISICIÓN US$",
    "VALOR A NUEVO AL MOMENTO DE ADQUISICIÓN S/", "TASADOR AL MOMENTO DE ADQUISICIÓN", "FECHA TASACIÓN ACTUALIZADA", "TASADOR ACTUAL",
    "VALOR COMERCIAL ACTUALIZADO US$", "VALOR COMERCIAL ACTUALIZADO S/", "VALOR DE REALIZACIÓN ACTUALIZADO US$",
    "VALOR DE REALIZACIÓN ACTUALIZADO S/", "VALOR A NUEVO ACTUALIZADO US$", "VALOR A NUEVO ACTUALIZADO S/", "PRECIO REFERENCIAL US$",
    "PRECIO REFERENCIAL S/", "RESOLUCIÓN DE ADJUDICACIÓN", "RESOLUCIÓN CONSENTIMIENTO", "MINUTA", "ESCRITURA PÚBLICA", "CARTA NOTARIAL",
    "1ER NIVEL", "FECHA DEL 1ER NIVEL", "INSCRIPCIÓN REGISTRAL", "FECHA INSCRIPCION REGISTRAL", "POSESION", "FECHA DE POSESIÓN",
    "2DO NIVEL", "FECHA 2DO NIVEL", "CARGAS / GRAVAMENES", "TIPO DE CARGA / GRAVAMEN", "CARGA / GRAVAMEN BLOQUEANTE",
    "REVISIÓN MUNICIPAL", "MUNICIPAL BLOQUEANTE", "3ER NIVEL", "FECHA DEL 3ER NIVEL", "BLOQUEANTES", "ESTADO SANEAMIENTO LEGAL",
    "TIPO SANEAMIENTO: REGULAR / ESPECIAL", "SANEAMIENTO ESPECIAL", "FECHA POST VENTA", "SANEAMIENTO RECUPERACIONES / SEGUIMIENTO",
    "RESPONSABLE SANEAMIENTO", "EQUIPO RECUPERACIONES / SEGUIMIENTO", "ESTUDIO JURIDICO", "EXP. JUDICIAL", "AÑO DE DEMANDA",
    "DISPONIBLE", "FECHA DISPONIBLE", "COMENTARIOS", "META 2023", "META 2024", "INSCRIPCIÓN MUNICIPAL", "FECHA INSCRIPCION MUNICIPAL",
    "ÚLTIMO AÑO PAGADO DE IMPUESTOS", "EN PROMOCIÓN DE VENTA SI/NO", "AÑOS DE ADJUDICACIÓN", "AGRUPACIÓN POR AÑOS", "GUARDIANIA",
    "MANTENIMIENTO", "LLAVES", "DESPACHO : DETALLAR TRABAJO A REALIZAR", "COMPRADOR", "PRECIO DE VENTA S/", "PRECIO DE VENTA US$",
    "FORMA DE PAGO", "MES DE VENTA", "AÑO DE VENTA", "PASE A STOCK", "FECHA DE POSESIÓN", "MES DE VENTA", "AÑO DE VENTA", "ESTADO",
    "TASACION VIGENTE", "GRADO DE ATRACTIVO", "DESCRIPCIÓN INMUEBLE", "VENTA DE CARTERA", "CERCO", "MAYORES A 10000 M", "CRITERIO",
    "BANCA COMERCIAL", "ALCABALA", "FECHA ACTIVACION", "FECHA DESCTIVACION", "FECHA DE INSPECCIÓN", "N° INSPECCIONES", "CANTIDAD",
    "NIVEL DE SEGURIDAD", "DIAS", "SEGURIDAD", "AGUA", "LUZ", "BROKER", "EMPRESA DE AGUA", "SUMINISTRO", "SERVICIO DE AGUA",
    "EMPRESA DE LUZ", "SUMINISTRO", "SERVICIO DE LUZ", "SERVICIOS", "MANTENIMIENTO", "SANEAMIENTO", "REFACCIONES", "TASACION",
    "IMPUESTOS", "ARBITRIOS", "IMPREDIAL", "MULTAS", "TASAS", "HONORARIOS", "TOTAL al 31.08.2024 (PEN)",
    "TOTAL al 30.09.2024 (PEN)", "TOTAL al 30.10.2024 (PEN)", "TOTAL ACUMULADO (PEN)", "TOTAL al 31.08.2024 (USD)",
    "TOTAL al 30.09.2024 (USD)", "TOTAL al 30.10.2024 (USD)", "TOTAL ACUMULADO (USD)"
];

const data = Array.from({ length: 5 }, (_, i) =>
    columns.reduce((acc: any, column: any) => {
        acc[column] = `${column} ${i + 1}`;
        return acc;
    }, {})
);

const DataTableAdministrative = () => {

    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
        if (scrollContainerRef.current) {
            event.preventDefault(); // Previene el scroll vertical por defecto.
            scrollContainerRef.current.scrollLeft += event.deltaY; // Traduce el scroll vertical a horizontal.
        }
    };
    return (
        <div>
            <button className="bg-blue-500 text-sm hover:bg-blue-400 px-3 py-2 mb-4 rounded-md text-white">Exportar</button>
            <div
                ref={scrollContainerRef}
                onWheel={handleScroll}
                className="overflow-x-auto overflow-y-hidden max-w-full border border-gray-300"
            >
                <table className="w-full border border-gray-200">
                    <thead className="bg-blue-50 text-sm">
                        <tr>
                            {columns.map((column, index) => (
                                <th key={index} className="border border-gray-300 px-4 py-2">
                                    {column}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex} className="text-sm text-gray-500 even:bg-blue-50/50 hover:bg-blue-50">
                                {columns.map((column, colIndex) => (
                                    <td key={colIndex} className="border border-gray-300 px-4 py-2">
                                        {row[column]}
                                    </td>
                                ))}
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

export default DataTableAdministrative;
