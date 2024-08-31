import React from 'react'
import DashboardOverview from './DashboardOverview'
import PatientInsights from './PatientInsights'
export default function Dashboard() {
  return (
    <div className='md:pt-28'>
      <DashboardOverview/>
      <PatientInsights/>
    </div>
  )
}
