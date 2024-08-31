import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
export default function PatientManagement() {
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "Ahmed Ali",
      birthDate: "1989-01-01",
      age: 35,
      phone: "01001234567",
      medicalHistory: "Diabetes, Hypertension",
      appointments: [
        { date: "2024-09-01", time: "10:00 AM" },
      ],
    },
    {
      id: 2,
      name: "Sara Mohamed",
      birthDate: "1974-05-15",
      age: 50,
      phone: "01007654321",
      medicalHistory: "Asthma",
      appointments: [
        { date: "2024-09-05", time: "02:00 PM" },
      ],
    },
  ]);

  const formik = useFormik({
    initialValues: {
      name: '',
      birthDate: '',
      age: '',
      phone: '',
      medicalHistory: '',
      appointments: [{ date: '', time: '' }],
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      birthDate: Yup.date().required('Required'),
      age: Yup.number().required('Required').min(0, 'Invalid age'),
      phone: Yup.string().required('Required').matches(/^[0-9]+$/, 'Must be a valid phone number'),
      medicalHistory: Yup.string().required('Required'),
      appointments: Yup.array().of(
        Yup.object({
          date: Yup.date().required('Required'),
          time: Yup.string().required('Required'),
        })
      ),
    }),
    onSubmit: (values, { resetForm }) => {
      const newPatient = {
        ...values,
        id: patients.length + 1,
      };
      setPatients([...patients, newPatient]);
      resetForm();
    },
  });

  return (
    <div className="md:pt-28">
        <h2 className="text-2xl font-bold m-4 text-center">Patient Management</h2>

      <form 
        onSubmit={formik.handleSubmit} 
        className="border border-teal-500 md:w-1/2 m-auto w-full p-4 bg-white shadow rounded-lg"
      >
        <div className='flex flex-wrap'>
        <div className="mb-4 w-full md:w-1/2 md:pr-4">
          <label htmlFor="name" className="block text-gray-700">Patient Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="w-full p-2 border rounded"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="mb-4 w-full md:w-1/2 md:pr-4">
          <label htmlFor="birthDate" className="block text-gray-700">Birth Date</label>
          <input
            id="birthDate"
            name="birthDate"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.birthDate}
            className="w-full p-2 border rounded"
          />
          {formik.touched.birthDate && formik.errors.birthDate ? (
            <div className="text-red-500">{formik.errors.birthDate}</div>
          ) : null}
        </div>

        <div className="mb-4 w-full md:w-1/2 md:pr-4">
          <label htmlFor="age" className="block text-gray-700">Age</label>
          <input
            id="age"
            name="age"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.age}
            className="w-full p-2 border rounded"
          />
          {formik.touched.age && formik.errors.age ? (
            <div className="text-red-500">{formik.errors.age}</div>
          ) : null}
        </div>

        <div className="mb-4 w-full md:w-1/2 md:pr-4">
          <label htmlFor="phone" className="block text-gray-700">Phone</label>
          <input
            id="phone"
            name="phone"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            className="w-full p-2 border rounded"
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-500">{formik.errors.phone}</div>
          ) : null}
        </div>

      

        <div className="mb-4 w-full md:w-1/2 md:pr-4">
          <label htmlFor="appointmentDate" className="block text-gray-700">Appointment Date</label>
          <input
            id="appointmentDate"
            name="appointments[0].date"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.appointments[0].date}
            className="w-full p-2 border rounded"
          />
          {formik.touched.appointments && formik.errors.appointments?.[0]?.date ? (
            <div className="text-red-500">{formik.errors.appointments[0].date}</div>
          ) : null}
        </div>

        <div className="mb-4 w-full md:w-1/2 md:pr-4 ">
          <label htmlFor="appointmentTime" className="block text-gray-700">Appointment Time</label>
          <input
            id="appointmentTime"
            name="appointments[0].time"
            type="time"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.appointments[0].time}
            className="w-full p-2 border rounded"
          />
          {formik.touched.appointments && formik.errors.appointments?.[0]?.time ? (
            <div className="text-red-500">{formik.errors.appointments[0].time}</div>
          ) : null}
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="medicalHistory" className="block text-gray-700">Medical History</label>
          <textarea
            id="medicalHistory"
            name="medicalHistory"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.medicalHistory}
            className="w-full p-2 border rounded"
          />
          {formik.touched.medicalHistory && formik.errors.medicalHistory ? (
            <div className="text-red-500">{formik.errors.medicalHistory}</div>
          ) : null}
        </div>
        </div>
        <button 
          type="submit" 
          className="bg-teal-800 w-full text-white px-4 py-2 rounded-md hover:bg-teal-600"
        >
          Add Patient
        </button>
      </form>
<div className='m-20'>
      <table className="m-auto my-10 md:w-3/4 w-full text-center shadow border-teal-600 mb-10 text-black  bg-white rounded-lg ">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Patient Name</th>
            <th className="py-2 px-4 border-b">Age</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">Medical History</th>
            <th className="py-2 px-4 border-b">Appointments</th>
       
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td className="py-2 px-4 border-b">{patient.name}</td>
              <td className="py-2 px-4 border-b">{patient.age}</td>
              <td className="py-2 px-4 border-b">{patient.phone}</td>
              <td className="py-2 px-4 border-b">{patient.medicalHistory}</td>
              <td className="py-2 px-4 border-b">
                {patient.appointments.map((appointment, index) => (
                  <div key={index}>
                    {appointment.date} at {appointment.time}
                  </div>
                ))}
              </td>
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>

  );
}
