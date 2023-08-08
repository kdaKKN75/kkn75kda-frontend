import { useEffect, useState } from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function Umur (){
    const [data,setdata] = useState([20, 19])
    const [umur,setumur] = useState(['0-1 tahun', '2-4 tahun'])

    const dataChart = {
        labels: umur,
        datasets: [
          {
            label: 'jumlah',
            data: data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(252, 3, 3, 0.8)',
              'rgba(252, 86, 3, 0.8)',
              'rgba(252, 244, 3, 0.8)',
              'rgba(28, 252, 3, 0.8)',
              'rgba(240, 3, 252, 0.8)',
              'rgba(3, 74, 252, 0.8)',
              'rgba(123, 3, 252, 0.8)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(252, 3, 3, 0.8)',
              'rgba(252, 86, 3, 0.8)',
              'rgba(252, 244, 3, 0.8)',
              'rgba(28, 252, 3, 0.8)',
              'rgba(240, 3, 252, 0.8)',
              'rgba(3, 74, 252, 0.8)',
              'rgba(123, 3, 252, 0.8)',
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
export default Umur