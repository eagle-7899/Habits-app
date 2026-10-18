
function Header({setModal}) {
  return (
   <div className="flex justify-between items-center bg-gray-800 p-1">
  <h2 className="ml-3 text-3xl font-bold text-white tracking-wide">
    Habits
  </h2>
  
  <button 
    onClick={() => setModal()} 
    className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white text-xl transition-colors mr-2 cursor-pointer"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  </button>
</div>
  )
}

export default Header 