import { useEffect, useState } from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function JenisKelamin (){
    const [data,setdata] = useState([12, 19])
    const [Jenis,setJenis] = useState([])

    const dataChart = {
        labels: ['Laki-Laki', 'Perempuan'],
        datasets: [
          {
            label: 'jumlah',
            data: data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
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
export default JenisKelamin