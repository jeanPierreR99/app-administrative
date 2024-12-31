import { BartChartGraf2 } from "@/components/BartChart2";
import { BartChartGraf } from "@/components/BartChartGraf";
import { PieChartGraf } from "@/components/PIeChartGraf";
import { Button } from "@/components/ui/button";

const Report = () => {
    return (
        <div className='px-2'>
            <h4 className='text-gray-500 mb-6'>REPORTE</h4>
            <Button className="mb-6 bg-blue-500 hover:bg-blue-400">Unir y Exportar</Button>
            <div className="md:grid grid-cols-2 gap-4">
                <div>
                    <PieChartGraf></PieChartGraf>
                </div>
                <div className="mt-4 md:mt-0">
                    <BartChartGraf></BartChartGraf>
                </div>
            </div>
            <div className="mt-4">
                <BartChartGraf2></BartChartGraf2>
            </div>
        </div>
    );
};

export default Report;