import { BiCalendarEdit } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const ArtikelHomeCard = (artikel) => {
    console.log(artikel)
    return (
        <>
            <div className="max-w-md 2xl:max-w-md rounded overflow-hidden shadow-lg">
                <Link to={`/artikel/${artikel.data.id}`}>
                    <img
                        className="w-full rounded-[20px] pt-4 pe-4 pb-1 ps-4"
                        src={artikel.data.thumnail}
                        alt={artikel.data.judul}
                    />
                    <div className="px-4 py-3">
                        <span className="bg-green-100 text-gray-800 text-xs font-medium mr-2 px-3 py-1 rounded">
                            {artikel.data.tag}
                        </span>
                        <div className="font-bold text-xl my-1" >
                            {artikel.data.judul}
                        </div>
                        <div className="flex content-center">
                            <span className="my-auto me-2 text-gray-600">
                                <BiCalendarEdit />
                            </span>
                            <p className="text-gray-600">{artikel.data.updatedAt}</p>
                        </div>
                        <p className="text-gray-700 text-base text-ellipsis line-clamp-2" dangerouslySetInnerHTML={{__html: artikel.data.isi}}>
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
