import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { createDoctor } from '../../redux/doctor/doctorSlice';
import SideNav from '../navbar/SideNav';

const AddDoctorForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');
  const [fee, setFee] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && specialization && bio && image && fee) {
      await dispatch(createDoctor({
        name,
        specialization,
        bio,
        image,
        fee,
      }));

      toast.success('Doctor added successfully');
    } else {
      toast.error('Please fill all fields before you submit');
    }

    setName('');
    setSpecialization('');
    setBio('');
    setFee('');
    setImage('');
  };

  return (
    <>
      <SideNav />
      <div className="max-w-md mx-auto mt-8 p-8 bg-white shadow-md rounded-md md:pl-[5rem]">
        <h2 className="text-2xl font-bold mb-4 text-center">Add New Doctor</h2>
        <div className="mb-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="specialization"
                placeholder="Specialization"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                required
                className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="fee"
                placeholder="Fee"
                value={fee}
                onChange={(e) => setFee(e.target.value)}
                required
                className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <textarea
                name="bio"
                placeholder="Bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <button
              type="submit"
              className="bg-lime-500 hover:bg-lime-400 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-green-300 w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddDoctorForm;
