import { BsXLg } from "react-icons/bs";

export const Modal = ({isVisible}) => {
    if(!isVisible) return null;
    return (
        <>
        
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="w-[600px] flex flex-col place-self-end">

                <button className="text-white text-xl"><BsXLg /></button>

                <div className="bg-white p-2 rounded">
                    Modal
                </div>

            </div>
        </div>
        
        </>
    );
}