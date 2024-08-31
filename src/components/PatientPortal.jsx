import React from 'react';
import PatientDetails from './PatientDetails';
import AppointmentManagement from './AppointmentManagement';
import MedicalHistory from './MedicalHistory';

export default function PatientPortal() {
  return (
    <div className="md:pt-20">
      <h1 className="text-3xl font-bold text-center my-8">Patient Portal</h1>
      <div className='flex flex-col w-full px-10'>
      <div className='w-1/2 '>

        <PatientDetails className/>
        </div>
        <div className='w-1/2 mt-5 '>

        <MedicalHistory />
        </div>
        </div>
    </div>
  );
}
