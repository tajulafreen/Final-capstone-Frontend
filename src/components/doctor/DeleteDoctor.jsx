import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import {
  fetchDoctorById,
  deleteDoctor,
  selectDoctors,
  selectStatus,
  selectError,
} from '../../redux/doctor/doctorSlice';

const DeleteDoctorPage = () => {
  const dispatch = useDispatch();
  const { doctorId } = useParams();
  const doctor = useSelector(selectDoctors)[0];
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchDoctorById(doctorId));
  }, [dispatch, doctorId]);

  const handleDelete = async () => {
    try {
      await dispatch(deleteDoctor(doctorId));
      navigate('/doctors');
    } catch (err) {
      console.error('Error deleting doctor:', err);
    }
  };

  return (
    <div className="container mx-auto my-4 p-4 bg-white shadow-lg rounded-lg">
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && (
        <p className="text-red-500">
          Error:
          {error}
        </p>
      )}
      {status === 'succeeded' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Delete Doctor</h2>
          <p>
            Are you sure you want to delete
            {doctor.name}
            ?
          </p>
          <button
            type="button"
            className="bg-red-500 text-white px-4 py-2 rounded mt-4 hover:bg-red-600"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default DeleteDoctorPage;
