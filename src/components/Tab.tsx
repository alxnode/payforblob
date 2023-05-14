import * as React from 'react'

interface ITabProps {
  title: string
  activeTab: string
  onTabChange: (tabName: string) => void
}

const Tab = ({ title, onTabChange, activeTab }: ITabProps) => {
  return (
    <div
      onClick={() => onTabChange(title)}
      className={`cursor-pointer border-b-2 border-indigo-200 hover:border-indigo-800 uppercase ${
        activeTab === title && 'border-indigo-800 cursor-default'
      }`}
    >
      {title}
    </div>
  )
}

export default Tab
