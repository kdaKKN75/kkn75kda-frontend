import { BiHome } from 'react-icons/bi';

const SideBar = () => {
    return (
        <aside className="w-60 h-screen fixed bg-slate-700">
            <div className="pt-3 ps-4 pe-1">
                <div className="flex content-center text-md font-medium ps-4 py-2 mb-3 hover:border-s-4">
                    <BiHome className="my-auto me-3" />
                    <p>Dashboard</p>
                </div>
                <div className="flex content-center text-md font-medium ps-4 py-2 mb-3 hover:border-s-4">
                    <BiHome className="my-auto me-3" />
                    <p>Home</p>
                </div>
                <div className="flex content-center text-md font-medium ps-4 py-2 mb-3 hover:border-s-4">
                    <BiHome className="my-auto me-3" />
                    <p>Home</p>
                </div>
            </div>
        </aside>
    );
};

export default SideBar;
