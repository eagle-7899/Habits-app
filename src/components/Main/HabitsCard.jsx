import React from 'react'

function HabitsCard({habit,daysWeak,toggles,openEditModal}) {

  return (
    <div className='items-center gap-2 mb-3 pb-3 grid grid-cols-[80px_repeat(7,minmax(0,1fr))] border-b border-black/10 last:border-0 last:mb-0 last:pb-0 '>
      <div onClick={() => openEditModal(habit)} className='truncate overflow-hidden font-bold text-slate-800 text-base cursor-pointer'>{habit.name}</div>
      {daysWeak.map((weak) => {
        const isDone = habit.completedDates?.includes(weak.date);
        return <button onClick={() => toggles(habit.id, weak.date)} key={weak.date} className={`w-7 h-7 mx-auto flex items-center justify-center rounded-lg transition-colors ${isDone ? 'bg-white text-emerald-600 shadow-sm' : 'bg-black/10 hover:bg-black/20'}`}>
          {isDone && <span className="font-bold text-sm leading-none pb-[1px]">✓</span>}
        </button>
      })}
    </div>
  )
}

export default HabitsCard