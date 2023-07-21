/* eslint-disable no-unused-vars */
import ArtikelCard from '../components/card/ArtikelCard';
import { BiFile, BiSolidCategory } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Artikel = () => {
    const [articles, setArticles] = useState([]);
    const [tags, setTags] = useState([]);
    const [filter, setFilter] = useState('');
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
    return (
        <>
            <section className="px-5 my-3">
                <div className="flex content-center text-2xl">
                    <span className="my-auto me-2 text-gray-600">
                        <BiFile />
                    </span>
                    <h1 className="text-gray-600">Berita</h1>
                </div>
                <hr style={{ border: '0.1px solid gray', marginBottom: '20px' }} />
                <div className="flex flex-col">
                    <div>
                        {articles.length > 0 ? (
                            articles.map((article, index) => <ArtikelCard key={index} data={article} />)
                        ) : (
                            <p className="text-center">Tidak Ada Artikel</p>
                        )}
                    </div>
                    <div className="mt-3">
                        <div className="flex content-center">
                            <span className="text-2xl my-auto me-2">
                                <BiSolidCategory />
                            </span>
                            <h1 className="text-xl font-bold">Kategori</h1>
                        </div>
                        <hr style={{ border: '0.1px solid gray', marginBottom: '20px' }} />
                        <div className="flex flex-wrap gap-2">
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
        </>
    );
};

export default Artikel;
