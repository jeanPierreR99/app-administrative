import DataDisplayAdministrative from "@/components/DataDisplayAdministrative";
import DataTableAdministrative from "@/components/DataTableAdministrative";
import FormAdministrative from "@/components/FormAdministrative";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Lawful = () => {
    return (
        <div className='px-2'>
            <h4 className='text-gray-500 mb-6'>Área Legal</h4>
            <Tabs defaultValue="form">
                <TabsList>
                    <TabsTrigger value="form">Formulario</TabsTrigger>
                    <TabsTrigger value="register">Registros</TabsTrigger>
                    <TabsTrigger value="detalle">Detalle</TabsTrigger>
                </TabsList>
                <TabsContent value="form" className="pt-4">
                    <fieldset className='border p-2 rounded-md'>
                        <legend className='text-gray-500 px-2 text-sm'>Nuevo Registro (Legal)</legend>
                        <FormAdministrative></FormAdministrative>
                    </fieldset>
                </TabsContent>
                <TabsContent value="register" className="pt-4">
                    <DataTableAdministrative />
                </TabsContent>
                <TabsContent value="detalle" className="pt-4">
                    <DataDisplayAdministrative></DataDisplayAdministrative>
                </TabsContent>
            </Tabs>

        </div>
    );
};

export default Lawful;