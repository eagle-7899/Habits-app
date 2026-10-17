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

  return (<div className="flex flex-col gap-3 p-4">
    <h2 className="text-center">{oyNomi} ko'rsatkichlari</h2>

    <div className="flex justify-between gap-2">
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 w-[48%]">
        <h2 className="text-center">Bu oyda bajarildi</h2>
        <h1 className="text-center text-blue-500 font-bold">{oylikJami}</h1>
      </div>
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 w-[48%]">
        <h2 className="text-center">To'liq bajarilgan kunlar soni</h2>
        <p className="text-center font-bold">{toliqBajarilganKunlarSoni} days</p>
      </div>
    </div>

     <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
       {oylikStat.map((iteam, i) => {
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
    </div>
  );
}

export default Month;