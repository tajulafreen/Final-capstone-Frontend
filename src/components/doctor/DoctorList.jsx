import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDoctors } from '../../redux/doctor/doctorSlice';
import SideNav from '../navbar/SideNav';

const DoctorList = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctor.doctors);
  const status = useSelector((state) => state.doctor.status);
  const error = useSelector((state) => state.doctor.error);

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPageSmallScreen = 1;
  const itemsPerPageMediumScreen = 2;

  const getItemsPerPage = () => (window.innerWidth >= 768
    ? itemsPerPageMediumScreen : itemsPerPageSmallScreen);

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - getItemsPerPage());
    }
  };

  const handleNext = () => {
    if (startIndex + getItemsPerPage() < doctors.length) {
      setStartIndex(startIndex + getItemsPerPage());
    }
  };

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  const paginatedDoctors = doctors.slice(startIndex, startIndex + getItemsPerPage());

  window.addEventListener('resize', () => {
    setStartIndex(0); // Reset startIndex on window resize to prevent issues with pagination
  });

  return (
    <>
      <SideNav />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[#1F1717]">Doctors List</h1>
        <span className="text-gray-400">Choose a doctor</span>
        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && (
          <p>
            Error:
            {error}
          </p>
        )}
        {(status === 'succeeded' && doctors.length > 0) ? (
          <>
            <ul className="gap-[2rem] md:flex md:gap-[5rem] md:mt-10">
              <div className="flex md:flex-row gap-11">
                <div className="flex align-items-center">
                  <button
                    type="button"
                    onClick={handlePrev}
                    disabled={startIndex === 0}
                    className="prev-btn bg-lime-500 text-white p-1.5 md:p-3 disabled:bg-lime-200 border rounded-md"
                  >
                    &lt;
                  </button>
                </div>
                {paginatedDoctors.map((doctor) => (
                  <li
                    key={doctor.id}
                    className={`my-[2rem] md:my-0 md:transition-transform md:transform md:hover:scale-110 md:duration-500 ${
                      window.innerWidth >= 768 ? 'md:w-1/3' : 'w-full'
                    }`}
                  >
                    <Link to={`/doctors/${doctor.id}`} className="no-underline">
                      <div className="flex items-center justify-center">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="rounded-full object-cover w-72 h-72"
                        />
                      </div>
                      <div className="gap-0 flex flex-col justify-center items-center md:gap-1 mt-7">
                        <div className="text-[#1F1717]">
                          <h2 className="text-[25px]">
                            {doctor.name}
                          </h2>
                        </div>
                        <div className="text-[10px] text-gray-700 font-semi-bold md:text-[18px] md:leading-[30px]">
                          {doctor.specialization}
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
                <div className="d-flex align-items-center">
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={startIndex + getItemsPerPage() >= doctors.length}
                    className="next-btn bg-lime-500 text-white p-1.5 md:p-3 disabled:bg-lime-200 border rounded-md"
                  >
                    &gt;
                  </button>
                </div>
              </div>
            </ul>
          </>
        ) : (
          (status === 'succeeded' && doctors.length === 0) && (
            <p className="text-xl mt-5 text-slate-500">No Doctor Available</p>
          )
        )}
      </div>
    </>
  );
};

export default DoctorList;
