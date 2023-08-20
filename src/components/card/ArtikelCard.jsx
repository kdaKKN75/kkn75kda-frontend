import { BiCalendarEdit } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const ArtikelCard = (artikel) => {
    return (
        <>
            <div className="max-w-md 2xl:max-w-lg rounded overflow-hidden shadow-lg bg-slate-50" >
                <Link to={`/artikel/${artikel.data.id}`}>
                    <img
                        className="w-full rounded-[20px] pt-4 pe-4 pb-1 ps-4"
                        src={artikel.data.thumbnail}
                        alt="Mountain"
                    />
                    <div className="px-4 py-3">
                        <span className="bg-green-100 text-gray-800 text-xs font-medium mr-2 px-3 py-1 rounded">
                            {artikel.data.tag}
                        </span>
                        <div className="font-bold text-xl my-1 text-slate-950">
                            {artikel.data.Judul}
                        </div>
                        <div className="flex content-center">
                            <span className="my-auto me-2 text-gray-600">
                                <BiCalendarEdit />
                            </span>
                            <p className="text-gray-600">{artikel.data.updatedAt}</p>
                        </div>
                        <div className="text-gray-700 text-base text-ellipsis line-clamp-2" dangerouslySetInnerHTML={{__html: artikel.data.isi}}>
                            
                        </div>
                        <Link to={`/artikel/${artikel.data.id}`} className="text-green-700 hover:underline">
                            Baca selengkapnya
                        </Link>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default ArtikelCard;
