import DataTableUser from "@/components/DataTableUser";
import UserModal from "@/components/UserModal";

const RolesUsers = () => {
    return (
        <div className="px-2">
            <h4 className='text-gray-500 mb-6'>Roles y Usuarios</h4>
            <UserModal></UserModal>
            <DataTableUser></DataTableUser>
        </div>
    );
};

export default RolesUsers;