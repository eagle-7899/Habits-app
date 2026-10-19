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
       <div className="mx-3 mt-4 mb-4">
        {habits.length > 0 ? (
           <main className="bg-white/25 backdrop-blur-md border border-white/30 rounded-2xl p-4 shadow-sm">
          <DaysRow daysWeak = {currentWeek}/>

          {/* habits card */}
        
          {habits.map((habit) => {
           return <HabitsCard openEditModal={openEditModal} toggles={onTogle} daysWeak={currentWeek} key={habit.id} habit= {habit} />
          })}
        </main>
        ) : (
          <div className="flex flex-col items-center justify-center mt-20 text-center px-4">
          <span className="text-6xl mb-4 opacity-80">🌱</span>
          <h3 className="text-xl font-bold text-white mb-2 tracking-wide">
            No habits yet
          </h3>
          <p className="text-slate-100/80 text-[15px] font-medium leading-relaxed">
            Tap the <span className="font-bold text-white">+</span> button above to add your<br/>
            first habit
          </p>
        </div>
        )}
       </div>
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