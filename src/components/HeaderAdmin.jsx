import { useContext } from 'react';
import { BiMenu, BiLogOut, BiSolidUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import NavMobileContext from '../utils/contexts/NavMobileContext';

const HeaderAdmin = () => {
    const { isOpen, setIsOpen } = useContext(NavMobileContext);

    const handleLogout = () => {
        console.log('Telah Logout');
    };

    const handleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="z-40 py-4 bg-white shadow-bottom">
            <div className="container flex items-center justify-between h-10 px-6 mx-auto text-purple-600">
                <h1 className="hidden lg:block lg:text-xl lg:font-bold">Sistem Informasi Desa</h1>
                <button
                    className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
                    onClick={handleNav}
                    aria-label="Menu"
                >
                    <BiMenu className="w-6 h-6" aria-hidden="true" />
                </button>
                {/* Profile Component */}
                <ul className="flex items-center flex-shrink-0 space-x-6">
                    <li className="relative">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="m-1">
                                <img
                                    className="align-middle rounded-full w-8 h-8"
                                    src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                                    alt=""
                                    aria-hidden="true"
                                />
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-md w-52"
                            >
                                <li className="hover:bg-lime-200 hover:rounded-lg">
                                    <Link to={'/admin/profile'} className="hover:text-black">
                                        <div className="flex content-center">
                                            <BiSolidUser className="m-auto me-2 h-4 w-4" />
                                            <p>Profile</p>
                                        </div>
                                    </Link>
                                </li>
                                <li className="hover:bg-lime-200 hover:rounded-lg">
                                    <button className="hover:text-black" onClick={handleLogout}>
                                        <div className="flex content-center">
                                            <BiLogOut className="m-auto me-2 h-4 w-4" />
                                            <p>Logout</p>
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default HeaderAdmin;
