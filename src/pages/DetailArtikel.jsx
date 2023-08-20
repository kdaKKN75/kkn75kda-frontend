import Navbar from "../components/Navbar"
import { BiFile } from 'react-icons/bi';
import Footer from "../components/footer/footer";
import ArtikelSideCard from "../components/card/ArticleSideCard";
import { useEffect, useState } from "react";
import client from "../api/axios";
import { useParams } from "react-router-dom";

function DetailArtikel(){
    const [side,setSide] = useState([])
    const [artikelID,setArtikelID] = useState([])
    const [itemOffset, setItemOffset] = useState(0);
    let {id} = useParams() 

    const fetchData = async() =>{
        try{
            const response = await client.get(`/artikel`);
            // console.log(response.data)
            setSide(response.data.data.artikels)
        }catch (error){
            console.log(error)
        }
    }
    const fetchArtikel = async() =>{
        try{
            const response = await client.get(`/artikel/${id}`);
            // console.log(response.data)
            setArtikelID(response.data.data.artikel)
        }catch (error){
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchData()
        fetchArtikel()
    },[])
    let itemPerPages = 5
    const endOffset =itemOffset + itemPerPages
    const currentItems = side.slice(itemOffset, endOffset )

    return(
        <>
        <Navbar/>
        <main className="md:flex text-slate-950 md:px-10 p-1 ">
            <article className="md:w-3/4 mb-6">
                <h1 className="text-4xl font-bold">{artikelID[0]?.judul}</h1>
                <p>{artikelID[0]?.updatedAt}</p>
                <img 
                    className="w-full max-w-lg"
                    src={artikelID[0]?.thumbnail} 
                    alt={artikelID[0]?.judul} />
                <div dangerouslySetInnerHTML={{__html: artikelID[0]?.isi}}></div>
                <div className="flex mt-2">
                    <p className="pr-2">Tag : </p>
                    <span className="">{artikelID[0]?.tag}</span>
                </div>
            </article>
            <aside className="md:w-1/4">
                <div className="flex content-center text-2xl">
                    <span className="my-auto me-2 text-gray-600">
                    <BiFile />
                    </span>
                    <h1 className="text-gray-600">Berita Terkait</h1>
                </div>
                <hr style={{ border: '0.1px solid gray', marginBottom: '20px' }} />
                <div>
                {side.length > 0 ? (
                    currentItems.map((currentItems, index) => <ArtikelSideCard key={index} data={currentItems} />)
                    ) : (
                    <p className="text-center">Tidak Ada Artikel</p>
                )}
                </div>
            </aside>
        </main>
        <Footer/>
        </>
    )
}
export default DetailArtikel