import Logo from '../assets/Bondowoso.png'
import ArtikelCard from '../components/card/ArtikelCard'
import Footer from '../components/footer/footer'
import Penduduk from "../assets/penduduk.png"
import Dusun from "../assets/Dusun.png"
import Luas from "../assets/Luas.png"


function Home (){
    return(
        <>
        <section className='my-3 mx-2 md:my-20'>
            <div className='flex flex-col md:flex-row-reverse content-center md:justify-between'>
                <img src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp" alt="" className='w-80 md:w-96 m-auto md:m-0 rounded-md'/>
                <div>
                    <h1 className='mt-2 text-2xl md:text-4xl font-bold'>Koncer Darul Aman</h1>
                    <p className='my-2 md:w-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptate ad velit dignissimos sit dolorum, in rem inventore qui quisquam nam quidem exercitationem doloremque delectus id impedit! Quia, officiis cupiditate.</p>
                    <button className='bg-lime-500 py-2 px-3 rounded-md my-2 items-center'>Tentang Desa</button>
                </div>
            </div>
        </section>
        <section className='flex my-4 py-10 px-2 justify-around bg-lime-500'>
            <div>
                <img src={Penduduk} alt="" className="w-24 h-16 my-4 m-auto"/>
                <h2>Jumlah Penduduk</h2>
                <p className='text-center'>12334 penduduk</p>
            </div>
            <div>
                <img src={Dusun} alt="" className="w-24 h-24 m-auto"/>
                <h2>Jumlah Dusun</h2>
                <p className='text-center'>3 dusun</p>
            </div>
            <div>
                <img src={Luas} alt="" className="w-24 h-24 m-auto"/>
                <h2>Luas Wilayah</h2>
                <p className='text-center'>732 KM<sup>2</sup></p>
            </div>
        </section>
        <section className='mx-2'>
            <div>
                <h2>Artikel Desa</h2>
                <div className='flex-wrap'>
                <ArtikelCard/>
                <ArtikelCard/>
                <ArtikelCard/>
                <ArtikelCard/>
                </div>
                <div className='flex justify-center'>
                    <button className='bg-lime-500 py-2 px-3 rounded-md my-2'>Selengkapnya</button>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}
export default Home