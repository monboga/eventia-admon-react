import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";

// se agregan los estilos por defecto del calendario
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Link, useNavigate } from "react-router-dom";

export const Agenda = () => {
  const localizer = dayjsLocalizer(dayjs);
  //   si se requiere de crear un evento hacemos lo siguiente

  //   eventos es un objeto con propiedades
  // start, end, title
  const events = [
    {
      start: dayjs("2024-05-06T13:30:00").toDate(),
      end: dayjs("2024-05-06T14:30:00").toDate(),
      title: "Evento test",
    },
  ];

  return (
    <>
      <div className="md:px-14 p-4 max-w-screen-2xl mx-auto mt-24">
        <Link to="/auth/menu">Volver al menu</Link>
        <h1>Aqui es la agenda</h1>

        {/* importante establecer altura y ancho del calendario */}
        {/* ademas de agregar una prop de localizer */}
        <Calendar
          localizer={localizer}
          style={{
            height: "95vh",
            width: "95wh",
          }}
          events={events}
          views={["month", "week", "day"]} //podemos escojer un valor por defecto
        />
      </div>
    </>
  );
};
