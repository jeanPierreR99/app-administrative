import DataTable from '@/components/DataTable';
import FormCode from '@/components/FormCode';
import { useEffect, useState } from 'react';

export interface ICode {
  code: string;
  region: string;
  create_at: string;
}

const dataBBVA: ICode[] = [
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

const IRBSA = () => {
  const [databbva, setDatabbva] = useState<ICode[]>([])
  useEffect(() => {
    setDatabbva(dataBBVA)
  }, [])
  return (
    <div>
      <h2 className='font-bold text-blue-500'>Códigos IRBSA</h2>
      <br />
      <div className="grid grid-cols-3 gap-10">
        <FormCode data={databbva} setData={setDatabbva} idString={"IC"} />
        <div className='col-span-2'>
          <DataTable data={databbva}></DataTable>
        </div>
      </div>
    </div>
  );
};

export default IRBSA;
