import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge, setDob } from '../store/formSlice';
import { useNavigate } from 'react-router-dom';

export default function PersonalDetails() {
  const { name, age, dob } = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddName = (e) => {
    dispatch(setName(e.target.value));
  };

  const handleAddAge = (e) => {
    dispatch(setAge(e.target.value));
  };

  const handleAddDob = (e) => {
    dispatch(setDob(e.target.value));
  };

  const handleNext = () => {
    dispatch(setName(name));
    dispatch(setAge(age));
    dispatch(setDob(dob));
    navigate('/contact-info');
  };

  return (
    <div>
      <label>Name:</label>
      <input type="text" onChange={handleAddName} value={name} />
      <label>Age:</label>
      <input type="number" onChange={handleAddAge} value={age} />
      <label>Date of Birth:</label>
      <input type="date" onChange={handleAddDob} value={dob} />
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
