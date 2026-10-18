import React from 'react'

function DaysRow({daysWeak}) {
  return (
    <div className='grid grid-cols-[80px_repeat(7,minmax(0,1fr))] gap-2 items-end pb-3 mb-3 border-b border-black/10'>
      <div className='text-sm font-medium text-slate-700'>Dates</div>
      {daysWeak.map((weak) => {
        return(
          <div key={weak.date} className='flex flex-col items-center text-slate-800 leading-tight'>
          <span className='text-xs font-medium'>{weak.label}</span>
          <span className='text-sm font-semibold'>{weak.dayNum}</span>
        </div>
        )
      })}
    </div>
  )
}

export default DaysRow