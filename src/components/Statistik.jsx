import { useState } from 'react'
import Weeks from './statistikaChild/Weeks'
import Month from './statistikaChild/Month'
import Year from './statistikaChild/Year'

function Statistik({habits}) {

  const [vaqt, setVaqt] = useState('haftalik')

  return (
    <main className='p-3'>
        <div className="bg-white/25 backdrop-blur-md border border-white/30 rounded-2xl p-1.5 shadow-sm flex justify-between items-center mx-3 mb-4">
  
  <button 
    className={`w-1/3 py-1.5 rounded-xl text-sm transition-all duration-300 ${
      vaqt === 'haftalik' 
        ? 'bg-white text-slate-800 font-bold shadow-sm' 
        : 'text-slate-600 font-medium hover:text-slate-800'
    }`} 
    onClick={() => setVaqt('haftalik')}
  >
    Week
  </button>
  
  <button 
    className={`w-1/3 py-1.5 rounded-xl text-sm transition-all duration-300 ${
      vaqt === 'oylik' 
        ? 'bg-white text-slate-800 font-bold shadow-sm' 
        : 'text-slate-600 font-medium hover:text-slate-800'
    }`} 
    onClick={() => setVaqt('oylik')}
  >
    Month
  </button>
  
  <button 
    className={`w-1/3 py-1.5 rounded-xl text-sm transition-all duration-300 ${
      vaqt === 'yillik' 
        ? 'bg-white text-slate-800 font-bold shadow-sm' 
        : 'text-slate-600 font-medium hover:text-slate-800'
    }`} 
    onClick={() => setVaqt('yillik')}
  >
    Year
  </button>
  
</div>

        {vaqt === 'haftalik' && <Weeks habits={habits}/>}
        {vaqt === 'oylik' && <Month habits={habits}/>}
        {vaqt === 'yillik' && <Year habits={habits}/>}    

    </main>
  )
}

export default Statistik