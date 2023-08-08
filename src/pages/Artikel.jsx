/* eslint-disable no-unused-vars */
import ArtikelCard from '../components/card/ArtikelCard';
import { BiFile, BiSolidCategory } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/footer/footer';
import client from '../api/axios';
import ReactPaginate from 'react-paginate';

const Artikel = () => {
    const [articles, setArticles] = useState([]);
    const [tags, setTags] = useState([]);
    const [filter, setFilter] = useState('');
    const [dataFetched, setDataFetched] = useState(false);
    const nav = useNavigate();

    const formatTag = (tag) => {
        const newTag = tag.toLowerCase().replace(' ', '-');

        return newTag;
    };

    useEffect(() => {
        if (!filter) {
            nav('/artikel');
        } else {
            nav(`/artikel?tag=${filter}`);
        }
    }, [filter, nav]);

    const fetchData = async() =>{
        try{
            const response = client.get('');
            if(response.data.status = true){
                setDataFetched(true);
                setArticles()
            }
        }catch (error){
            console.log(error)
        }
    }
    
    return (
        <>
            <Navbar/>
            <section className="px-1 md:px-10 my-3 ">
                <div className="flex flex-col md:flex-row">
                    <div className='md:w-3/4'>
                        <div className="flex content-center text-2xl">
                            <span className="my-auto me-2 text-slate-950">
                                <BiFile />
                            </span>
                            <h1 className="text-slate-950">Berita</h1>
                        </div>
                        <hr style={{ border: '0.1px solid gray', marginBottom: '20px',marginRight: '25px' }} />
                        <div className='flex flex-wrap md:gap-x-0 2xl:gap-x-5 md:gap-y-4 '>
                            <ArtikelCard/>
                            <ArtikelCard/>
                            <ArtikelCard/>
                            <ArtikelCard/>
                            <ArtikelCard/>
                            {articles.length > 0 ? (
                                articles.map((article, index) => <ArtikelCard key={index} data={article} />)
                            ) : (
                                <p className="text-center">Tidak Ada Artikel</p>
                            )}
                        </div>
                        <div className='text-slate-950 mt-5'>
                            <ReactPaginate
                                previousLabel={'Previous'}
                                nextLabel={'Next'}
                                breakLabel={"..."}
                                pageCount={6}
                                marginPagesDisplayed={2}
                                className='flex justify-center md:justify-start'
                                pageClassName='border border-[#10B981] text-emerald-500 mx-1 px-2 pb-1'
                                nextClassName='border border-[#10B981] text-emerald-500 mx-1 px-2 pb-1'
                                previousClassName='border border-[#10B981] text-emerald-500 mx-1 px-2 pb-1'
                                breakClassName='text-emerald-500'/>

                        </div>
                    </div>
                    <div className="mt-3 md:w-1/4 md:mt-1">
                        <div className="flex content-center">
                            <span className="text-2xl my-auto me-2 text-slate-950">
                                <BiSolidCategory />
                            </span>
                            <h1 className="text-xl font-bold text-slate-950">Kategori</h1>
                        </div>
                        <hr style={{ border: '0.1px solid gray', marginBottom: '20px' }} />
                        <div className="flex flex-wrap gap-2">
                            <button className="text-emerald-500 border border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold px-3 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Program Kerja</button>
                            <button className="text-emerald-500 border border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold px-3 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">kesehatan</button>
                            <button className="text-emerald-500 border border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold px-3 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Pendidikan</button>
                            <button className="text-emerald-500 border border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold px-3 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Pertanian</button>
                            <button className="text-emerald-500 border border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold px-3 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Program Kerja</button>
                            <button className="text-emerald-500 border border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold px-3 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">kesehatan</button>
                            {tags.length > 0
                                ? tags.map((tag, index) => (
                                      <button
                                          key={index}
                                          className="text-emerald-500 border border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold px-3 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                          onClick={() => setFilter(formatTag(tag.nama))}
                                      >
                                          {tag.nama}
                                      </button>
                                  ))
                                : ''}
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default Artikel;
