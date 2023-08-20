import { useState } from "react"
import JenisKelamin from "../components/Chart/JenisKelamin"
import Pekerjaan from "../components/Chart/Pekerjaan"
import Pendidikan from "../components/Chart/Pendidikan"
import Umur from "../components/Chart/Umur"
import Navbar from "../components/Navbar"
import Footer from "../components/footer/footer"
import { BiPieChartAlt } from 'react-icons/bi';

function Statistik(){
    const [pendidikan,setpendidikan] = useState(true)
    const [umur,setumur] = useState(false)
    const [pekerjaan,setpekerjaan] = useState(false)
    const [jenisKelamin,setkelamin] = useState(false)
    window.scrollTo(0, 0)
    const ShowPendidikan = () =>{
        setpendidikan(true)
        setpekerjaan(false)
        setkelamin(false)
        setumur(false)
        window.scrollTo(0, 0)
    }
    const ShowPekerjaan = () =>{
        setpendidikan(false)
        setpekerjaan(true)
        setkelamin(false)
        setumur(false)
        window.scrollTo(0, 0)
    }
    const ShowKelamin = () =>{
        setpendidikan(false)
        setpekerjaan(false)
        setkelamin(true)
        setumur(false)
        window.scrollTo(0, 0)

    }
    const ShowUmur = () =>{
        setpendidikan(false)
        setpekerjaan(false)
        setkelamin(false)
        setumur(true)
        window.scrollTo(0, 0)
    }
    return(
        <>
        <Navbar/>
        <main className="flex flex-col-reverse px-1 md:px-10 my-3 md:flex-row md:gap-10 md:mt-5 text-slate-950">
            <div className="md:w-2/6 rounded-md bg-slate-50 p-5 h-fit shadow-lg">
                {pendidikan &&(
                    <ul>
                        <li className="flex border-b-[0.1px] border-gray-400 p-2 pt-1 font-bold text-xl pb-3"><BiPieChartAlt className="mt-1.5 mr-2"/>Statistik Penduduk</li>
                        <li className="border-b-[0.1px] border-gray-400 p-3 pt-2 cursor-default bg-emerald-500" onClick={ShowPendidikan}>Pendidikan</li>
                        <li className="border-b-[0.1px] border-gray-400 p-3 pt-2 cursor-default" onClick={ShowPekerjaan} >Pekerjaan</li>
                        <li className="border-b-[0.1px] border-gray-400 p-3 pt-2 cursor-default" onClick={ShowKelamin}>Jenis Kelamin</li>
                        <li className="border-b-[0.1px] border-gray-400 p-3 pt-2 cursor-default" onClick={ShowUmur}>Umur</li>
                    </ul>
                )}
                {pekerjaan &&(
                    <ul>
                        <li className="flex border-b-[0.1px] border-gray-400 p-2 pt-1 font-bold text-xl pb-3"><BiPieChartAlt className="mt-1.5 mr-2"/>Statistik Penduduk</li>
                        <li className="border-b-[0.1px] border-gray-400 p-3 pt-2 cursor-default " onClick={ShowPendidikan}>Pendidikan</li>
                        <li className="border-b-[0.1px] border-gray-400 p-3 pt-2 cursor-default bg-emerald-500" onClick={ShowPekerjaan} >Pekerjaan</li>
                        <li className="border-b-[0.1px] border-gray-400 p-3 pt-2 cursor-default" onClick={ShowKelamin}>Jenis Kelamin</li>
                        <li className="border-b-[0.1px] border-gray-400 p-3 pt-2 cursor-default" onClick={ShowUmur}>Umur</li>
                    </ul>
                )}
                {umur &&(
                    <ul>
                        <li className="flex border-b-[0.1px] border-gray-400 p-2 pt-1 font-bold text-xl pb-3"><BiPieChartAlt className="mt-1.5 mr-2"/>Statistik Penduduk</li>
                        <li className="border-b-[0.1px] border-gray-400 p-3 pt-2 cursor-default " onClick={ShowPendidikan}>Pendidikan</li>
                        <li className="border-b-[0.1px] border-gray-400 p-3 pt-2 cursor-default" onClick={ShowPekerjaan} >Pekerjaan</li>
                        <li className="border-b-[0.1px] border-gray-400 p-3 pt-2 cursor-default " onClick={ShowKelamin}>Jenis Kelamin</li>
                        <li className="border-b-[0.1px] border-gray-400 p-3 pt-2 cursor-default bg-emerald-500" onClick={ShowUmur}>Umur</li>
                    </ul>
                )}
                {jenisKelamin &&(
                    <ul>
                        <li className="flex border-b-[0.1px] border-gray-400 p-2 pt-1 font-bold text-xl pb-3"><BiPieChartAlt className="mt-1.5 mr-2"/>Statistik Penduduk</li>
                        <li className="border-b-[0.1px] border-gray-400 p-3 pt-2 cursor-default " onClick={ShowPendidikan}>Pendidikan</li>
                        <li className="border-b-[0.1px] border-gray-400 p-3 pt-2 cursor-default" onClick={ShowPekerjaan} >Pekerjaan</li>
                        <li className="border-b-[0.1px] border-gray-400 p-3 pt-2 cursor-default bg-emerald-500" onClick={ShowKelamin}>Jenis Kelamin</li>
                        <li className="border-b-[0.1px] border-gray-400 p-3 pt-2 cursor-default " onClick={ShowUmur}>Umur</li>
                    </ul>
                )}
            </div>
            
                    {pendidikan &&(
                        <div className="w-full max-w-4xl mb-4 rounded-md bg-slate-50 p-5 shadow-lg">
                            <p className="text-lg font-bold">Demografi Berdasarkan Pendidikan</p>
                            <hr className="mb-4 mt-2 border-gray-400" />
                            <div className="max-w-2xl m-auto">
                                <Pendidikan/>
                            </div>
                        </div>
                    )}
                    {pekerjaan &&(
                        <div className="w-full max-w-4xl mb-4 rounded-md bg-slate-50 p-5 shadow-lg">
                            <p className="text-lg font-bold">Demografi Berdasarkan Pekerjaan</p>
                            <hr className="mb-4 mt-2 border-gray-400" />
                            <div className="max-w-2xl m-auto">
                                <Pekerjaan/>
                            </div>
                        </div>
                        
                    )}
                    {jenisKelamin &&(
                        <div className="w-full max-w-4xl mb-4 rounded-md bg-slate-50 p-5 shadow-lg">
                            <p className="text-lg font-bold">Demografi Berdasarkan Jenis Kelamin</p>
                            <hr className="mb-4 mt-2 border-gray-400" />
                            <div className="max-w-2xl m-auto">
                                <JenisKelamin/>
                            </div>
                        </div>
                        
                    )}
                    {umur &&(
                        <div className="w-full max-w-4xl mb-4 rounded-md bg-slate-50 p-5 shadow-lg">
                            <p className="text-lg font-bold">Demografi Berdasarkan Umur</p>
                            <hr className="mb-4 mt-2 border-gray-400" />
                            <div className="max-w-2xl m-auto">
                                <Umur/>
                            </div>
                        </div>
                        
                    )}
                
                {/* <Pekerjaan/>
                <JenisKelamin/>
                <Umur/> */}
            
        </main>
        <Footer/>
        </>
    )
}
export default Statistik