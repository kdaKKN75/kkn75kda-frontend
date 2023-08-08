import { useEffect, useState } from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function Pekerjaan (){
    const [JumlahData,setdata] = useState([12, 19, 8, 20,10])
    const [Pekerjaan,setPekerjaan] = useState(['Petani', 'PNS', 'Pedagang', 'Tidak Bekerja','tes'])

    const dataChart = {
        labels: Pekerjaan,
        datasets: [
          {
            label: 'jumlah',
            data: JumlahData,
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
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(252, 3, 3, 1)',
              'rgba(252, 86, 3, 0.8)',
              'rgba(252, 244, 3, 0.8)',
              'rgba(28, 252, 3, 0.8)',
              'rgba(3, 252, 219, 0.8)',
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
export default Pekerjaan