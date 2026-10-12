import { useState } from "react";
import DaysRow from "./Main/DaysRow"
import HabitsCard from "./Main/HabitsCard";
import { mockHabits } from "./prosta/Mockhabits";
import useLocalStorage from "./hooks/useLocalStorage";

function Main({onTogle,habits}) {

  // const [habits, setHabits] = useLocalStorage('habit:v1',mockHabits) //main jsx ga uztttik

  const currentWeek = [
    { date: '2026-10-05', label: 'Du', dayNum: '01' },
    { date: '2026-10-06', label: 'Se', dayNum: '02' },
    { date: '2026-10-07', label: 'Ch', dayNum: '03' },
    { date: '2026-10-08', label: 'Pa', dayNum: '04' },
    { date: '2026-10-09', label: 'Ju', dayNum: '05' },
    { date: '2026-10-10', label: 'Sh', dayNum: '06' },
    { date: '2026-10-11', label: 'Ya', dayNum: '07' },
  ];

  // const onTogle = (habitId, date) => {
  //   const newHabits = habits.map((h) => {
  //     if(h.id !== habitId) {
  //       return h;
  //     }

  //   const eskiSanalar = h.completedDates || []
  //   const bormi = eskiSanalar.includes(date)

  //   let yangiSanalar;
  //   if(bormi){
  //     yangiSanalar = eskiSanalar.filter((s) => s !== date)
  //   }else{
  //     yangiSanalar = [...eskiSanalar, date]
  //   }
  //   return {
  //     ...h,
  //     completedDates:yangiSanalar
  //   }
  //   })
  //   setHabits(newHabits);
  // }


  return (
        <main>
          <DaysRow daysWeak = {currentWeek}/>

          {/* habits card */}
        
          {habits.map((habit) => {
           return <HabitsCard toggles={onTogle} daysWeak={currentWeek} key={habit.id} habit= {habit}/>
          })}
        </main>
  )
}

export default Main