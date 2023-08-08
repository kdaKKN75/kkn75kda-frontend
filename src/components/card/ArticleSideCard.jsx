import { Link } from 'react-router-dom';
function ArtikelSideCard(){
    return(
        <>
        <div className=" rounded overflow-hidden shadow-lg my-2">
            <Link to={''} className='flex'>
                <img
                    className="w-full max-w-[150px] rounded-[20px] pt-4 pe-4 pb-1 ps-4"
                    src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
                    alt="Mountain"
                />
                <div>
                    <h1 className="font-bold text-xl pt-4 text-ellipsis line-clamp-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
                    <p>12/12/1212</p>
                </div>
            </Link>
        </div>
        </>
    )
}
export default ArtikelSideCard