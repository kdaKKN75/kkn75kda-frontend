import Navbar from "../components/Navbar"
import Footer from "../components/footer/footer"
import TKPaud from "../assets/TK Almaliki.png"
import AlMaliki from "../assets/AlMaliki.jpg"

function Almaliki (){
    return(
        <>
        <Navbar/>
        <main className="md:px-10 text-slate-950 px-1">
            <h1 className="text-3xl font-bold">Yayasan Al-Maliki</h1>
            <div className="flex flex-wrap">
                <section className="rounded max-w-xl  shadow-md p-2 md:px-5 bg-slate-150 mb-7">
                    <h2 className="text-xl font-bold mb-3">PAUD Al-Maliki</h2>
                    <img 
                        className="max-w-xs md:w-[700px]"
                        src={TKPaud} alt="Paud Al-Maliki" />
                </section>                
                <section className="rounded max-w-xl  shadow-md p-2 md:px-5 bg-slate-150 mb-7">
                    <h2 className="text-xl font-bold mb-3">TK Al-Maliki</h2>
                    <img 
                        className="max-w-xs md:w-[700px]"
                        src={TKPaud} alt="TK Al-Maliki" />
                </section>                
                <section className="rounded max-w-xl  shadow-md p-2 md:px-5 bg-slate-150 mb-7">
                    <h2 className="text-xl font-bold mb-3">MI Nurul Huda</h2>
                    <img 
                        className="max-w-xs md:w-[700px]"
                        src={AlMaliki} alt="" />
                </section>                
                <section className="rounded max-w-xl  shadow-md p-2 md:px-5 bg-slate-150 mb-7">
                    <h2 className="text-xl font-bold mb-3">Mts Nurul Huda</h2>
                    <img 
                        className="max-w-xs md:w-[700px]"
                        src={AlMaliki} alt="" />
                </section>                
                <section className="rounded max-w-xl  shadow-md p-2 md:px-5 bg-slate-150 mb-7">
                    <h2 className="text-xl font-bold mb-3">MA Nurul Huda</h2>
                    <img 
                        className="max-w-xs md:w-[700px]"
                        src={AlMaliki} alt="" />
                </section>                
                <section className="rounded max-w-xl  shadow-md p-2 md:px-5 bg-slate-150 mb-7">
                    <h2 className="text-xl font-bold mb-3">STAI Al-Maliki</h2>
                    <img 
                        className="max-w-xs md:w-[700px]"
                        src={AlMaliki} alt="" />
                </section>                
            </div>         
            
        </main>
        <Footer/>
        </>
    )
}
export default Almaliki