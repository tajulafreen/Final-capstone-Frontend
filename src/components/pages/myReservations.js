import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations, cancelReservation } from '../../redux/reservation/thunk';

const MyReservations = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.user?.id);
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
    
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id} className="bg-white hover:bg-gray-100">
              <td className="py-2 px-4 border">{reservation.id}</td>
              <td className="py-2 px-4 border">{reservation.date}</td>
              <td className="py-2 px-4 border">{reservation.city}</td>
              <td className="py-2 px-4 border">{reservation.doctor.name}</td>
              {/* Add more cells based on reservation properties */}
              <td className="py-2 px-4 border">
                <button type="button" onClick={() => handleCancelReservation(reservation.id)}>
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
