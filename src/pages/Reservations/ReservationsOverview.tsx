import { useQuery } from "@tanstack/react-query";
import {
  ReservationOverviewDto,
  getReservationsOverview,
  getReservationsOverviewVy,
  getSpaceReservations,
} from "../../api";
import Loader from "../../components/Loader";
import { Link, useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import plus from "./plus.svg"


export default function ReservationsOverview() {
  const { spaceId } = useParams<{ spaceId: string }>();
  const queryKey = spaceId
    ? ["spaces", spaceId, "reservations"]
    : ["reservations"];
  const query = spaceId
    ? () => getSpaceReservations(spaceId)
    : getReservationsOverviewVy;
  const reservationsQuery = useQuery(queryKey, query);
  const navigate = useNavigate();

  if (reservationsQuery.isLoading) return <Loader />;
  if (reservationsQuery.isError)
    return (
      <>
        Noe gikk galt under lasting av reservasjoner{" "}
        {JSON.stringify(reservationsQuery.error)}
      </>
    );

  return (
    <>
      <h1>Reservasjoner</h1>
      <div
        style={{
          display: "flex",
          flexFlow: "wrap",
          gap: "16px",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "300px",
            background: "#3C3CC8",
            height: "150px",
            borderRadius: "16px",
            boxShadow: "0 8px 24px rgba(0 0 0 / 15%)",
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ><Link to="/reservations/create">
          <img  src={plus} alt="fireSpot" style={{
            boxShadow: '1px 1px 1px #3C3CC8',
            borderRadius: '50%',
            }}
            />
          </Link>
        </div>
        {reservationsQuery.data.map(
          (reservation: ReservationOverviewDto, index: number) => {
            return (
              <div
                style={{
                  width: "300px",
                  background: "white",
                  height: "150px",
                  borderRadius: "16px",
                  borderColor: "#3C3CC8",
                  borderStyle: "solid",
                  boxShadow: "0 8px 24px rgba(0 0 0 / 15%)",
                  justifyContent: "center",
                }}
                onClick={() => navigate(`/reservations/${reservation.id}`)}
              >
                <p style={{fontSize: 20}}><strong>{reservation.reserver + (index + 1).toString()}</strong></p>
                <p>
                  {dayjs(reservation.startTime).format("D. MMM")}-
                  {dayjs(reservation.endTime).format("D. MMM")}
                </p>
                <p>Ankomst: {reservation.startTime.toString().slice(11, 16)}</p>
                <p><strong>Lodalen</strong></p>
              </div>
            );
          }
        )}
      </div>
    </>
  );
}
