import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function FinalForm() {
  const { name, age, dob, phone, email, street, state, city, zip } =
    useSelector((state) => state.form);
  const navigate = useNavigate();

  const handlePrevious = () => {
    navigate('/address');
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Day of Birth</th>
            <th>Phone Number</th>
            <th>Email Address</th>
            <th>Street Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{age}</td>
            <td>{dob}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{street}</td>
            <td>{city}</td>
            <td>{state}</td>
            <td>{zip}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handlePrevious}>Previous</button>
    </>
  );
}
