import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctors, deleteDoctor } from '../../redux/doctor/doctorSlice';
import SideNav from '../navbar/SideNav';

const DeleteDoctor = () => {
  const { doctors, status, error } = useSelector((store) => store.doctor);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteDoctor(id));
  };

  return (
    <>
      <SideNav />
      <div className="text-center">
        <h2 className="m-7 font-bold text-25px font-semi-bold md:mb-7 text-center md:pl-[9rem]">Delete Doctor</h2>

        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && (
        <p>
          Error:
          {error}
        </p>
        )}

        {doctors.length === 0 && status === 'succeeded' ? (
          <h1 className="text-xl mt-20 text-slate-500">No doctors Added!!</h1>
        ) : (
          doctors.map((doctor) => (
            <div key={doctor.id} className="flex flex-col justify-center items-center py-[.8rem] gap-[1rem]  md:flex-row md:gap-[8rem] md:pl-[15rem] md:py-[1.2rem]">
              <img src={doctor.image} alt={doctor.name} className="rounded-full object-cover w-72 h-72 max-[967px]:w-62" />
              <div>
                <div>
                  <h2 className="text-[20px] md:text-[30px] font-semibold">{doctor.name}</h2>
                  <p className=" text-gray-500 text-[16px] md:text-[20px] font-[400] md:leading-[30px] md:mb-10">{doctor.specialization}</p>
                </div>
                <button
                  type="button"
                  className="bg-lime-500 hover:bg-red-500 text-white px-3 md:px-10 py-2 rounded-md transition-transform transform hover:scale-105 duration-500"
                  onClick={() => { handleDelete(doctor.id); }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default DeleteDoctor;
