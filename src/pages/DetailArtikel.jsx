import Navbar from "../components/Navbar"
import { BiFile } from 'react-icons/bi';
import Footer from "../components/footer/footer";
import ArtikelSideCard from "../components/card/ArticleSideCard";
import { useEffect, useState } from "react";
import client from "../api/axios";
function DetailArtikel(){
    const [side,setSide] = useState([])
    const [itemOffset, setItemOffset] = useState(0);

    const fetchData = async() =>{
        try{
            const response = await client.get('https://64550599a74f994b334fc3e6.mockapi.io/artikel');
            // console.log(response.data)
            setSide(response.data)
        }catch (error){
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    let itemPerPages = 5
    const endOffset =itemOffset + itemPerPages
    const currentItems = side.slice(itemOffset, endOffset )
    return(
        <>
        <Navbar/>
        <main className="md:flex text-slate-950 md:px-10 p-1 ">
            <article className="md:w-3/4 mb-6">
                <h1 className="text-4xl font-bold">Title</h1>
                <p>12/12/1212</p>
                <img 
                    className="w-full max-w-lg"
                    src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp" 
                    alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quas repellendus autem cupiditate aspernatur! Unde molestias, cum atque incidunt beatae ipsa obcaecati iure, nulla libero quis rem nam saepe dolorum!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quas repellendus autem cupiditate aspernatur! Unde molestias, cum atque incidunt beatae ipsa obcaecati iure, nulla libero quis rem nam saepe dolorum!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quas repellendus autem cupiditate aspernatur! Unde molestias, cum atque incidunt beatae ipsa obcaecati iure, nulla libero quis rem nam saepe dolorum!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quas repellendus autem cupiditate aspernatur! Unde molestias, cum atque incidunt beatae ipsa obcaecati iure, nulla libero quis rem nam saepe dolorum!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quas repellendus autem cupiditate aspernatur! Unde molestias, cum atque incidunt beatae ipsa obcaecati iure, nulla libero quis rem nam saepe dolorum!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quas repellendus autem cupiditate aspernatur! Unde molestias, cum atque incidunt beatae ipsa obcaecati iure, nulla libero quis rem nam saepe dolorum!</p>
                <div className="flex mt-2">
                    <p className="pr-2">Tag : </p>
                    <span className="border p-1 pt-0 bg-slate-600">Pendidikan</span>
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