import { FaCalendarAlt, FaCalendarCheck, FaCamera } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <>
      <section className="bg-emerald-500 flex items-center justify-center h-screen">
        <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
          <h1 className="text-center loading-normal text-white font-medium text-3xl mb-6">
            Bienvenido!
          </h1>
          <div className="w-100 flex flex-row gap-4 p-4">
            <div className="bg-white text-emerald-500 mx-auto p-4 rounded-full">
              <FaCalendarCheck size={30} />
            </div>
            <div className="bg-white text-emerald-500 mx-auto p-4 rounded-full">
              <Link to="/auth/agenda">
                <FaCalendarAlt size={30} />
              </Link>
            </div>
            <div className="bg-white text-emerald-500 mx-auto p-4 rounded-full">
              <FaCamera size={30} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
