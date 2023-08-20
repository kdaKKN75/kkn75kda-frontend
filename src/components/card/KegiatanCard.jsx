function Kegiatan(kegiatan){
    console.log(kegiatan)
    return(
        <>
        <div className="p-2 rounded-md shadow-lg bg-slate-100 mt-2 mx-2">
            <table>
                <tbody>
                    <tr className="h-7">
                        <td className="font-bold">Kegiatan</td>
                        <td className="px-10">:</td>
                        <td>{kegiatan.data.judul}</td>
                    </tr>
                    <tr className="h-7">
                        <td className="font-bold">Tanggal</td>
                        <td className="px-10">:</td>
                        <td>{kegiatan.data.tanggal}</td>
                    </tr>
                    <tr className="h-7">
                        <td className="font-bold">Lokasi</td>
                        <td className="px-10">:</td>
                        <td>{kegiatan.data.tempat}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}
export default Kegiatan