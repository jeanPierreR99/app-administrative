import { useState } from "react";
import Modal from "./Modal";
import { Button } from "./ui/button";
import FormUser from "./FormUser";

const UserModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <Button onClick={openModal} className='bg-blue-500 hover:bg-blue-400 mb-6'>Nuevo</Button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h4 className="font-bold mb-2">Nuevo Usuario</h4>
                <FormUser></FormUser>
            </Modal>
        </>
    );
};

export default UserModal;