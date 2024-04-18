import about2 from "../assets/about-2.svg";
import about from "../assets/about.svg";

import { motion } from "framer-motion";
import { fadeIn } from "../shared/variants";

export const Nosotros = () => {
  return (
    <>
      <div className="md:px-14 p-4 max-w-s mx-auto space-y-10" id="about">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="md:w-1/2"
          >
            <img src={about} alt="" />
          </motion.div>

          {/* contenido del about */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="md:w-2/5"
          >
            <h2 className="md:text-5xl text-3xl font-bold text-emerald-400 mb-5 leading-normal">
              Conoce algunos de los espacios que{" "}
              <span className="text-emerald-900">tenemos para ti</span>
            </h2>
            <p className="text-tartiary text-lg mb-7">
              Podrás consultar los espacios que tenemos para ti a través del
              siguiente botón.
            </p>
            <button className="btnPrimary">Ver Auditorios</button>
          </motion.div>
        </div>
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="md:w-2/5"
          >
            <img src={about2} alt="" />
          </motion.div>

          {/* contenido del about */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="md:w-2/5"
          >
            <h2 className="md:text-5xl text-3xl font-bold text-emerald-400 mb-5 leading-normal">
              Si ya cuentas con alguna reservacion{" "}
              <span className="text-emerald-900">consulta tu status</span>
            </h2>
            <p className="text-tartiary text-lg mb-7">
              Puedes consultar el status de tu reservacion por medio del
              siguiente botón.
            </p>
            <button className="btnPrimary">Ir a la Agenda</button>
          </motion.div>
        </div>
      </div>
    </>
  );
};
