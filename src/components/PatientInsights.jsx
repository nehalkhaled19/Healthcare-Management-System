import React from 'react';
import { UserGroupIcon, ChartBarIcon, CalendarIcon } from '@heroicons/react/24/outline'

const PatientInsights = () => {
    const topConditions = [
        { condition: "Hypertension", count: 45 },
        { condition: "Diabetes", count: 30 },
        { condition: "Asthma", count: 25 },
    ];

    const ageDemographics = [
        { ageGroup: "0-18", count: 20 },
        { ageGroup: "19-35", count: 40 },
        { ageGroup: "36-60", count: 30 },
        { ageGroup: "60+", count: 10 },
    ];

    const genderDistribution = {
        male: 60,
        female: 40,
    };

    const recentVisits = [
        { name: "Ahmed Ali", lastVisit: "2024-08-25" },
        { name: "Sara Mohamed", lastVisit: "2024-08-24" },
        { name: "Hassan Omar", lastVisit: "2024-08-23" },
    ];

    const chronicConditions = {
        percentage: 35, // 35% of patients have chronic conditions
    };

    const patientGrowth = [
        { month: "January", patients: 50 },
        { month: "February", patients: 55 },
        { month: "March", patients: 60 },
        // Additional months...
    ];

    const averageVisitsPerPatient = 3.5;

    return (
        <div className="patient-insights  p-8  bg-gray-50 py-5 mt-10">
            <h2 className="text-2xl font-bold mb-4 border-dotted border-teal-500 border-b-2 inline-block pb-3" >Patient Insights</h2>
            <div className='flex flex-wrap'>
            <div className="w-1/2 insight mb-4 md:w-1/3 bg-gray-50">
                <h3 className="flex mb-2 items-center text-lg font-semibold">
                    <UserGroupIcon className="h-6 w-6 mr-2" />
                    Top Diagnosed Conditions
                </h3>
                <ul className="list-disc pl-5">
                    {topConditions.map((item, index) => (
                        <li key={index}>
                            {item.condition}: {item.count} patients
                        </li>
                    ))}
                </ul>
            </div>

            <div className="w-1/2 insight mb-4 md:w-1/3 bg-gray-50">
                <h3 className="flex mb-2 items-center text-lg font-semibold">
                    <ChartBarIcon className="h-6 w-6 mr-2" />
                    Age Demographics
                </h3>
                <ul className="list-disc pl-5">
                    {ageDemographics.map((item, index) => (
                        <li key={index}>
                            {item.ageGroup}: {item.count} patients
                        </li>
                    ))}
                </ul>
            </div>

            <div className="w-1/2 insight mb-4 md:w-1/3 bg-gray-50">
                <h3 className="flex mb-2 items-center text-lg font-semibold">
                    <UserGroupIcon className="h-6 w-6 mr-2" />
                    Gender Distribution
                </h3>
                <p>Male: {genderDistribution.male}%, Female: {genderDistribution.female}%</p>
            </div>

            <div className="w-1/2 insight mb-4 md:w-1/3 bg-gray-50">
                <h3 className="flex mb-2 items-center text-lg font-semibold">
                    <CalendarIcon className="h-6 w-6 mr-2" />
                    Recent Visits
                </h3>
                <ul className="list-disc pl-5">
                    {recentVisits.map((item, index) => (
                        <li key={index}>
                            {item.name} - Last Visit: {item.lastVisit}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="w-1/2 insight mb-4 md:w-1/3 bg-gray-50">
                <h3 className="flex mb-2 items-center text-lg font-semibold">
                    <ChartBarIcon className="h-6 w-6 mr-2" />
                    Chronic Conditions
                </h3>
                <p>{chronicConditions.percentage}% of patients have chronic conditions</p>
            </div>

            <div className="w-1/2 insight mb-4 md:w-1/3 bg-gray-50">
                <h3 className="flex mb-2 items-center text-lg font-semibold">
                    <ChartBarIcon className="h-6 w-6 mr-2" />
                    Patient Growth Over Time
                </h3>
                <ul className="list-disc pl-5">
                    {patientGrowth.map((item, index) => (
                        <li key={index}>
                            {item.month}: {item.patients} patients
                        </li>
                    ))}
                </ul>
            </div>

            <div className="w-1/2 insight mb-4 md:w-1/3 bg-gray-50">
                <h3 className="flex mb-2 items-center text-lg font-semibold">
                    <ChartBarIcon className="h-6 w-6 mr-2" />
                    Average Number of Visits Per Patient
                </h3>
                <p>{averageVisitsPerPatient} visits per patient</p>
            </div>
        </div></div>
    );
}

export default PatientInsights;
