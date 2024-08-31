import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function AppointmentManagement() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: "Ahmed Ali",
      date: "2024-09-01",
      time: "10:00 AM",
      reason: "Routine Check-up",
    },
    {
      id: 2,
      patientName: "Sara Mohamed",
      date: "2024-09-05",
      time: "02:00 PM",
      reason: "Asthma Consultation",
    },
  ]);

  const formik = useFormik({
    initialValues: {
      patientName: '',
      date: '',
      time: '',
      reason: '',
    },
    validationSchema: Yup.object({
      patientName: Yup.string().required('Required'),
      date: Yup.date().required('Required'),
      time: Yup.string().required('Required'),
      reason: Yup.string().required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      const newAppointment = {
        ...values,
        id: appointments.length + 1,
      };
      setAppointments([...appointments, newAppointment]);
      resetForm();
    },
  });

  return (
    <div className="md:pt-28">
        <h2 className="text-2xl font-bold m-4 text-center">Appointment Management</h2>

      <form 
        onSubmit={formik.handleSubmit} 
        className="border border-teal-500 md:w-1/2 m-auto w-full p-4 bg-white shadow rounded-lg"
      >
        <div className='flex flex-wrap'>
          <div className="mb-4 w-full md:w-1/2 md:pr-4">
            <label htmlFor="patientName" className="block text-gray-700">Patient Name</label>
            <input
              id="patientName"
              name="patientName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.patientName}
              className="w-full p-2 border rounded"
            />
            {formik.touched.patientName && formik.errors.patientName ? (
              <div className="text-red-500">{formik.errors.patientName}</div>
            ) : null}
          </div>

          <div className="mb-4 w-full md:w-1/2 ">
            <label htmlFor="date" className="block text-gray-700">Date</label>
            <input
              id="date"
              name="date"
              type="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.date}
              className="w-full p-2 border rounded"
            />
            {formik.touched.date && formik.errors.date ? (
              <div className="text-red-500">{formik.errors.date}</div>
            ) : null}
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="time" className="block text-gray-700">Time</label>
            <input
              id="time"
              name="time"
              type="time"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.time}
              className="w-full p-2 border rounded"
            />
            {formik.touched.time && formik.errors.time ? (
              <div className="text-red-500">{formik.errors.time}</div>
            ) : null}
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="reason" className="block text-gray-700">Reason</label>
            <textarea
              id="reason"
              name="reason"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.reason}
              className="w-full p-2 border rounded"
            />
            {formik.touched.reason && formik.errors.reason ? (
              <div className="text-red-500">{formik.errors.reason}</div>
            ) : null}
          </div>
        </div>
        <button 
          type="submit" 
          className="bg-teal-800 w-full text-white px-4 py-2 rounded-md hover:bg-teal-600"
        >
          Add Appointment
        </button>
      </form>

      <div className='m-20'>
        <table className="m-auto my-10 md:w-3/4 w-full text-center shadow border-teal-600 mb-10 text-black bg-white rounded-lg ">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Patient Name</th>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Time</th>
              <th className="py-2 px-4 border-b">Reason</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td className="py-2 px-4 border-b">{appointment.patientName}</td>
                <td className="py-2 px-4 border-b">{appointment.date}</td>
                <td className="py-2 px-4 border-b">{appointment.time}</td>
                <td className="py-2 px-4 border-b">{appointment.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
