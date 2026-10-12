import React from 'react'

function DaysRow({daysWeak}) {
  return (
    <div className='grid grid-cols-[80px_repeat(7,minmax(0,1fr))]'>
      <div>sanalar</div>
      {daysWeak.map((weak) => {
        return(
          <div key={weak.date} className='flex flex-col items-center'>
          <span>{weak.label}</span>
          <span>{weak.dayNum}</span>
        </div>
        )
      })}
    </div>
  )
}

export default DaysRow