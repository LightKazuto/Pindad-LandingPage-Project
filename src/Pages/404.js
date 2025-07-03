import LogoPindad from "../Asset/LogoPindad.png";

function Page404() {
    const handleClick = () => {
        window.location.href = "/";
    }

    return (
        <div className="w-full h-screen bg-[#283739]">
            <div className="w-full h-screen flex flex-col justify-center items-center gap-8">
                <div className="flex lg:flex-row flex-col gap-6">
                    <div className="pr-6 border-b-4 lg:border-b-0  lg:border-r-8 border-white p-4">
                        <img src={LogoPindad} alt="404" className="invert brightness-0 contrast-200 w-52 lg:w-96 h-auto p-4" />
                    </div>
                    <div className="text-white w-full lg:w-1/2 flex flex-col font-semibold font-mono lg:items-start items-center justify-center p-0 lg:p-4 gap-2">
                        <h1 className="text-4xl lg:text-6xl">404</h1>
                        <h2 className="text-2xl lg:text-5xl">Page Not Found</h2>
                    </div>
                </div>

                <div className="text-white px-6 py-2 bg-[#3EA7AD] rounded-lg font-medium">
                    <button onClick={handleClick}>
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Page404;