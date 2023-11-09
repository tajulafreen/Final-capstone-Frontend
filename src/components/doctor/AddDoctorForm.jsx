import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDoctor, selectStatus, selectError } from '../../redux/doctor/doctorSlice';

const AddDoctorForm = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  const [formData, setFormData] = useState({
    name: '',
    specialization: '',
    image: '',
    fee: '',
    bio: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(createDoctor(formData));
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Doctor</h2>
      {status === 'failed' && <div className="text-red-500 mb-4 text-center">{error}</div>}
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="specialization"
            placeholder="Specialization"
            value={formData.specialization}
            onChange={handleInputChange}
            required
            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="fee"
            placeholder="Fee"
            value={formData.fee}
            onChange={handleInputChange}
            required
            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <textarea
            name="bio"
            placeholder="Bio"
            value={formData.bio}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-green-500 hover:bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
        >
          {status === 'loading' ? 'Adding...' : 'Add Doctor'}
        </button>
      </form>
    </div>
  );
};

export default AddDoctorForm;