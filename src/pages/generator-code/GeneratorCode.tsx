import { Outlet } from 'react-router-dom';

const GeneratorCode = () => {
    return (
        <div>
            {<Outlet />}
        </div>
    );
};

export default GeneratorCode;