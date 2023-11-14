import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { createReservation } from '../../redux/reservation/thunk';
import { fetchDoctors } from '../../redux/doctor/doctorSlice';
import { selectUser, selectStatus } from '../../redux/user/userSlice';

const NewReservation = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctor.doctors);
  const location = useLocation();
  const selectedDoctor = location.state;
  const user = useSelector(selectUser);
  const userStatus = useSelector(selectStatus);

  const userId = user?.status?.data?.id;

  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [doctorId, setDoctorId] = useState(selectedDoctor ? selectedDoctor.id : '');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      console.error('User ID is not available. Please login and try again.');
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
    } catch (err) {
      setError('Error creating a reservation. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (userStatus === 'idle' && userId) {
      dispatch(fetchDoctors());
    }
  }, [dispatch, userStatus, userId]);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen custom-styles"
    >

      {/* Scheduling Information */}
      <div className="container mx-auto max-w-screen-md p-8 reserve-div1">

        <h2 className="text-2xl font-bold mt-8 mb-4">Reservation Schedule Information</h2>
        <hr className="reserve-hr" />
        <p className="text-gray-700">
          Our doctors are available from Monday to Friday,
          9:00 AM to 5:00 PM. If you have any questions or need assistance,
          feel free to contact our support team at support@example.com.
        </p>
      </div>
      <div className="container mx-auto max-w-screen-md p-8 reserve-div2">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 w-full">
          {/* Date Input */}
          <div className="flex flex-col w-full md:w-1/2">
            <p className="text-lg font-medium text-gray-600" style={{ color: 'white' }}>
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
          <div className="flex flex-col w-full md:w-1/2">
            <p className="text-lg font-medium text-gray-600" style={{ color: 'white' }}>
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
          <div className="flex flex-col w-full md:w-1/2">
            <p className="text-md font-medium text-gray-600" style={{ color: 'white' }}>
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
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className={`reserve-btn ${
              isLoading ? 'cursor-not-allowed' : ''
            }`}
            disabled={isLoading}
          >
            {isLoading ? 'Reserving...' : 'Reserve'}
          </button>
        </form>
      </div>
    </div>

  );
};

export default NewReservation;
