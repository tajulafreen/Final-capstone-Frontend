import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations, cancelReservation } from '../../redux/reservation/thunk';

const MyReservations = () => {
  const dispatch = useDispatch();
  const userId = JSON.parse(localStorage.getItem('user_id'));
  const reservations = useSelector((state) => state.reservationsList.reservations);

  useEffect(() => {
    if (userId) {
      dispatch(fetchReservations(userId));
    }
  }, [dispatch, userId]);

  const handleCancelReservation = (reservationId) => {
    dispatch(cancelReservation(reservationId));
  };

  return (
    <div className="flex flex-col items-center pt-[1rem] md:pt-[5rem]">
      <h2 className="text-[#1a1a1a]">My Reservations</h2>
      <table className="w-[95%] border-collapse">
        <thead>
          <tr className="bg-lime-500">
            <th className="py-2 px-4 border">Id</th>
            <th className="py-2 px-4 border">Date</th>
            <th className="py-2 px-4 border">City</th>
            <th className="py-2 px-4 border">Doctor</th>
            {/* You can add more headers here if needed */}
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id} className="bg-white hover:bg-gray-100">
              <td className="py-2 px-4 border">{reservation.id}</td>
              <td className="py-2 px-4 border">{reservation.date}</td>
              <td className="py-2 px-4 border">{reservation.city}</td>
              <td className="py-2 px-4 border">{reservation.doctor.name}</td>
              {/* Add more cells based on reservation properties */}
              <td className="py-2 px-4 border">
                <button type="button" className="bg-lime-500 text-white text-[10px] md:text-[14px] py-1 rounded-[10px]" onClick={() => handleCancelReservation(reservation.id)}>
                  Cancel Reservation
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyReservations;
