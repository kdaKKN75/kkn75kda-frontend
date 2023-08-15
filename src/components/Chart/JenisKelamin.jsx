import { useEffect, useState } from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import client from '../../api/axios';

ChartJS.register(ArcElement, Tooltip, Legend);

function JenisKelamin (){
    const [data,setdata] = useState([])
    const [Jenis,setJenis] = useState(['Laki-Laki', 'Perempuan'])
    const fetchData = async() =>{
      try{
          const response = await client.get('https://api.koncerdarulaman.my.id/statistik/gender');
          setdata(Object.values(response.data.data.genders[0]))
        }catch (error){
          console.log(error)
        }
      }
      useEffect(()=>{
        fetchData()
      }, [])

    const dataChart = {
        labels: Jenis,
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