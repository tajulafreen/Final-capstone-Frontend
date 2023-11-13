import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../../redux/reservation/thunk';
import { selectUser } from '../../redux/user/userSlice';

const MyReservations = () => {
  const dispatch = useDispatch();
  const selectUser = null;

  if (selectUser) {
    userId = selectUser;
  }

  // Get reservations data from Redux store
  const { reservations } = useSelector((store) => store.reservationsList);

  // Fetch reservations when the component mounts
  useEffect(() => {
    dispatch(fetchReservations(userId));
  }, [dispatch, userId]);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 my-reserve-head">My Reservations</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">Id</th>
            <th className="py-2 px-4 border">Date</th>
            <th className="py-2 px-4 border">City</th>
            <th className="py-2 px-4 border">Doctor</th>
            {/* You can add more headers here if needed */}
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyReservations;
