/* eslint-disable react/jsx-no-undef */
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import OtpInput from "otp-input-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import { FaCalendarAlt, FaCalendarCheck, FaCamera } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../config/firebase.config";
import { Menu } from "../components/Menu";

export const OtpPage = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");

  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);

  const [user, setUser] = useState(null);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        }
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;
    const formatPh = "+" + ph;
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log(formatPh);
        setLoading(false);
        setShowOTP(true);
        toast.success("Codigo enviado con exito!");
        // ...
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPverify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }
  return (
    <>
      <section className="bg-emerald-500 flex items-center justify-center h-screen">
        <div>
          <Toaster toastOptions={{ duration: 4000 }} />
          <div id="recaptcha-container"></div>
          {user ? (
            // <h2 className="text-center text-white font-medium text-2xl">
            //   Has iniciado sesion exitosamente
            // </h2>
            <Menu />
          ) : (
            <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
              <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
                ¿Deseas <br />
                consultar tu agenda?{" "}
              </h1>

              {showOTP ? (
                <>
                  <div className="bg-white text-emerald-500 mx-auto p-4 rounded-full">
                    <BsFillShieldLockFill size={30} />
                  </div>
                  <label
                    htmlFor="otp"
                    className="font-bold text-xl text-white text-center"
                  >
                    Digita tu OTP
                  </label>
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    autoFocus
                    className="opt-container"
                  ></OtpInput>
                  <button
                    onClick={onOTPverify}
                    className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                  >
                    {loading && (
                      <CgSpinner size={20} className="mt-1 animate-spin" />
                    )}
                    <span>Veriicar OTP</span>
                  </button>
                </>
              ) : (
                <>
                  <div className="bg-white text-emerald-500 mx-auto p-4 rounded-full">
                    <BsTelephoneFill size={30} />
                  </div>
                  <label
                    htmlFor=""
                    className="font-bold text-xl text-white text-center"
                  >
                    Verifica tu numero de telefono
                  </label>
                  <PhoneInput country={"mx"} value={ph} onChange={setPh} />

                  <button
                    onClick={onSignup}
                    className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                  >
                    {loading && (
                      <CgSpinner size={20} className="mt-1 animate-spin" />
                    )}
                    <span>Enviar codigo via SMS</span>
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default OtpPage;
