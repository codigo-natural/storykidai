import React from 'react'
import { DashboardHeader } from './_components/DashboardHeader'
import { UserStory } from './_components/UserStoryList'

const DashboardPage = () => {
  return (
    <div className='p-10 md:px-20 lg:px-40 min-h-screen'>
      <DashboardHeader />
      <UserStory />
    </div>
  )
}

export default DashboardPage
