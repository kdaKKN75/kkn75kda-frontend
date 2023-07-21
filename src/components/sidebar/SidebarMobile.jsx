import { useContext } from 'react';
import { BiHome } from 'react-icons/bi';
import NavMobileContext from '../../utils/contexts/NavMobileContext';

const SidebarMobile = () => {
    const { isOpen, setIsOpen } = useContext(NavMobileContext);

    const handleNav = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <aside
                className={`${isOpen ? 'block' : 'hidden'} transition duration-300 ease-in-out z-20 overflow-hidden`}
            >
                <div className="w-full h-screen bg-slate-700">
                    <div className="flex flex-col pt-10">
                        <button className="bg-blue-500 mx-52 mb-5 py-3 rounded-full text-gray-800" onClick={handleNav}>
                            Close
                        </button>
                        <div className="flex content-center mt-2 mx-2 px-8 py-3 hover:bg-slate-500 hover:rounded-lg">
                            <span className="my-auto me-2 text-xl">
                                <BiHome />
                            </span>
                            <p className="text-xl">Home</p>
                        </div>
                        <div className="flex content-center mt-2 mx-2 px-8 py-3 hover:bg-slate-500 hover:rounded-lg">
                            <span className="my-auto me-2 text-xl">
                                <BiHome />
                            </span>
                            <p className="text-xl">Home</p>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default SidebarMobile;
