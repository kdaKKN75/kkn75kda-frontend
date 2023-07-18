import Logo from '../assets/Bondowoso.png'

function Home (){
    return(
        <>
        <section className='my-3'>
            <div className='flex flex-col content-center'>
                <img src={Logo} alt="" className='w-60 m-auto'/>
                <div>
                    <h1>Koncer Darul Aman</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptate ad velit dignissimos sit dolorum, in rem inventore qui quisquam nam quidem exercitationem doloremque delectus id impedit! Quia, officiis cupiditate.</p>
                    <button>Tentang Desa</button>
                </div>
            </div>
        </section>
        <section className='flex my-4 py-10 justify-around bg-lime-500'>
            <div>
                <h2>Jumlah Penduduk</h2>
                <p className='text-center'>12334 penduduk</p>
            </div>
            <div>
                <h2>Jumlah Dusun</h2>
                <p className='text-center'>3 dusun</p>
            </div>
            <div>
                <h2>Luas Wilayah</h2>
                <p className='text-center'>732 KM<sup>2</sup></p>
            </div>
        </section>
        <section>
            <div>
                <h2>Artikel Desa</h2>
                <div>
                    
                </div>
            </div>
        </section>
        </>
    )
}
export default Home