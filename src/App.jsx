import React, { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Statistik from "./components/Statistik";
import useLocalStorage from "./components/hooks/useLocalStorage";
import { mockHabits } from "./components/prosta/Mockhabits";

const App = () => {
  const [activeTab, setActiveTab] = useState('home')

  const [habits, setHabits] = useLocalStorage('habit:v1',mockHabits)
   const onTogle = (habitId, date) => {
    const newHabits = habits.map((h) => {
      if(h.id !== habitId) {
        return h;
      }

    const eskiSanalar = h.completedDates || []
    const bormi = eskiSanalar.includes(date)

    let yangiSanalar;
    if(bormi){
      yangiSanalar = eskiSanalar.filter((s) => s !== date)
    }else{
      yangiSanalar = [...eskiSanalar, date]
    }
    return {
      ...h,
      completedDates:yangiSanalar
    }
    })
    setHabits(newHabits);
  }

  return (
    <div className="w-full max-w-md mx-auto h-dvh bg-bg flex flex-col overflow-hidden relative">
      {/* header qismi */}
      <Header/>

      {/* asosiy qism */}
      <div className="flex-1 min-h-0 overflow-y-auto">
        {activeTab === 'home' && <Main habits={habits} onTogle={onTogle}/>}
      {activeTab === 'statistika' && <Statistik/>}
      </div>

      {/* footer qismi */}
      <Footer activeTab={activeTab} setActiveTab={setActiveTab}/>
    </div>
  );
};

export default App;
