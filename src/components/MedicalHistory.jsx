import React from 'react';

export default function MedicalHistory() {
  return (
    <div className="border border-teal-500 p-4 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Medical History</h2>
      <div className="text-gray-700">
        <p><strong>Diabetes:</strong> Since 2010</p>
        <p><strong>Hypertension:</strong> Since 2015</p>
        <p><strong>Asthma:</strong> Diagnosed in 2020</p>
      </div>
    </div>
  );
}
