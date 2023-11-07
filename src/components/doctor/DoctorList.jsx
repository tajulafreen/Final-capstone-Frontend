import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDoctors } from '../../redux/doctor/doctorSlice';

const DoctorList = () => {
  const doctors = useSelector((state) => state.doctor.doctors);
  const status = useSelector((state) => state.doctor.status);
  const error = useSelector((state) => state.doctor.error);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  return (
    <div className="flex flex-col justify-center items-center mt-[7rem]">
      <h1 className="text-[#1F1717]">Doctors List</h1>
      <span className="text-gray-400">Choose a doctor</span>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && (
        <p>
          Error:
          {error}
        </p>
      )}
       {status === 'succeeded' && (
        <ul className="gap-[2rem] md:flex md:gap-[5rem] md:mt-10">
          {doctors.map((doctor) => (
            <li key={doctor.id} className="transition-transform transform hover:scale-110  duration-500"></li>
            <Link to={`/doctors/${doctor.id}`} className="no-underline">
            <img src={doctor.image} alt={doctor.name} className="rounded-[50%] w-72 h-72" />

export default DoctorList
