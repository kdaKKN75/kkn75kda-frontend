import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { BiCaretRight } from "react-icons/bi";
import Logo from '../assets/Bondowoso.png'
import { Link } from "react-router-dom";


function Navbar (){
    const [nav, setnav] = useState(`hidden`)
    const klikMenu = () => {
        var x = document.getElementById("MenuNav")
        if (nav === "block"){
            setnav("hidden")
        } else {
            setnav("block")
        }
    }
    const klikProfil = () => {
        var y = document.getElementById("MenuProfil2")
        
        if (y.style.display === "block"){
            y.style.display = "none"
        } else {
            y.style.display = "block"
        }
    }
    const klikYayasan = () => {
        var y = document.getElementById("MenuProfil1")
        
        if (y.style.display === "block"){
            y.style.display = "none"
        } else {
            y.style.display = "block"
        }
    }
    return(
        <>
        <nav className="block bg-[#10B981] h-14 md:flex justify-between items-center md:px-10 sticky top-0 text-black">
            <div className="flex ">
                <img src={Logo} alt="" className="w-12 p-1"/>
                <Link to={'/'}><p className="py-2 pl-2 m-1 md:m-1">Desa Koncer Darul Aman</p></Link>
            </div>
            <div className="">
                    <ul className={`text align-right items-center ${nav} md:flex`} id="MenuNav">
                        <Link to={'/'}><li className="py-2 pl-2 md:px-2 md:py-4 bg-[#22d69b] hover:bg-[#2ae8a9] md:bg-[#10B981] cursor-default">Home</li></Link>
                        <Link to={'/artikel'}><li className="py-2 pl-2 md:px-2 md:py-4 bg-[#22d69b] hover:bg-[#2ae8a9] md:bg-[#10B981] cursor-default">Artikel</li></Link>
                        <Link to={'/statistik'}><li className="py-2 pl-2 md:px-2 md:py-4 bg-[#22d69b] hover:bg-[#2ae8a9] md:bg-[#10B981] cursor-default">Statistik</li></Link>
                        <div>
                            <li className="flex py-2 pl-2 md:px-2 md:py-4 bg-[#22d69b] hover:bg-[#2ae8a9] items-center  md:bg-[#10B981] cursor-default md:w-44" id="dropdownMenuButton1" onClick={klikYayasan}>Yayasan Pendidikan <FaAngleDown className="mt-1 ml-2"/></li>
                            <div>
                                <ul className="md:absolute z-10 md:w-32" style={{display:"none"}} id="MenuProfil1">
                                    <Link to={'/Al-Maliki'}><li className="py-2 pl-4 flex md:px-1 bg-[#22d69b] hover:bg-[#2ae8a9] float-none cursor-default md:w-44"><BiCaretRight className="mt-1"/>Al-Maliki</li></Link>
                                    <Link to={'/Nurul Anwar'}><li className="py-2 pl-4 flex md:px-1 bg-[#22d69b] hover:bg-[#2ae8a9] float-none cursor-default md:w-44"><BiCaretRight className="mt-1"/>Nurul Hasan</li></Link>
                                    
                                </ul>
                            </div>
                        </div>
                        <div>
                            <li className="flex py-2 pl-2 md:px-2 md:py-4 bg-[#22d69b] hover:bg-[#2ae8a9] items-center  md:bg-[#10B981] cursor-default md:w-32" id="dropdownMenuButton2" onClick={klikProfil}>Profile Desa <FaAngleDown className="mt-1 ml-2"/></li>
                            <div>
                                <ul className="md:absolute z-10 md:w-32" style={{display:"none"}} id="MenuProfil2">
                                    <Link to={'/visi-misi'}><li className="py-2 pl-4 flex md:px-1 bg-[#22d69b] hover:bg-[#2ae8a9] float-none cursor-default md:w-32"><BiCaretRight className="mt-1"/>Visi & Misi</li></Link>
                                    <Link to={'/Perangkat'}><li className="py-2 pl-4 flex md:px-1 bg-[#22d69b] hover:bg-[#2ae8a9] float-none cursor-default md:w-32"><BiCaretRight className="mt-1"/>Perangkat Desa</li></Link>
                                    
                                </ul>
                            </div>
                        </div>
                    </ul>
                <button className="top-5 right-2 absolute md:hidden" onClick={klikMenu}><FaBars/></button>
            </div>
        </nav>
        </>
    )
}
export default Navbar