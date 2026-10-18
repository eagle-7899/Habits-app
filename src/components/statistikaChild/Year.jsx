
function Year({habits = []}) {
  const hozir = new Date()
  const yil = hozir.getFullYear()
  const yildagiKunlar = 365

  const yillikStats = habits.map((habit) => {
    const bajarilganlar = (habit.completedDates || []).filter((sana) => {
      return sana.startsWith(`${yil}-`)
    })

    const soni = bajarilganlar.length
    const foiz = Math.round(soni / yildagiKunlar * 100)

    return{
      ...habit,
      soni: soni,
      foiz: foiz
  }
  })

  const yillikJami = yillikStats.reduce((sum, item) => sum + item.soni, 0)
  let engKop = 0
  let engKopNomi = 'Hozircha mavjud emas'

  yillikStats.forEach((item) => {
    if(item.soni > engKop) {
      engKop = item.soni
      engKopNomi = item.name
    }
  })

  // toliq bajarilgan kunlarni hisoblash
  let yillikToliqKunlar = 0;

  if (habits.length > 0) {
    const barchaSanalar = {};
    
    habits.forEach((habit) => {
      (habit.completedDates || []).forEach((sana) => {
        if (sana.startsWith(`${yil}-`)) {
          barchaSanalar[sana] = (barchaSanalar[sana] || 0) + 1;
        }
      });
    });

    yillikToliqKunlar = Object.values(barchaSanalar).filter(
      (sanoq) => sanoq === habits.length
    ).length;
  }

  console.log(yillikStats)

  return (
    <div className="flex flex-col gap-3 p-4">

      <h2 className="text-center">Yillik ko'rsatkichlar</h2>
        
      <div className="flex justify-between gap-2">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 w-[48%]">
          <h2 className="text-center">Bir yildagi jami bajarilgan odatlar</h2>
          <h1 className="text-center text-blue-500 font-bold">{yillikJami}</h1>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 w-[48%]">
          <h2 className="text-center">To'liq bajarilgan kunlar soni</h2>
          <p className="text-center font-bold">{yillikToliqKunlar}</p>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
       {yillikStats.map((iteam, i) => {
        return (
          <div 
            key={iteam.id || i} 
            className="flex flex-col gap-2 border-b border-gray-100 pb-3 last:border-0 last:pb-0"
          >
            <div className="flex justify-between">
              <p>{iteam.name} <span>({iteam.soni} marta)</span></p>
              <p>{iteam.foiz}%</p>
            </div>

            {/* harakatlanuchi bar */}
            <div className="w-full bg-gray-100 h-2.5 rounded-full">
              <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" style={{ width: `${iteam.foiz}%` }}></div>
            </div>
          </div>
        );
      })}
     </div>


    <div className="bg-gradient-to-r from-amber-100 to-yellow-50 p-5 rounded-2xl shadow-sm border border-amber-200 flex flex-col items-center gap-2 mt-2">
      <h3>🏆 Yil Qahramoni</h3>
     <div className="flex flex-col items-center">
          <h1 className="text-amber-600 font-black text-2xl uppercase tracking-wide text-center">
            "{engKopNomi}"
          </h1>
          <span className="bg-amber-200 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mt-2">
            {engKop} marta bajarildi
          </span>
        </div>
        
        <p className="text-amber-700 text-xs text-center font-medium opacity-80 mt-2">
          Siz bu yil eng ko'p mana shu odatga sodiq qoldingiz. Barakalla!
        </p>
      </div>

    </div>
  )
}

export default Year

