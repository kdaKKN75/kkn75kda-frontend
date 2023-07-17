import { FaBars } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

function NavbarMoblie (){
    const klikMenu = () => {
        var x = document.getElementById("MenuNav")
        if (x.style.display === "block"){
            x.style.display = "none"
        } else {
            x.style.display = "block"
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
        <nav className="block bg-lime-600 h-10 relative">
            <div className="h-10">
                <p className="py-2  pl-2">logo</p>
                    <ul className="block text align-right items-center" style={{display:"none"}} id="MenuNav">
                        <li className="py-2 pl-2 bg-lime-300">Home</li>
                        <li className="py-2 pl-2 bg-lime-300">Artikel</li>
                        <li className="py-2 pl-2 bg-lime-300">Statistik</li>
                        <li className="flex py-2 pl-2 bg-lime-300 items-center" onClick={klikProfil}>Profile Desa <FaAngleDown className="mt-1 ml-2"/></li>
                        <ul style={{display:"none"}} id="MenuProfil">
                            <li className="py-2 pl-5 bg-lime-300">Visi & Misi</li>
                            <li className="py-2 pl-5 bg-lime-300">Perangkat Desa</li>
                        </ul>
                    </ul>
                <button className="top-3 right-2 absolute" onClick={klikMenu}><FaBars/></button>
            </div>
        </nav>
        </>
    )
}
export default NavbarMoblie