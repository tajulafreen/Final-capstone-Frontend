import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../../redux/reservation/thunk';
import SideNav from '../navbar/SideNav';

const MyReservations = () => {
  const dispatch = useDispatch();
  const userId = JSON.parse(localStorage.getItem('user_id'));
  const reservations = useSelector((state) => state.reservationsList.reservations);

  useEffect(() => {
    if (userId) {
      dispatch(fetchReservations(userId));
    }
  }, [dispatch, userId]);

  return (
    <>
      <SideNav />
      <div className="flex flex-col items-center pt-[1rem] md:pt-[5rem] md:pl-[12rem] px-10">
        <h2 className="text-[#1a1a1a]">My Reservations</h2>
        <table className="md:w-[80%] border-collapse mt-7 ">
          <thead>
            <tr className="bg-lime-500">
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyReservations;
