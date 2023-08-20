import { useEffect, useState } from "react"
import client from "../../api/axios"
import Kegiatan from "./KegiatanCard"

function Agenda(){
    const [kegiatan, setKegiatan] = useState([])
    const fetchData = async()=>{
        try{
            const response = await client.get('/agenda')
            setKegiatan(response.data.data.agenda)
        } catch (error){
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <>
        <section>
        <div className=" rounded-md bg-[#10B981] h-fit shadow-lg">
            <h1 className="text-center text-slate-950 py-3 font-medium">Agenda Kegiatan</h1>
            <div className="bg-slate-50 text-slate-950 rounded-b-md pt-1">
            {kegiatan.length > 0 ? (
                kegiatan.map((kegiatan, index) => <Kegiatan key={index} data={kegiatan} />)
                ) : (
                <div className="py-5 text-center">
                    <p>Tidak Ada Kegiatan</p>
                </div>
            )}
                
            </div>
        </div>    
        
        </section>
        </>
    )
}
export default Agenda