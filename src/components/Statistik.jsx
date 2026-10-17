import { useState } from 'react'
import Weeks from './statistikaChild/Weeks'
import Month from './statistikaChild/Month'
import Year from './statistikaChild/Year'

function Statistik({habits}) {

  const [vaqt, setVaqt] = useState('haftalik')

  return (
    <main className='p-4'>
        <div className='flex justify-center gap-8 mb-3'>
        <button className={`w-1/4 py-1 rounded-md transition-colors ${vaqt === 'haftalik' ? 'bg-white shadow' : 'text-gray-500'}`} onClick={() => setVaqt('haftalik')}>Week</button>
        <button className={`w-1/4 py-1 rounded-md transition-colors ${vaqt === 'oylik' ? 'bg-white shadow' : 'text-gray-500'}`} onClick={() => setVaqt('oylik')}>Month</button>
        <button className={`w-1/4 py-1 rounded-md transition-colors ${vaqt === 'yillik' ? 'bg-white shadow' : 'text-gray-500'}`} onClick={() => setVaqt('yillik')}>Year</button>
        </div>

        {vaqt === 'haftalik' && <Weeks habits={habits}/>}
        {vaqt === 'oylik' && <Month habits={habits}/>}
        {vaqt === 'yillik' && <Year habits={habits}/>}    

    </main>
  )
}

export default Statistik