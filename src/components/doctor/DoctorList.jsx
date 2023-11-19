import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDoctors } from '../../redux/doctor/doctorSlice';

const DoctorList = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctor.doctors);
  const status = useSelector((state) => state.doctor.status);
  const error = useSelector((state) => state.doctor.error);

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const handleNext = () => {
    if (startIndex + itemsPerPage < doctors.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  const paginatedDoctors = doctors.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex flex-col justify-center items-center flex-wrap">
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
        <>
          <ul className="gap-[2rem] md:flex md:gap-[5rem] md:mt-10">
            {paginatedDoctors.map((doctor) => (
              <li key={doctor.id} className="my-[2rem] md:my-0 transition-transform transform hover:scale-110 duration-500">
                <Link to={`/doctors/${doctor.id}`} className="no-underline">
                  <div className="flex items-center justify-center">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="rounded-full object-cover w-72 h-72"
                    />
                  </div>
                  <div className="gap-0 flex flex-col justify-center items-center md:gap-1">
                    <div className="text-[#1F1717]">
                      <strong>
                        {doctor.name}
                      </strong>
                    </div>
                    <p className="text-gray-300">................................</p>
                    <div className="text-[10px] text-gray-500 font-semi-bold md:text-[18px] md:leading-[30px]">
                      {doctor.specialization}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div>
            <button
              type="button"
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="prev-btn"
            >
              &lt;
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={startIndex + itemsPerPage >= doctors.length}
              className="next-btn"
            >
              &gt;
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default DoctorList;
