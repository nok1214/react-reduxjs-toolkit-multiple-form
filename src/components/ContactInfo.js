import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPhone, setEmail } from '../store/formSlice';
import { useNavigate } from 'react-router-dom';

export default function ContactInfo() {
  const { phone, email } = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePhoneNumber = (e) => {
    dispatch(setPhone(e.target.value));
  };

  const handleEmail = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const handleNext = () => {
    dispatch(setPhone(phone));
    dispatch(setEmail(email));
    navigate('/address');
  };

  const handlePrevious = () => {
    navigate('/personal-details');
  };

  return (
    <div>
      <label>Phone Number:</label>
      <input type="number" value={phone} onChange={handlePhoneNumber} />
      <label>Email Address:</label>
      <input type="email" value={email} onChange={handleEmail} />
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
