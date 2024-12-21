import DataTable from '@/components/DataTable';
import FormCode from '@/components/FormCode';
import { useEffect, useState } from 'react';

export interface ICode {
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

const BBVA = () => {
  const [databbva, setDatabbva] = useState<ICode[]>([])
  useEffect(() => {
    setDatabbva(dataBBVA)
  }, [])
  return (
    <div>
      <h2 className='font-bold text-blue-500'>Códigos BBVA</h2>
      <br />
      <div className="grid grid-cols-3 gap-10">
        <FormCode data={databbva} setData={setDatabbva} idString={"BC"} />
        <div className='col-span-2'>
          <DataTable data={databbva}></DataTable>
        </div>
      </div>
    </div>
  );
};

export default BBVA;
