import sad from "../assets/sad.png"
function NotFound(){
    return(
        <>
        <main className="p-20 py-36 text-center">
            <img className="m-auto md:max-w-xs" src={sad} alt="" />
            <h1 className="text-8xl">404</h1>
            <p className="text-3xl">Page not Found</p>
            <p className="text-xl">The page you are looking for doesn't exist or an other error occured.</p>
        </main>
        </>
    )
}
export default NotFound