import { FaAngleDown } from "react-icons/fa";
function Navbar(){
    return(
        <>
        <nav className="flex bg-lime-600 h-10 relative justify-between">
                <p className="py-2  pl-2">logo</p>
            <div className="flex h-10 align-right">
                    <ul className="flex text align-right items-center" id="MenuNav">
                        <li className="py-2 px-3 bg-lime-600">Home</li>
                        <li className="py-2 px-3 bg-lime-600">Artikel</li>
                        <li className="py-2 px-3 bg-lime-600">Statistik</li>
                        <li className="flex py-2 px-3 bg-lime-600 items-center">Profile Desa <FaAngleDown className="mt-1 ml-2"/></li>
                        <ul style={{display:"none"}} id="MenuProfil">
                            <li className="py-2 pl-5 bg-lime-300">Visi & Misi</li>
                            <li className="py-2 pl-5 bg-lime-300">Perangkat Desa</li>
                        </ul>
                    </ul>
            </div>
        </nav>
        </>
    )
}
export default Navbar