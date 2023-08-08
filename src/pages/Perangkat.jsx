import Navbar from "../components/Navbar"
import Agenda from "../components/card/AgendaCard"
import PerangkatCard from "../components/card/PerangkarCard"
import Footer from "../components/footer/footer"

function Perangkat(){
    return(
        <>
        <Navbar/>
        <main className="flex flex-col md:flex-row mt-3 px-1 md:px-10">
            <section className="md:w-3/4">
                <div>
                    <h1 className="font-bold text-slate-950 text-xl">Perangkat Desa</h1>
                    <div className="flex flex-wrap justify-center">
                        <PerangkatCard/>
                        <PerangkatCard/>
                        <PerangkatCard/>
                        <PerangkatCard/>
                        <PerangkatCard/>
                        <PerangkatCard/>
                        <PerangkatCard/>
                        <PerangkatCard/>
                        <PerangkatCard/>
                        <PerangkatCard/>
                        <PerangkatCard/>
                    </div>
                </div>
                <div>
                    <h1 className="font-bold text-slate-950 text-xl">Sejarah Desa</h1>
                </div>
            </section>
            <hr className="border border-black border-solid my-2 md:hidden"/>
            <section className="md:w-1/4">
                <Agenda/>
            </section>
        </main>
        <Footer/>
        </>
    )
}
export default Perangkat