import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
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
        Loading...
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
        <div>
          Please try again later or contact support.
        </div>
      </div>
    );
  }

  if (!doctors.length) {
    return (
      <div>
        <div>
          Doctor not found
        </div>
        <div>
          <Link to="/doctors">Back to Doctors</Link>
        </div>
      </div>
    );
  }
