/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// pasamos el url para que pueda variar con las paginas
export const Paginator = ({ url, paginator }) => {
  // obtenemos el paginador de algun hook
  // pero del selector

  return (
    <>
      {/* lo mostramos dependiendo de si tiene o no elementos */}
      {/* validar si el paginator.length = 0 no hacemos nada, si es mayor moostramos el paginador */}
      {paginator?.totalPages == 1 || (
        <ul className="pagination">
          {/* significa que estamos en la primera pagina */}
          {paginator.number == 0 || (
            <li className="page-item">
              {/* le restmos 1 porque es hacia atras, al ser 1, sera 0 */}
              <Link className="page-link" to={`${url}/${paginator.number - 1}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-double-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                  />
                  <path
                    fillRule="evenodd"
                    d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                  />
                </svg>
              </Link>
            </li>
          )}

          {/* que pasa si estamos en la primera pagina, la podemos deshabilitar */}
          <li className={paginator.first ? "page-item disabled" : "page-item"}>
            <Link className="page-link" to={`${url}/0`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-bar-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0M4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5"
                />
              </svg>
            </Link>
          </li>

          <li className={paginator.last ? "page-item disabled" : "page-item"}>
            <Link
              className="page-link"
              to={`${url}/${paginator.totalPages - 1}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-bar-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0M11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5"
                />
              </svg>
            </Link>
          </li>

          {/* podemos avanzar a la siguiente, siempre y cuando exista la pagina */}
          {paginator.number >= paginator.totalPages - 1 || (
            <li className="page-item">
              {/* le restmos 1 porque es hacia atras, al ser 1, sera 0 */}
              <Link className="page-link" to={`${url}/${paginator.number + 1}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-double-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
                  />
                  <path
                    fillRule="evenodd"
                    d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </Link>
            </li>
          )}
        </ul>
      )}
    </>
  );
};
