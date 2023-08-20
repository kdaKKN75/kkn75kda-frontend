import gear from "../assets/gear.png"
function ServerError(){
    return(
        <>
        <main className="p-20 py-36 text-center">
            <img className="m-auto md:max-w-xs" src={gear} alt="" />
            <h1 className="text-8xl">500</h1>
            <p className="text-3xl">Internal Server Error</p>
            <p className="text-xl">Please try again later or feel free to contact us if the problem persist.</p>
        </main>
        </>
    )
}
export default ServerError