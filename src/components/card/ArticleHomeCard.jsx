import { BiCalendarEdit } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const ArtikelHomeCard = (artikel) => {
    return (
        <>
            <div className="max-w-md 2xl:max-w-md rounded overflow-hidden shadow-lg">
                <Link to={`/artikel/${artikel.id}`}>
                    <img
                        className="w-full rounded-[20px] pt-4 pe-4 pb-1 ps-4"
                        src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
                        alt="Mountain"
                    />
                    <div className="px-4 py-3">
                        <span className="bg-green-100 text-gray-800 text-xs font-medium mr-2 px-3 py-1 rounded">
                            Program Kerja
                        </span>
                        <div className="font-bold text-xl my-1">
                            Mountain Lorem ipsum, dolor sit amet consectetur adipisicing elit
                        </div>
                        <div className="flex content-center">
                            <span className="my-auto me-2 text-gray-600">
                                <BiCalendarEdit />
                            </span>
                            <p className="text-gray-600">18 Juni 2023</p>
                        </div>
                        <p className="text-gray-700 text-base text-ellipsis line-clamp-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores
                            et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                        <Link to={artikel.id} className="text-green-700 hover:underline">
                            Baca selengkapnya
                        </Link>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default ArtikelHomeCard;
