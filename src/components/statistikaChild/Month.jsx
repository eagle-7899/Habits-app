function Month({ habits = [] }) {
   const oylar = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr",
  ];
   
   const hozir = new Date();
  const oyNomi = oylar[hozir.getMonth()];
  const yil = hozir.getFullYear();
  const jij = new Date(yil, hozir.getMonth() + 1, 0);
  const oylardagiKunlarSoni = jij.getDate(); // oyimizda necha kun borligini korsatadi

  const oyKunlari = [];

    for (let kun = 1; kun <= oylardagiKunlarSoni; kun++) {
    const oyFormat = String(hozir.getMonth() + 1).padStart(2, "0");
    const kunFormat = String(kun).padStart(2, "0");
    oyKunlari.push(`${yil}-${oyFormat}-${kunFormat}`);
  } 
  
  let toliqBajarilganKunlarSoni = 0

  if(habits.length > 0) {
    oyKunlari.forEach((sana) => {
      const shuKungiNatija = habits.filter((habit) => {
        return (habit.completedDates || []).includes(sana); 
      }).length;

      if(shuKungiNatija === habits.length){
        toliqBajarilganKunlarSoni++
      }

    })
  }

  const oylikStat = habits.map((habit) => {
    const bajarilganlar = (habit.completedDates || []).filter((sana) => {
      return oyKunlari.includes(sana);
    });

    const soni = bajarilganlar.length;
    const foiz = Math.round((soni / oylardagiKunlarSoni) * 100);

    return {
      ...habit,
      soni: soni,
      foiz: foiz,
    };
  });
  
  const oylikJami = oylikStat.reduce((sum, item) => sum + item.soni, 0);

  return (
  <div className="flex flex-col gap-3 p-4">
    {habits.length > 0 ? (
      <>

    <div className="flex justify-between gap-2">
      <div className="bg-white/25 backdrop-blur-md border border-white/30 shadow-sm p-4 rounded-2xl shadow-sm w-[48%]">
        <h2 className="text-sm h-12 font-semibold text-slate-600 uppercase tracking-wider text-center">📅 Completed This Month</h2>
        <h1 className="text-center text-4xl font-extrabold text-slate-800 mt-1 drop-shadow-sm">{oylikJami}</h1>
      </div>

      <div className="bg-white/25 backdrop-blur-md border border-white/30 shadow-sm p-4 rounded-2xl shadow-sm w-[48%]">
        <h2 className="text-center h-12 text-sm font-semibold text-slate-600 uppercase tracking-wider">Fully Completed Days</h2>
        <p className="text-center text-4xl font-extrabold text-slate-800 mt-1 drop-shadow-sm">{toliqBajarilganKunlarSoni} days</p>
      </div>
    </div>

     <div className="bg-white/25 backdrop-blur-md border border-white/30 shadow-sm p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
       {oylikStat.map((iteam, i) => {
        return (
          <div 
            key={iteam.id || i} 
            className="flex flex-col gap-2 border-b border-gray-100 pb-3 last:border-0 last:pb-0"
          >
            <div className="flex justify-between">
              <p className="text-lg font-bold text-slate-800">{iteam.name} <span className="font-medium text-slate-500 text-sm">({iteam.soni} times)</span></p>
              <p className="font-bold text-emerald-600 text-lg">{iteam.foiz}%</p>
            </div>

            {/* harakatlanuchi bar */}
            <div className="w-full bg-gray-100 h-2.5 rounded-full">
              <div className="bg-emerald-500 h-2.5 rounded-full transition-all duration-500" style={{ width: `${iteam.foiz}%` }}></div>
            </div>
          </div>
        );
      })}
     </div>
      </>
    ) : (
      <div className="flex flex-col items-center justify-center mt-20 text-center px-4">
          <span className="text-6xl mb-4 opacity-90">📊</span>
          <h3 className="text-xl font-bold text-white mb-2 tracking-wide">No stats to show</h3>
          <p className="text-white/80 font-medium mt-2 leading-relaxed text-[15px]">
            Add some habits first to<br/>track your weekly progress
          </p>
        </div>
    )}
    </div>
  );
}

export default Month;