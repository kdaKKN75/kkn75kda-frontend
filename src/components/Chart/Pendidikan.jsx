import { useEffect, useState } from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function Pendidikan (){
    const [data,setdata] = useState([12, 19, 3, 5])
    const [Pendidikan,setPendidikan] = useState(['SD/MI', 'SMP/MTs', 'SMA/SMK/MA', 'Kuliah'])

    const dataChart = {
        labels: Pendidikan,
        datasets: [
          {
            label: '# of Votes',
            data: data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',

            ],
            borderWidth: 1,
          },
        ],
      };
    return(
        <>
        <Pie data={dataChart}/>
        </>
    )
}
export default Pendidikan