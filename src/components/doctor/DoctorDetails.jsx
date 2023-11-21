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
      <div className="justify-center">
        <h1 className="text-center mb-3 md:pl-[12rem] text-30px font-semi-bold">Doctor Details</h1>
        <div className="flex md:flex-row flex-col md:pr-[5rem] md:pl-[18rem] md:gap-16 items-center ">
          <div>
            <img src={selectedDoctor.image} alt={selectedDoctor.name} className="rounded-lg shadow-md object-cover w-72 h-72 md:w-96 md:h-96" />
          </div>
          <div className="max-[768px]:w-72 ">
            <div className="flex flex-col gap-2 md:gap-3.5 w-full mt-2 md:mt-5">
              <h2 className="text-[20px] md:text-[30px] font-semibold">
                {selectedDoctor.name}
              </h2>
              <p className="text-[16px] md:text-[20px] font-[400]">
                <strong>Specialization:</strong>
                {' '}
                <span>{selectedDoctor.specialization}</span>
              </p>
              <p className="text-[16px] md:text-[18px] w-44 font-[400] bg-gray-300 px-[.5rem]  md:px-[1rem] md:py-1 md:w-52">
                Fee:
                {' '}
                <span className="ml-[.5rem] md:ml-[4rem]">{selectedDoctor.fee}</span>
              </p>
              <p className="text-[16px] md:text-[20px] font-[400]">
                <strong>Bio:</strong>
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
        </div>
      </div>
    </>
  );
};

export default DoctorDetails;
