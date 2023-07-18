import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { BiCaretRight } from "react-icons/bi";
import Logo from '../assets/Bondowoso.png'


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
        var y = document.getElementById("MenuProfil")
        
        if (y.style.display === "block"){
            y.style.display = "none"
        } else {
            y.style.display = "block"
        }
    }
    return(
        <>
        <nav className="block bg-lime-600 h-14 relative md:flex justify-between items-center">
            <div className="flex ">
                <img src={Logo} alt="" className="w-12 p-1"/>
                <p className="py-2 pl-2 m-1 md:m-1">Sistem Informasi Desa</p>
            </div>
            <div className="">
                    <ul className={`text align-right items-center ${nav} md:flex`} id="MenuNav">
                        <li className="py-2 pl-2 md:px-2 md:py-4 bg-lime-300 hover:bg-lime-500 md:bg-lime-600 cursor-default">Home</li>
                        <li className="py-2 pl-2 md:px-2 md:py-4 bg-lime-300 hover:bg-lime-500 md:bg-lime-600 cursor-default">Artikel</li>
                        <li className="py-2 pl-2 md:px-2 md:py-4 bg-lime-300 hover:bg-lime-500 md:bg-lime-600 cursor-default">Statistik</li>
                        <div>
                            <li className="flex py-2 pl-2 md:px-2 md:py-4 bg-lime-300 hover:bg-lime-500 items-center  md:bg-lime-600 cursor-default" id="dropdownMenuButton1" onClick={klikProfil}>Profile Desa <FaAngleDown className="mt-1 ml-2"/></li>
                            <div>
                                <ul className="md:absolute z-10 md:w-32" style={{display:"none"}} id="MenuProfil">
                                    <li className="py-2 pl-4 flex md:px-1 bg-lime-300 hover:bg-lime-500 float-none cursor-default"><BiCaretRight className="mt-1"/>Visi & Misi</li>
                                    <li className="py-2 pl-4 flex md:px-1 bg-lime-300 hover:bg-lime-500 float-none cursor-default"><BiCaretRight className="mt-1"/>Perangkat Desa</li>
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