
function Footer({habits,activeTab, setActiveTab}) {
  return (
    <div className="bg-gray-800 text-white flex justify-center gap-20 text-2xl font-semibold">
      <button
        onClick={() => setActiveTab('home')}
        className={`flex items-center gap-2 px-5 py-2.5 h-[80%] my-auto rounded-2xl transition-all duration-300 ${
          activeTab === 'home'
            ? 'bg-white/20 backdrop-blur-md text-white' 
            : 'text-slate-400 hover:text-white/80' 
        }`}
      >
        <span className="text-lg">🏠</span>
        <span className="font-bold text-[15px]">Home</span>
      </button>
      <button
        onClick={() => setActiveTab('statistika')}
        className={`flex items-center gap-2 px-5 py-2.5 h-[80%] my-auto rounded-2xl transition-all duration-300 ${
          activeTab === 'statistika'
            ? 'bg-white/20 backdrop-blur-md text-white'
            : 'text-slate-400 hover:text-white/80'
        }`}
      >
        <span className="font-bold text-[15px]">Stats</span>
        <span className="text-lg">📊</span>
      </button>
    </div>
  )
}

export default Footer