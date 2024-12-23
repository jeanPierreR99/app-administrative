import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useState, useRef } from "react";

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

const DataDisplayAdministrative = () => {
    const [searchField, setSearchField] = useState("");
    const fieldRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    // Scroll to the corresponding field based on the input
    const scrollToField = (field: string) => {
        if (fieldRefs.current[field]) {
            fieldRefs.current[field]?.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    return (
        <div>
            <div className="flex gap-4">
                <div className="relative mb-2 w-fit py-2 pr-1">
                    <Input
                        className=""
                        placeholder="Buscar código"
                        type="text"
                    />
                    <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300" />
                </div>
                <div className="relative mb-2 w-fit py-2 pr-1">
                    <Input
                        className=""
                        placeholder="Buscar campo"
                        type="text"
                        value={searchField}
                        onChange={(e) => {
                            setSearchField(e.target.value);
                            scrollToField(e.target.value);
                        }}
                    />
                    <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300" />
                </div>
            </div>
            <div className="md:grid grid-cols-2 gap-4">
                {/* Primer bloque de datos */}
                <div className="w-full">
                    <div className="space-y-4">
                        {columns.slice(0, Math.floor(columns.length / 2)).map((column, index) => (
                            <div
                                key={index}
                                ref={(el) => (fieldRefs.current[column] = el)}
                                className={`flex text-sm justify-between gap-4 p-2 rounded-md ${column.toLowerCase().includes(searchField.toLowerCase()) ? "bg-gray-200" : "bg-gray-100"
                                    }`}
                            >
                                <span className="font-medium">{column}:</span>
                                <span>{data[0][column]}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Segundo bloque de datos */}
                <div className="w-full">
                    <div className="space-y-4">
                        {columns.slice(Math.floor(columns.length / 2)).map((column, index) => (
                            <div
                                key={index}
                                ref={(el) => (fieldRefs.current[column] = el)}
                                className={`flex justify-between text-sm gap-4 p-2 rounded-md ${column.toLowerCase().includes(searchField.toLowerCase()) ? "bg-gray-200" : "bg-gray-100"
                                    }`}
                            >
                                <span className="font-medium">{column}:</span>
                                <span>{data[0][column]}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataDisplayAdministrative;
