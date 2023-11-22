import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router';
import { createReservation } from '../../redux/reservation/thunk';
import { fetchDoctors } from '../../redux/doctor/doctorSlice';
import { selectStatus } from '../../redux/user/userSlice';
import SideNav from '../navbar/SideNav';

const NewReservation = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctor.doctors);
  const location = useLocation();
  const selectedDoctor = location.state;
  const userStatus = useSelector(selectStatus);

  const userId = JSON.parse(localStorage.getItem('user_id'));

  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [doctorId, setDoctorId] = useState(selectedDoctor ? selectedDoctor.id : '');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      toast.error('User ID is not available. Please login and try again.');
      return;
    }

    setIsLoading(true);

    try {
      const reservationData = {
        user_id: userId,
        doctor_id: doctorId,
        city,
        date,
      };

      await dispatch(createReservation({ data: reservationData }));
      setDoctorId('');
      setCity('');
      setDate('');
      toast.success('Doctor added successfully');
    } catch (err) {
      setError('Error creating a reservation. Please try again later.');
      toast.error('Please fill all fields before you submit');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (userStatus === 'idle' && userId) {
      dispatch(fetchDoctors());
    }
  }, [dispatch, userStatus, userId]);

  return (
    <>
      <SideNav />
      <div className="bg-lime-400 px-10  h-screen pt-[1rem]  md:pl-[14rem] md:pt-[8rem]">

        {/* Scheduling Information */}
        <div className="text-center text-white md:mx-auto p-1 md:pl-24 md:p-8">
          <h2 className="font-bold">Reservation Schedule Information</h2>
          <p className="text-center">
            Our doctors are available from Monday to Friday,
            9:00 AM to 5:00 PM. If you have any questions
            <br />
            or need assistance,feel free to contact our support team at support@example.com.
          </p>
        </div>
        <div className="mx-auto max-w-screen-md">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:w-[80%] justify-center items-center md:pl-[6rem]">
            {/* Date Input */}
            <div className="flex flex-col w-full  md:ml-6">
              <p className="text-lg font-medium text-white">
                Date
              </p>
              <input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="p-2 border rounded reserve-input"
                required
              />
            </div>

            {/* City Input */}
            <div className="flex flex-col w-full  md:ml-9">
              <p className="text-lg font-medium text-white">
                City
              </p>
              <input
                id="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="p-2 border rounded reserve-input"
                required
              />
            </div>

            {/* Doctor Selection */}
            <div className="flex flex-col w-full  md:ml-9">
              <p className="text-md font-medium text-white">
                Choose Doctor
              </p>
              <select
                id="doctor"
                onChange={(e) => setDoctorId(e.target.value)}
                value={doctorId}
                className="p-2 border rounded reserve-select"
                required
              >
                <option value="">Select Doctor</option>
                {doctors.map((doctor) => (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.name}
                  </option>
                ))}
              </select>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className={`reserve-btn bg-gray-200 px-3 w-40 h-11 rounded mt-5 text-lime-500 font-[400] hover:bg-lime-500 hover:text-white ${
                    isLoading ? 'cursor-not-allowed' : ''
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Reserving...' : 'Reserve'}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500">{error}</p>}

            {/* Submit Button */}
          </form>
        </div>
      </div>
    </>
  );
};

export default NewReservation;
