import CodeModal from '@/components/CodeModal';
import DataTable from '@/components/DataTable';
import { useEffect, useState } from 'react';

interface ICode {
    code: string;
    region: string;
    create_at: string;
}

const dataBBVA: ICode[] = [
    { code: "BC-942-1", region: "Lima", create_at: "2024-01-23" },
    { code: "BC-943-1", region: "Lima", create_at: "2024-01-24" },
    { code: "BC-944-1", region: "Lima", create_at: "2024-01-25" },
    { code: "BC-995-1", region: "Lima", create_at: "2024-01-26" },
    { code: "BC-995-1-A", region: "Lima", create_at: "2024-01-27" },
    { code: "BC-995-1-B", region: "Lima", create_at: "2024-01-28" },
    { code: "BC-996-1", region: "Lima", create_at: "2024-01-29" },
    { code: "BC-997-1", region: "Lima", create_at: "2024-01-30" },
    { code: "BC-998-1", region: "Lima", create_at: "2024-01-31" },
];

const dataIRBSA: ICode[] = [
    { code: "IC-124-1", region: "Lima", create_at: "2024-01-23" },
    { code: "IC-12-1", region: "Lima", create_at: "2024-01-24" },
    { code: "IC-1221-1", region: "Lima", create_at: "2024-01-25" },
    { code: "IC-1254-1", region: "Lima", create_at: "2024-01-26" },
    { code: "IC-1225-1-A", region: "Lima", create_at: "2024-01-27" },
    { code: "IC-1228-1-B", region: "Lima", create_at: "2024-01-28" },
    { code: "IC-1229-1", region: "Lima", create_at: "2024-01-29" },
    { code: "IC-1230-1", region: "Lima", create_at: "2024-01-30" },
    { code: "IC-1231-1", region: "Lima", create_at: "2024-01-31" },
];

const GeneratorCode = () => {

    const [databbva, setDatabbva] = useState<ICode[]>([])
    const [datairbsa, setDatairbsa] = useState<ICode[]>([])
    useEffect(() => {
        setDatabbva(dataBBVA)
        setDatairbsa(dataIRBSA)
    }, [])

    return (
        <div className='px-2'>
            <h4 className='text-gray-500 mb-6'>Generador de Códigos</h4>
            <div className='flex gap-4'>
                <CodeModal data={databbva} setData={setDatabbva} idString={"BC"} buttonTitle={"Código BBVA"}></CodeModal>
                <CodeModal data={datairbsa} setData={setDatairbsa} idString={"IC"} buttonTitle={"Código IRBSA"}></CodeModal>
            </div>
            <div className='md:grid grid-cols-2 gap-6 mt-6'>
                <fieldset className='border p-2 rounded-md'>
                    <legend className='text-gray-500 px-2 text-sm'>Codigos BBVA</legend>
                    <DataTable data={databbva}></DataTable>
                </fieldset>
                <fieldset className='border mt-4 md:mt-0 p-2 rounded-md'>
                    <legend className='text-gray-500 px-2 text-sm'>Codigos IRBSA</legend>
                    <DataTable data={datairbsa}></DataTable>
                </fieldset>
            </div>
        </div>
    );
};

export default GeneratorCode;