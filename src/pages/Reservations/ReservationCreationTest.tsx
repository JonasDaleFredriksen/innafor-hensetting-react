import React from 'react';
import { useState } from "react";
import ReservationResult from './ReservationResult';
import { useNavigate } from 'react-router-dom';

const ReservationCreationTest = () => {

    const navigate =  useNavigate()

    const [reservation, setReservation] = useState(false);

    const handleButtonClick = (e) => {
        e.preventDefault()
        setReservation(true)
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f0f0f0' }}>
            { !reservation &&
            <form style={{ width: '400px', background: '#fff', padding: '30px 50px 30px 30px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
            <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>Ny bestilling</h1>
                <div style={{ marginBottom: '15px' }}>
                <label htmlFor="endestasjon" style={{ display: 'block', marginBottom: '5px' }}>Endestasjon:</label>
                <input type="text" id="endestasjon" name="endestasjon" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                <label htmlFor="Ankomst" style={{ display: 'block', marginBottom: '5px' }}>Ankomst:</label>
                <input type="text" id="Ankomst" name="Ankomst" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                <label htmlFor="avreise" style={{ display: 'block', marginBottom: '5px' }}>Avreise:</label>
                <input type="text" id="avreise" name="avreise" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                <label htmlFor="togid" style={{ display: 'block', marginBottom: '5px' }}>Togid:</label>
                <input type="text" id="togid" name="togid" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                <label htmlFor="tognummer" style={{ display: 'block', marginBottom: '5px' }}>Tognummer</label>
                <input type="text" id="tognummer" name="tognummer" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                <label htmlFor="toglengde" style={{ display: 'block', marginBottom: '5px' }}>Toglengde:</label>
                <input type="text" id="toglengde" name="toglengde" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                </div>



                <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Togpleietjenester:</label>
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
                <button type="submit" onClick={() => navigate("/reservations/reservationResult")} style={{ padding: '10px 20px', borderRadius: '5px', background: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Bestill</button>
            </form>
            }
            {reservation && <ReservationResult />}
        </div>
    );
};

export default ReservationCreationTest;

