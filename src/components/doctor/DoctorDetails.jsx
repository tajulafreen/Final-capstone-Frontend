import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  fetchDoctorById,
  selectDoctors,
  selectStatus,
  selectError,
} from '../../redux/doctor/doctorSlice';
