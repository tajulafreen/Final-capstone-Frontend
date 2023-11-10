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
