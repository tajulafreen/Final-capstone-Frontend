import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import {
  fetchDoctorById,
  selectDoctors,
  selectStatus,
  selectError,
} from '../../redux/doctor/doctorSlice';

const DoctorDetails = () => {
  const { doctorId } = useParams();
  const dispatch = useDispatch();
  const doctors = useSelector(selectDoctors);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchDoctorById(doctorId));
  }, [dispatch, doctorId]);

  if (status === 'loading') {
    return (
      <div>
        loading...
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div>
        <div>
          Error:
          {' '}
          {error}
        </div>
      </div>
    );
  }

  if (!doctors.length) {
    return (
      <div>
        <div>Doctor not found</div>
      </div>
    );
  }

  const doctor = doctors[0];

  return (
    <div className="flex justify-around items-center p-8">
      <img src={doctor.image} alt={doctor.name} className="w-1/2" />
      <div className="w-3/5 p-8">
        <h2 className="text-2xl font-bold">
          {doctor.name}
        </h2>
        <p>
          Specialization:
          {' '}
          <span>{doctor.specialization}</span>
        </p>
        <p>
          Fee:
          {' '}
          <span>{doctor.fee}</span>
        </p>
        <p>
          Bio:
          {' '}
          <span>{doctor.bio}</span>
        </p>
        <div>
          <button
            type="button"
            className="bg-green-500 text-white w-32 h-12 rounded-full mt-4"
            onClick={() => navigate('/reserve')}
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
