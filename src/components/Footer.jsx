
function Footer({habits,setActiveTab}) {
  return (
    <div className="bg-gray-800 text-white flex justify-center gap-20 text-2xl font-semibold">
      <button onClick={() => setActiveTab('home')} className="mb-2 mt-2">Home</button>
      <button habits={habits} onClick={() => setActiveTab('statistika')} className="mb-2 mt-2">Statistika</button>
    </div>
  )
}

export default Footer