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
          <div key={doctor.id} className="grid grid-cols-2">
            <img src={doctor.image} alt={doctor.name} className="" />
            <div className="">
              <div>
                <p className="font-bold">{doctor.name}</p>
                <p className="">{doctor.specialization}</p>
              </div>
              <button type="button" className="" onClick={() => { handleDelete(doctor.id); }}>
                Delete
              </button>
            </div>
          </div>
        )))}
    </>
  );
};

export default DeleteDoctor;
