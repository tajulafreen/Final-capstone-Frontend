import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDoctors, deleteDoctor } from '../../redux/doctor/doctorSlice';

const DoctorList = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctor.doctors);
  const status = useSelector((state) => state.doctor.status);
  const error = useSelector((state) => state.doctor.error);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  const handleDeleteDoctor = (doctorId) => {
    dispatch(deleteDoctor(doctorId));
  };

  return (
    <div>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && (
        <p>
          Error:
          {error}
        </p>
      )}

      {status === 'succeeded' && (
        <ul>
          {doctors.map((doctor) => (
            <li key={doctor.id}>
              <Link to={`/doctors/${doctor.id}`}>
                <strong>{doctor.name}</strong>
                {' '}
                -
                {' '}
                {doctor.specialization}
              </Link>
              <button type="button" onClick={() => handleDeleteDoctor(doctor.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DoctorList;
