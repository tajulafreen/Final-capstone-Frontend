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
    </div>
  )
}

export default AddDoctorForm;
