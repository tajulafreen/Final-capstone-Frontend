import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctors, deleteDoctor } from '../../redux/doctor/doctorSlice';

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
      <div className="text-center">
        <h1 className="font-bold text-[#1a1a1a] mb-5">Delete Doctor</h1>
      </div>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && (
        <p>
          Error:
          {error}
        </p>
      )}
      {doctors.length === 0 ? (<h1 className="text-xl mt-20 text-slate-500"> No doctors Added!!</h1>)
        : (doctors.map((doctor) => (
          <div key={doctor.id} className="grid grid-cols-2 pt-10 px-9">
            <img src={doctor.image} alt={doctor.name} className="rounded-[50%] object-cover w-72 h-72" />
            <div className="pt-10">
              <div>
                <p className="font-bold text-[20px]">{doctor.name}</p>
                <p className="text-[10px] text-gray-500 font-semi-bold md:text-[18px] md:leading-[30px]">{doctor.specialization}</p>
              </div>
              <button type="button" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" onClick={() => { handleDelete(doctor.id); }}>
                Delete
              </button>
            </div>
          </div>
        )))}
    </>
  );
};

export default DeleteDoctor;
