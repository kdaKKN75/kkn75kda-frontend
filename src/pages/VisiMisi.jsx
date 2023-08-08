import Navbar from "../components/Navbar";
import Agenda from "../components/card/AgendaCard";
import Footer from "../components/footer/footer";

const VisiMisi = () => {
    return (
        <>
        <Navbar/>
        <main className="flex flex-col md:flex-row mx-1 md:px-10 md:mb-10">
            <section className="text-slate-950 md:w-3/4">
                <h1 className="text-3xl font-bold text-center pt-5">VISI DAN MISI DESA KONCER DARUL AMAN</h1>
                <article className="mt-3">
                    <h1 className="text-3xl font-bold">Visi</h1>
                    <p>
                        TERWUJUDNYA MASYARAKAT KONCER DARUL AMAN YANG RELIGIUS, MAJU, DAN BERDAYA SAING NATIONAL.
                    </p>
                </article>
                <article className="mt-3">
                    <h1 className="text-3xl font-bold">Misi</h1>
                    <ol className="list-disc list-inside">
                        <li className="font-bold pt-2">Bidang Pemerintahan</li>
                        <ol className="list-decimal list-inside pl-5">
                            <li>Meningkatkan SDM Aparatur Desa.</li>
                            <li>Mewujudkan Tata Kelola Pemerintahan Yang Lebih Baik.</li>
                            <li>Memberdayakan Kelembagaan Masyarakat.</li>
                            <li>Memberdayakan LINMAS Desa.</li>
                            <li>Meningkatkan Ketertiban,Keamanan Serta Pengendalian dan Pengawasan Penyakit Masyarakat.</li>
                            <li>Memberikan Pelayanan Terbaik Kepada Masyarakat.</li>
                        </ol>
                        <li className="font-bold pt-2">Bidang Pembangunan</li>
                        <ol className="list-decimal list-inside pl-5">
                            <li>Meningkatkan Sarana dan Prasarana Desa.</li>
                            <li>Meningkatkan Sarana dan Prasarana Pertanian.</li>
                            <li>Meningkatkan Sarana dan Prasarana Transportasi.</li>
                            <li>Memberdayakan dan Meningkatkan Swadaya Masyarakat.</li>
                            <li>Memanfaatkan Sumberdaya Alam dan Pemanfaatannya.</li>
                            <li>Memelihara Sarana dan Prasarana Keamanan.</li>
                            <li>Memelihara dan Meningkatkan Sarana Peribadahan.</li>
                            <li>Memelihara Sarana dan Prasarana Pendidikan.</li>
                        </ol>
                        <li className="font-bold pt-2">Bidang Pembinaan Masyarakat Desa</li>
                        <ol className="list-decimal list-inside pl-5">
                            <li>Terwijudnya Keamanan Lingkungan</li>
                            <li>Terwujudnya Kebersihan Lingkungan.</li>
                            <li>Meriahnya Kegiatan Keagamaan.</li>
                        </ol>
                        <li className="font-bold pt-2">Bidang Pemberdayaan</li>
                        <ol className="list-decimal list-inside pl-5">
                            <li>Terwujudnya Lembaga Ekonomi Yang Handal.</li>
                            <li>Masyarakat Yang Terampil Dalam Berbisnis.</li>
                            <li>Petani Yang Update Dengan Perubahan.</li>
                            <li>Peternak Yang Terampil.</li>
                            <li>Pelatihan Wirausaha</li>
                        </ol>
                        <li className="font-bold pt-2">Penanggulangan Bencana</li>
                        <ol className="list-decimal list-inside pl-5">
                            <li>Pencegahan Kelaparan.</li>
                            <li>Mitigasi Bencana.</li>
                            <li>PPKM.</li>
                            <li>Santunan Bencana Alam.</li>
                            
                        </ol>
                    </ol>
                </article>
            </section>
            <hr className="border border-black border-solid my-2 md:hidden"/>
            <section className="md:w-1/4 mt-3 mb-4">
                <Agenda/>
            </section>
        </main>
        
        <Footer/>
        </>
    );
};

export default VisiMisi;
