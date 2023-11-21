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
        <h1 className="mb-2 font-bold text-[14px] md:text-[25px] text-[#1a1a1a] md:mb-5">Delete Doctor</h1>

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
            <div key={doctor.id} className="flex flex-col justify-center items-center py-[.8rem] gap-[1rem] md:grid md:grid-cols-2 md:px-[18rem] md:py-[1.2rem]">
              <img src={doctor.image} alt={doctor.name} className="object-cover" />
              <div>
                <div>
                  <p className="font-bold text-[20px]">{doctor.name}</p>
                  <p className="text-[10px] text-gray-500 font-semi-bold md:text-[18px] md:leading-[30px] md:mb-10">{doctor.specialization}</p>
                </div>
                <button
                  type="button"
                  className="bg-lime-500 hover:bg-gray-400 text-white px-3 md:px-10 py-2 rounded-md transition-transform transform hover:scale-105 duration-500"
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
