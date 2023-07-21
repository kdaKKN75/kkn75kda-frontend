import ArtikelCard from '../components/card/ArtikelCard';

const Artikel = () => {
    return (
        <>
        <div className='flex mt-5'>
            <main className='flex flex-wrap mr-8 w-3/4 justify-around'>
            <ArtikelCard className="mr-10"/>
            <ArtikelCard/>
            <ArtikelCard/>
            <ArtikelCard/>
            </main>
            <aside className=' w-1/4'>
                <button className='bg-slate-400 px-4 py-1 m-1'>Pendidikan</button>
                <button className='bg-slate-400 px-4 py-1 m-1'>Kesehatan</button>
                <button className='bg-slate-400 px-4 py-1 m-1'>Budaya</button>
                <button className='bg-slate-400 px-4 py-1 m-1'>Masyarakat</button>
                <button className='bg-slate-400 px-4 py-1 m-1'>Pendidikan</button>
                <button className='bg-slate-400 px-4 py-1 m-1'>Kesehatan</button>
                <button className='bg-slate-400 px-4 py-1 m-1'>Budaya</button>
                <button className='bg-slate-400 px-4 py-1 m-1'>Masyarakat</button>
                
            </aside>
        </div>
        </>
    );
};

export default Artikel;
