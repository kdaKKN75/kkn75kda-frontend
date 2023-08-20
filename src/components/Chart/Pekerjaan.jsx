import { useEffect, useState } from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import client from '../../api/axios';

ChartJS.register(ArcElement, Tooltip, Legend);

function Pekerjaan (){
  const [JumlahData,setdata] = useState([])
  const [Pekerjaan,setPekerjaan] = useState([])
  const fetchData = async() =>{
    try{
        const response = await client.get('/statistik/pekerjaan');
        // setPekerjaan(Object.keys(response.data.data.jobs[0]))
        const listPekerjaan = []
        Object.keys(response.data.data.jobs[0]).forEach((job) => {
          listPekerjaan.push(job.replace("_", " "))
        })
        setPekerjaan(listPekerjaan)
        setdata(Object.values(response.data.data.jobs[0]))
      }catch (error){
        console.log(error)
      }
    }
    useEffect(()=>{
      fetchData()
    }, [])

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
              'rgba(195, 235, 52, 0.8)',
              'rgba(71, 23, 23, 0.8)',
              'rgba(35, 64, 6, 0.8)',
              'rgba(56, 66, 61, 0.8)',
              'rgba(543, 2, 82, 0.8)',
              'rgba(43, 2, 82, 0.8)',
              'rgba(82, 2, 51, 0.8)',
              'rgba(48, 22, 28, 0.8)',
              'rgba(10, 19, 66, 0.8)',
              
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
              'rgba(195, 235, 52, 0.8)',
              'rgba(71, 23, 23, 0.8)',
              'rgba(35, 64, 6, 0.8)',
              'rgba(56, 66, 61, 0.8)',
              'rgba(543, 2, 82, 0.8)',
              'rgba(43, 2, 82, 0.8)',
              'rgba(82, 2, 51, 0.8)',
              'rgba(48, 22, 28, 0.8)',
              'rgba(10, 19, 66, 0.8)',

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