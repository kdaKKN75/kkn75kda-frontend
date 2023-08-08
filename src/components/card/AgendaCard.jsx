import Kegiatan from "./KegiatanCard"

function Agenda(){
    return(
        <>
        <section>
        <div className=" rounded-md bg-[#10B981] h-fit shadow-lg">
            <h1 className="text-center text-slate-950 py-3 font-medium">Agenda Kegiatan</h1>
            <div className="bg-slate-50 text-slate-950 rounded-b-md pt-1">
                <Kegiatan/>
                <Kegiatan/>
                <Kegiatan/>
            </div>
        </div>    
        
        </section>
        </>
    )
}
export default Agenda