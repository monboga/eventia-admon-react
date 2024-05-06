import { useState } from "react";
import { Modal } from "../shared/Modal";

export const Contacto = () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
        
        <div className="md:px-14 p-4 max-w-screen-2xl mx-auto mt-24">
            <button className="text-white bg-blue-700 focus:outline-none font-medium text-sm rounded-lg px-4 py-2.5 text-center mr-5" onClick={() => setShowModal(true)}>
                Test modal
            </button>
        </div>

        <Modal isVisible={showModal}/>
        
        </>
    );
}