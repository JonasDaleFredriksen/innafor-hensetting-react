import React, { useState, useEffect } from "react";
import { createReservation } from "../../api";
import { useMutation } from "@tanstack/react-query";

const PendingSuccessFailedComponent = () => {
  const reservationCreationMutation = useMutation(createReservation);

  const [status, setStatus] = useState("pending");
  const [message, setMessage] = useState("");

  const reservation = {
    spaceId: 729,
    reserver: "Vy vest",
    startTime: new Date(),
    endTime: new Date(),
    notes: "",
  };

  useEffect(() => {
    // Show the "pending" state for 5 seconds
    const timeoutId = setTimeout(() => {
      // After 3 seconds, determine success or failure with a 60% probability
      const isSuccess = Math.random() < 0.6;

      if (isSuccess) {
        setStatus("success");
        setMessage("Gratulerer! Du har fått tildelt plass");
        reservationCreationMutation.mutate(reservation);
      } else {
        setStatus("failed");
        setMessage("Det finnes ingen ledige plasser");
      }
    }, 3000);

    // Clear the timeout if the component is unmounted before the timeout is completed
    return () => clearTimeout(timeoutId);
  }, []);

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontSize: "32px",
    color:
      status === "success" ? "green" : status === "failed" ? "red" : "black",
  };

  return (
    <div style={style}>
      {status === "pending" ? "Våre algoritmer jobber..." : message}
    </div>
  );
};

export default PendingSuccessFailedComponent;
