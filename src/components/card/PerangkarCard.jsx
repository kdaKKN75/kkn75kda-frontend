function PerangkatCard(perangkat){
    return(
        <>
        <div className="max-w-[180px] md:max-w-[240px] rounded shadow-lg mb-2 mr-2">
            <img  
                className="w-full p-2 h-[200px] md:h-[280px]"
                src={perangkat.data.photo} 
                alt={perangkat.data.nama} />
            <div className="px-2">
                <h1 className="text-center text-slate-900">{perangkat.data.nama}</h1>
                <p className="text-center text-slate-900 font-bold pb-2 text-lg">{perangkat.data.jabatan}</p>
            </div>
        </div>
        </>
    )
}
export default PerangkatCard