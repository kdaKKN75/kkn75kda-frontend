import Logo from '../assets/Bondowoso.png'
import Footer from '../components/footer/footer'
import Penduduk from "../assets/penduduk.png"
import Dusun from "../assets/Dusun.png"
import Luas from "../assets/Luas.png"
import school from "../assets/school.png"
import Navbar from '../components/Navbar'
import ArtikelHomeCard from '../components/card/ArticleHomeCard'
import { BiFile } from 'react-icons/bi';
import { Link } from 'react-router-dom'


function Home (){
    return(
        <>
        <Navbar/>
        <main>
            <section className='my-3 mx-2 md:my-20 text-slate-950 md:px-10'>
                <div className='flex flex-col md:flex-row-reverse content-center md:justify-between'>
                    <img src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp" alt="" className='w-80 md:w-96 m-auto md:m-0 rounded-md'/>
                    <div>
                        <h1 className='mt-2 text-2xl md:text-4xl font-bold'>Koncer Darul Aman</h1>
                        <p className='my-2 md:w-96'>Desa Koncer Darul Aman Merupakan salah satu desa di kabupaten Bondowoso yang terletak di kecamatan Tenggarang. Desa ini  .</p>
                        <Link to ={''}><button className='bg-[#10B981] py-2 px-3 rounded-md my-2 items-center'>Tentang Desa</button></Link>
                    </div>
                </div>
            </section>
            <section className='flex flex-col md:flex-row my-4 py-10 px-2 justify-around bg-[#10B981] text-slate-950 md:px-10'>
                <div>
                    <img src={Penduduk} alt="" className="w-24 h-16 my-4 m-auto"/>
                    <h2 className='text-center'>Jumlah Penduduk</h2>
                    <p className='text-center'>12334 penduduk</p>
                </div>
                <div>
                    <img src={Dusun} alt="" className="w-24 h-24 m-auto"/>
                    <h2 className='text-center'>Jumlah Dusun</h2>
                    <p className='text-center'>3 dusun</p>
                </div>
                <div>
                    <img src={Luas} alt="" className="w-24 h-24 m-auto"/>
                    <h2 className='text-center'>Luas Wilayah</h2>
                    <p className='text-center'>111,96 KM<sup>2</sup></p>
                </div>
                <div>
                    <img src={school} alt="" className="w-24 h-24 m-auto"/>
                    <h2 className='text-center'>Instansi Pendidikan</h2>
                    <p className='text-center'>8 Instansi</p>
                </div>
            </section>
            <section className='mx-2 text-slate-950 md:px-10'>
                <div>
                    <h2 className='flex text-xl font-bold'><BiFile className='my-auto mr-2'/>Artikel Desa</h2>
                    <div className='flex flex-wrap md:gap-4 mb-2'>
                        <ArtikelHomeCard/>
                        <ArtikelHomeCard/>
                        <ArtikelHomeCard/>
                        <ArtikelHomeCard/>
                        <ArtikelHomeCard/>
                        <ArtikelHomeCard/>
                    </div>
                    <div className='flex justify-center mb-2'>
                        <Link to={'/artikel'}><button className='bg-[#10B981] py-2 px-3 rounded-md my-2'>Selengkapnya</button></Link>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
        </>
    )
}
export default Home