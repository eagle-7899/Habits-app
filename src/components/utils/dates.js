import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
dayjs.extend(isoWeek);


export const getCurrentWeeeks = () => {
    const weekDates = []

     // .startOf('isoWeek') esa bugungi kundan orqaga qaytib, shu haftaning aniq Dushanba kunini topadi.
    const startofWeek = dayjs().startOf('isoWeek')

    const labels = ['Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh', 'Ya'];

    // endi loop yozamiz
    for(let i = 0; i < 7; i++) {
        const currentDay = startofWeek.add(i, 'day');
        weekDates.push({date: currentDay.format('YYYY-MM-DD'), 
            label: labels[i],
            dayNum: currentDay.format('DD')
        })
    }
    
    return weekDates;
}