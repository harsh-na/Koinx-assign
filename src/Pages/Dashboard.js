import React from 'react'
import {Navbar, Breadcrumb, SideBarWidgets, FooterTrendingCarousel} from '../components'
import {CryptodDetailsDashBoard,TakenomicsSection,TabsSection, SentimentAnalysisSection, AboutSection, TeamMembersSection} from '../components/MainSectionComponents'
import { breadcrumbItems } from '../components/constants'
const Dashboard = () => {
  return (
    <div className="h-full w-full bg-[#EFF2F5]">
        <Navbar />
        <Breadcrumb items={breadcrumbItems} activeIndex={1} />
        <div >
        <div className="md:flex justify-center md:w-[100] px-8 gap-6">
          <div className="flex flex-col gap-6 px-2">
           <CryptodDetailsDashBoard />
           <TabsSection />
           <SentimentAnalysisSection />
           <AboutSection />
            <TakenomicsSection />
            <TeamMembersSection />
          </div>
          <div className="flex items-center md:block flex-col">
            <SideBarWidgets />
          </div>
        </div>
        <div className="">
          <FooterTrendingCarousel />
        </div>
    </div>
    </div>
  )
}

export default Dashboard