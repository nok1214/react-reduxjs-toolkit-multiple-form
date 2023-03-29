import React from 'react';
import './style.css';
import Address from './components/Address';
import ContactInfo from './components/ContactInfo';
import PersonalDetails from './components/PersonalDetails';
import FinalForm from './components/FinalForm';
import { Routes, Route, Navigate } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/personal-details" />} />
      <Route path="/personal-details" element={<PersonalDetails />}></Route>
      <Route path="/contact-info" element={<ContactInfo />}></Route>
      <Route path="/address" element={<Address />}></Route>
      <Route path="/final-form" element={<FinalForm />}></Route>
    </Routes>
  );
}
