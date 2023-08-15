import Navbar from "../components/Navbar"
import Footer from "../components/footer/footer"

function NurulAnwar (){
    return(
        <>
        <Navbar/>
        <main className="md:px-10 text-slate-950 px-1">
            <h1 className="text-3xl font-bold">Yayasan Nurul Hasan</h1>
            <div className="flex flex-wrap">
                <section className="rounded max-w-xl  shadow-md p-2 md:px-5 bg-slate-150 mb-7">
                    <h2 className="text-xl font-bold mb-3">MI Nurul Anwar</h2>
                    <img 
                        className="max-w-xs md:w-[700px]"
                        src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp" alt="" />
                </section>                
                <section className="rounded max-w-xl  shadow-md p-2 md:px-5 bg-slate-150 mb-7">
                    <h2 className="text-xl font-bold mb-3">TK Nurul Hasan</h2>
                    <img 
                        className="max-w-xs md:w-[700px]"
                        src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp" alt="" />
                </section>                
            </div>
            
            
        </main>
        <Footer/>
        </>
    )
}
export default NurulAnwar