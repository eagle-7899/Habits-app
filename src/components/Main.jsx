// import { useState } from "react";
import DaysRow from "./Main/DaysRow"
import HabitsCard from "./Main/HabitsCard";
// import { mockHabits } from "./prosta/Mockhabits";
// import useLocalStorage from "./hooks/useLocalStorage";
import { getCurrentWeeeks } from "./utils/dates";

function Main({onTogle,habits,openEditModal}) {

  // const [habits, setHabits] = useLocalStorage('habit:v1',mockHabits) //main jsx ga uztttik

  const currentWeek = getCurrentWeeeks()


  return (
        <main className="bg-white/25 backdrop-blur-md border border-white/30 rounded-2xl p-4 shadow-sm mx-3 mt-4 mb-4">
          <DaysRow daysWeak = {currentWeek}/>

          {/* habits card */}
        
          {habits.map((habit) => {
           return <HabitsCard openEditModal={openEditModal} toggles={onTogle} daysWeak={currentWeek} key={habit.id} habit= {habit} />
          })}
        </main>
  )
}

export default Main

 // const onTogle = (habitId, date) => {  //app jsx ga uzatdik
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