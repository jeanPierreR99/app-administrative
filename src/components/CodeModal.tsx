import { useState } from "react";
import Modal from "./Modal";
import { Button } from "./ui/button";
import FormCode from "./FormCode";

const CodeModal = ({ data, setData, idString, buttonTitle }: any) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <Button onClick={openModal} className='bg-blue-500 hover:bg-blue-400'>{buttonTitle}</Button>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h4 className="font-bold mb-2">Nuevo Código {buttonTitle}</h4>
                <FormCode data={data} setData={setData} idString={idString}></FormCode>
            </Modal>
        </>
    );
};

export default CodeModal;