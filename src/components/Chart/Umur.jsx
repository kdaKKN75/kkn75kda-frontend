import { useEffect, useState } from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import client from '../../api/axios';

ChartJS.register(ArcElement, Tooltip, Legend);

function Umur (){
    const [data,setdata] = useState([])
    const [umur,setumur] = useState([])

    const fetchData = async() =>{
      try{
          const response = await client.get('https://api.koncerdarulaman.my.id/statistik/umur');
          // setPekerjaan(Object.keys(response.data.data.jobs[0]))
          const listUmur = []
          let t = 0
          Object.keys(response.data.data.ages[0]).forEach((job) => {
            listUmur.push(job.replace(/_/g, match => ++t === 2 ? '-' : match))
            t = 0
          })
          const ListTemp = []
          listUmur.forEach((umur)=>{
            ListTemp.push(umur.replaceAll("_"," "))
          })
          setumur(ListTemp)
          setdata(Object.values(response.data.data.ages[0]))
        }catch (error){
          console.log(error)
        }
      }
      useEffect(()=>{
        fetchData()
      }, [])

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