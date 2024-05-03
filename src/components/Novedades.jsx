import featured from "../assets/features.svg";

import { motion } from "framer-motion";
import { fadeIn } from "../shared/variants";

export const Novedades = () => {
  return (
    <>
      <div
        className="my-28 md:px-14 px-4 max-w-screen-2xl mx-auto"
        id="feature"
      >
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lg:w-1/4"
          >
            <h3 className="text-3xl text-emerald-400 font-bold lg:w-1/2 mb-3">
              ¿Por qué utilizar eventia?
            </h3>
            <p className="text-base text-tartiary">
              Gracias a eventia puedes optimizar tus tiempos, es fácil de
              utilizar y además es más accesible a la hora de realizar tus
              reservaciones, pordrás consultarlas al momento de ya contar con
              alguna reservación.
            </p>
          </motion.div>
          {/* cards de las features */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="w-full lg:w-3/4"
          >
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
              <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                <div>
                  <img src={featured} alt="" className="w-[230px] h-[149px]" />
                  <h5 className="text-2xl font-semibold text-emerald-400 px-5 text-center mt-5">
                    Optimiza tus tiempos
                  </h5>
                </div>
              </div>
              <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16">
                <div>
                  <img src={featured} alt="" className="w-[230px] h-[149px]" />
                  <h5 className="text-2xl font-semibold text-emerald-400 px-5 text-center mt-5">
                    Fácil de utilizar
                  </h5>
                </div>
              </div>{" "}
              <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                <div>
                  <img src={featured} alt="" className="w-[230px] h-[149px]" />
                  <h5 className="text-2xl font-semibold text-emerald-400 px-5 text-center mt-5">
                    Administra tus reservas
                  </h5>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
