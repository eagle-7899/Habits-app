import React, { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Statistik from "./components/Statistik";
import useLocalStorage from "./components/hooks/useLocalStorage";
import { mockHabits } from "./components/prosta/Mockhabits";
import AddHabitsModal from "./components/modals/AddHabitsModal";

const App = () => {
  const [activeTab, setActiveTab] = useState('home')
  const [isModal, setIsModal] = useState(false)
  const [editingHabits, setEditingHabits] = useState(null)
  const [habits, setHabits] = useLocalStorage('habit:v1',mockHabits)

  const openEditModal = (habit) => {
    setEditingHabits(habit)
    setIsModal(true)
  }

  const editHabits = (id, yangiNom) => {
    const yangilanganOdatlar = habits.map((habit) => {
      if(habit.id === id){
        return {...habit, name: yangiNom}
      }
      return habit
    })
    setHabits(yangilanganOdatlar)
  }

  const handleOpenAdd = () => {
    setEditingHabits(null); // Qutini tozalaymiz
    setIsModal(true);       // Oynani ochamiz
  }

  const deleteHabits = (id) => {
    const qoldanOdatlar = habits.filter((habit) => {
      return habit.id !== id
    })

    setHabits(qoldanOdatlar)
  }
  
  const addHabits = (yangiNom) => {
    const now = Date.now()
    const yangiOdat = {
      id: now,
      name: yangiNom,
      completedDates: []
    }

    setHabits([...habits, yangiOdat])
  }

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
      <Header setModal={handleOpenAdd}/>

      {/* add modal  */}
      {isModal && <AddHabitsModal editHabits={editHabits} setModal={setIsModal} addHabits={addHabits} editingHabits={editingHabits} deleteHabits={deleteHabits}/>}

      {/* asosiy qism */}
      <div className="flex-1 min-h-0 overflow-y-auto">
        {activeTab === 'home' && <Main habits={habits} onTogle={onTogle} openEditModal={openEditModal}/>}
        {activeTab === 'statistika' && <Statistik habits={habits}/>}
      </div>

      {/* footer qismi */}
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} habits={habits}/>
    </div>
  );
};

export default App;
