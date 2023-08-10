import { useMutation } from "@tanstack/react-query";
import { ReservationCreationDto, createReservation } from "../../api";
import { useState } from "react";

export default function ReservationCreation() {
  const reservationCreationMutation = useMutation(createReservation);
  const [reservation, setReservation] = useState<ReservationCreationDto>({
    spaceId: 0,
    reserver: "",
    startTime: "",
    endTime: "",
    notes: "",
  });
  if (reservationCreationMutation.isLoading) return <>Oppretter reservasjon</>;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f0f0f0' }}>
      <form style={{ width: '300px', background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        <h1>Ny Bestilling?</h1>
        {reservationCreationMutation.isError && (
          <>
            <p>Noe gikk galt</p>
            <code>{JSON.stringify(reservationCreationMutation.error)}</code>
          </>
        )}
        {reservationCreationMutation.isSuccess && (
          <>
            <p>Noe gikk riktig</p>
            <code>{JSON.stringify(reservationCreationMutation.data)}</code>
          </>
        )}
        <label style={{ display: 'block', marginBottom: '15px' }}>
          Hensettingsplass
          <input
            type="number"
            value={reservation.spaceId}
            onChange={({ target }) =>
              setReservation((prevValue) => ({
                ...prevValue,
                spaceId: target.valueAsNumber,
              }))
            }
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginTop: '5px' }}
          />
        </label>
        {/* Similar styling for other labels */}
        {/* ... */}
        <button
          type="button"
          onClick={() => {
            reservationCreationMutation.mutate(reservation);
          }}
          style={{ padding: '10px 20px', borderRadius: '5px', background: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}
        >
          Reserver
        </button>
      </form>
    </div>
  );
}

