import React from 'react'

function HabitsCard({habit,daysWeak,toggles,openEditModal}) {

  return (
    <div className='items-center gap-2 mb-2 grid grid-cols-[80px_repeat(7,minmax(0,1fr))] bg-done-light '>
      <div onClick={() => openEditModal(habit)} className='truncate overflow-hidden'>{habit.name}</div>
      {daysWeak.map((weak) => {
        const isDone = habit.completedDates?.includes(weak.date);
        return <button onClick={() => toggles(habit.id, weak.date)} key={weak.date} className={`w-full aspect-square rounded-md ${isDone ? 'bg-done' : 'bg-white'}`}></button>
      })}
    </div>
  )
}

export default HabitsCard