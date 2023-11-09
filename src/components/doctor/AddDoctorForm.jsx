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
  
  return (
    <div>
      
    </div>
  )
}

export default AddDoctorForm;
