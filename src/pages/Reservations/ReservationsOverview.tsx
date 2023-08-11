import { useQuery } from "@tanstack/react-query";
import {
  ReservationOverviewDto,
  getReservationsOverviewVy,
  getSpaceReservations,
} from "../../api";
import Loader from "../../components/Loader";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import "./Reservation.css";
import plus from "/plus.svg";

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
    <div className="reservationOverview">
      <div
        onClick={() => {
          navigate("/reservations/create");
        }}
        className="box addBox"
      >
        <img className="plusIcon" src={plus} alt="fireSpot" />
      </div>
      {reservationsQuery.data.map(
        (reservation: ReservationOverviewDto, index: number) => {
          return (
            <div
              key={index}
              className="box detailBox"
              onClick={() => navigate(`/reservations/${reservation.id}`)}
            >
              <div>
                <p className="reserverText">
                  <strong>
                    {reservation.reserver.toUpperCase() +
                      (index + 1).toString()}
                  </strong>
                </p>
                <div className="timeTexts">
                  <p>
                    {dayjs(reservation.startTime).format("D. MMM")}-
                    {dayjs(reservation.endTime).format("D. MMM")}
                  </p>
                  <p>
                    Ankomst: {reservation.startTime.toString().slice(11, 16)}
                  </p>
                </div>
                <p className="locationText">Lodalen</p>
              </div>
              <div></div>
            </div>
          );
        }
      )}
    </div>
  );
}
