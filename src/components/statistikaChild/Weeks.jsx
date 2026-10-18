function Weeks({ habits = [] }) {
  const oxrgi7kun = [];
  const bugun = new Date();
  
  const haftaKuni = bugun.getDay() === 0 ? 7 : bugun.getDay(); 

  const dushanba = new Date(bugun);
  dushanba.setDate(bugun.getDate() - haftaKuni + 1);

  for (let i = 0; i < 7; i++) {
    const kun = new Date(dushanba);
    kun.setDate(dushanba.getDate() + i);
    
    const yil = kun.getFullYear();
    const oy = String(kun.getMonth() + 1).padStart(2, "0");
    const sana = String(kun.getDate()).padStart(2, "0");
    
    oxrgi7kun.push(`${yil}-${oy}-${sana}`);
  }

  const haftalikStat = habits.map((habit) => {
    const bajarilganlar = (habit.completedDates || []).filter((sana) => {
      return oxrgi7kun.includes(sana);
    });
    const soni = bajarilganlar.length;
    const foiz = Math.round((soni / 7) * 100);

    return {
      ...habit,
      soni: soni,
      foiz: foiz,
    };
  });

  const haftaDavomidaJami = haftalikStat.reduce((sum, item) => sum + item.soni, 0);

  const bugunSana = new Date().toLocaleDateString("en-CA"); 
  const bugunBajarilgan = habits.filter((habit) =>
    (habit.completedDates || []).includes(bugunSana)
  ).length;

  return (
    <div className="flex flex-col gap-3 p-4">
    <h2 className="text-center">Haftalik ko'rsatkichlar</h2>

    <div className="flex justify-between gap-2">
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 w-[48%]">
        <h2 className="text-center">Hafta davomida</h2>
        <h1 className="text-center text-blue-500 font-bold">{haftaDavomidaJami}</h1>
      </div>
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 w-[48%]">
        <h2 className="text-center">Bugungi natija</h2>
        <p className="text-center font-bold">{bugunBajarilgan}/{habits.length}</p>
      </div>
    </div>

     <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
       {haftalikStat.map((iteam, i) => {
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

export default Weeks;
