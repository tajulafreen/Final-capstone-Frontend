import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { fetchDoctorById, deleteDoctor, selectDoctors, selectStatus, selectError } from '../../redux/doctor/doctorSlice';

const DeleteDoctorPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { doctorId } = useParams();
  const doctor = useSelector(selectDoctors)[0];
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchDoctorById(doctorId));
  }, [dispatch, doctorId]);

  const handleDelete = async () => {
    try {
      await dispatch(deleteDoctor(doctorId));
      history.push('/doctors'); 
    } catch (err) {
      console.error('Error deleting doctor:', err);
    }
  };

  return (
    <div>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        <>
          <h2>Delete Doctor</h2>
          <p>Are you sure you want to delete {doctor.name}?</p>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default DeleteDoctorPage;