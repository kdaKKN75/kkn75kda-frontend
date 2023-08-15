import { useEffect, useState } from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import client from '../../api/axios';

ChartJS.register(ArcElement, Tooltip, Legend);

function Pendidikan (){
    const [data,setdata] = useState([])
    const [Pendidikan,setPendidikan] = useState([])

    const fetchData = async() =>{
      try{
          const response = await client.get('https://api.koncerdarulaman.my.id/statistik/pendidikan');
          // setPekerjaan(Object.keys(response.data.data.jobs[0]))
          const listPendidikan = []
          Object.keys(response.data.data.educations[0]).forEach((job) => {
            listPendidikan.push(job.replaceAll("_", " "))
          })
          setPendidikan(listPendidikan)
          setdata(Object.values(response.data.data.educations[0]))
        }catch (error){
          console.log(error)
        }
      }
      useEffect(()=>{
        fetchData()
      }, [])

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
              'rgba(252, 3, 3, 0.8)',
              'rgba(252, 86, 3, 0.8)',
              'rgba(252, 244, 3, 0.8)',
              'rgba(28, 252, 3, 0.8)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(252, 3, 3, 0.8)',
              'rgba(252, 86, 3, 0.8)',
              'rgba(252, 244, 3, 0.8)',
              'rgba(28, 252, 3, 0.8)',

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