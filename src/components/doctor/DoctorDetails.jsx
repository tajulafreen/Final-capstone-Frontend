import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  fetchDoctorById,
  selectDoctors,
  selectStatus,
  selectError,
} from '../../redux/doctor/doctorSlice';
import SideNav from '../navbar/SideNav';

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

  const selectedDoctor = doctors[0];

  return (
    <>
      <SideNav />
      <div className="grid p-[.2rem] md:grid-cols-2 md:px-[3rem] md:py-[6rem]">
        <div className="">
          <img src={selectedDoctor.image} alt={selectedDoctor.name} className="object-cover w-[95%]" />
        </div>

        <div className="flex flex-col gap-2 md:gap-3.5 w-full mt-2 md:mt-5">
          <h2 className="text-[10px] md:text-[16px] font-semibold">
            {selectedDoctor.name}
          </h2>
          <p className="text-[10px] md:text-[16px] font-[400]">
            Specialization:
            {' '}
            <span>{selectedDoctor.specialization}</span>
          </p>
          <p className="text-[10px] md:text-[16px] font-[400] bg-gray-300 px-[.5rem] py-1 md:px-[1rem] md:py-1">
            Fee:
            {' '}
            <span className="ml-[1rem] md:ml-[4rem]">{selectedDoctor.fee}</span>
          </p>
          <p className="text-[10px] md:text-[16px] font-[400]">
            Bio:
            {' '}
            <span>{selectedDoctor.bio}</span>
          </p>
          <div>
            <button
              className="bg-lime-500 hover:bg-green-500 font-[400] md:font-semibold px-[2.5rem] py-[.4rem] md:px-[5rem] md:py-2 text-white rounded-[10px] transition-transform transform hover:scale-110 hover:text-[400] duration-500"
              type="button"
              onClick={() => navigate('/New-reservation')}
            >
              Reserve
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDetails;
