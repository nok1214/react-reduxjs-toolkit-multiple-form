import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStreet, setState, setCity, setZip } from '../store/formSlice';
import { useNavigate } from 'react-router-dom';

export default function Address() {
  const { street, state, city, zip } = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleStreet = (e) => {
    dispatch(setStreet(e.target.value));
  };
  const handleState = (e) => {
    dispatch(setState(e.target.value));
  };
  const handleCity = (e) => {
    dispatch(setCity(e.target.value));
  };
  const handleZip = (e) => {
    dispatch(setZip(e.target.value));
  };

  const handleSubmit = () => {
    dispatch(setStreet(street));
    dispatch(setState(state));
    dispatch(setCity(city));
    dispatch(setZip(zip));
    navigate('/final-form');
  };

  const handlePrevious = () => {
    navigate('/contact-info');
  };
  return (
    <div>
      <label>Street:</label>
      <input type="text" value={street} onChange={handleStreet} />
      <label>City:</label>
      <input type="text" value={city} onChange={handleCity} />
      <label>State:</label>
      <input type="text" value={state} onChange={handleState} />
      <label>ZipCode:</label>
      <input type="number" value={zip} onChange={handleZip} />
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
