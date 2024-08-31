import {
  CalendarDateRangeIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import React from "react";
export default function DashboardOverview() {

  return (
    <div className="px-8 pt-8 md:pt-0">
      <h2 className="font-bold text-2xl mb-5 border-dotted border-teal-500 border-b-2 inline-block pb-3">
        Dashboard Overview
      </h2>
      <div className=" grid gap-4 lg:grid-cols-3">
        <div className="bg-white flex rounded-md shadow-md px-4 py-6">
          <div className="bg-teal-500 rounded p-4 flex align-middle">
            <UserGroupIcon className="text-white h-6 w-6" />
          </div>
          <div className="text-gray-700 mx-4">
            <h4 className="text-2xl font-semibold">100</h4>
            <p className="text-gray-500">Number of Patients</p>
          </div>
        </div>
        <div className="bg-white flex rounded-md shadow-md px-4 py-6">
          <div className="bg-teal-500 rounded p-4 flex align-middle">
            <CalendarDateRangeIcon className="text-white h-6 w-6" />
          </div>
          <div className="text-gray-700 mx-4">
            <h4 className="text-2xl font-semibold">60</h4>
            <p className="text-gray-500">Appointments</p>
          </div>
        </div>
        <div className="bg-white flex rounded-md shadow-md px-4 py-6">
          <div className="bg-teal-500 rounded p-4 flex align-middle">
            <UserIcon className="text-white h-6 w-6" />
          </div>
          <div className="text-gray-700 mx-4">
            <h4 className="text-2xl font-semibold">50</h4>
            <p className="text-gray-500">Number of Doctors</p>
          </div>
        </div>
      </div>
    </div>
  );
}
