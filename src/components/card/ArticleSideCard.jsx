import { Link } from 'react-router-dom';
function ArtikelSideCard(data){
    console.log(data)
    return(
        <>
        <div className=" rounded overflow-hidden shadow-md my-2 ">
            <Link to={''} className='flex'>
                <img
                    className="w-full max-w-[150px] rounded-[10px] pt-4 pe-4 pb-4 ps-4"
                    src={data.data.thumbnail}
                    alt={data.data.judul}
                />
                <div>
                    <h1 className="font-bold text-xl pt-4 text-ellipsis line-clamp-1">{data.data.judul}</h1>
                    <p>{data.data.updatedAt}</p>
                </div>
            </Link>
        </div>
        </>
    )
}
export default ArtikelSideCard