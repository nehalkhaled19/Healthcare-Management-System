import React from 'react';

export default function PatientDetails() {
  return (
    <div className="border border-teal-500 p-4 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Patient Details</h2>
      <div className="text-gray-700">
        <p><strong>Name:</strong> Ahmed Ali</p>
        <p><strong>Birth Date:</strong> 1989-01-01</p>
        <p><strong>Age:</strong> 35</p>
        <p><strong>Phone:</strong> 01001234567</p>
      </div>
    </div>
  );
}
