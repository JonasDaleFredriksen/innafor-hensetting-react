import { useNavigate } from "react-router-dom";

const ReservationCreation = () => {
  const navigate = useNavigate();

  return (
    <div className="reservationCreationView">
      {
        <form className="reservationForm">
          <h1 style={{ marginBottom: "20px", textAlign: "center" }}>
            Ny bestilling
          </h1>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="endestasjon"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Endestasjon:
            </label>
            <input
              type="text"
              id="endestasjon"
              name="endestasjon"
              className="input"
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="Ankomst"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Ankomst:
            </label>
            <input type="text" id="Ankomst" name="Ankomst" className="input" />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="avreise"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Avreise:
            </label>
            <input type="text" id="avreise" name="avreise" className="input" />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="togid"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Togid:
            </label>
            <input type="text" id="togid" name="togid" className="input" />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="tognummer"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Tognummer:
            </label>
            <input
              type="text"
              id="tognummer"
              name="tognummer"
              className="input"
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="toglengde"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Toglengde:
            </label>
            <input
              type="text"
              id="toglengde"
              name="toglengde"
              className="input"
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Togpleietjenester:
            </label>
            <label>
              <input type="checkbox" name="renholdUtvendig" />
              Renhold utvendig
            </label>
            <label>
              <input type="checkbox" name="renholdInnvedig" />
              Renhold innvendig
            </label>
            <label>
              <input type="checkbox" name="Reparasjon" />
              Reparasjon
            </label>
          </div>
          <button
            type="submit"
            onClick={() => navigate("/reservations/reservationResult")}
            className="submitButton"
          >
            Sjekk tilgjengelighet
          </button>
        </form>
      }
    </div>
  );
};

export default ReservationCreation;
