import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

function CardContent({ item }) {
    return (
        <div className="flex flex-row lg:flex-col">
            <div className="lg:h-96 h-32 lg:w-full w-52 shadow-xl">
                <span className="lg:flex hidden absolute right-1 top-0.5 flex h-9 w-9 origin-top-right scale-75 items-center justify-center rounded-sm bg-black/10 opacity-0 transition-all delay-300 duration-300 hover:bg-black group-hover:scale-100 group-hover:rounded-md group-hover:bg-black/20 group-hover:opacity-100">
                    <FontAwesomeIcon icon={faEye} className="text-white" />
                </span>
                <img src={item.img} alt={item.title} className="h-full w-full rounded-lg object-cover" />
            </div>

            <div className="flex lg:flex-row flex-col lg:w-96 w-52 h-auto lg:gap-10 gap-2 justify-between px-2 pt-2">
                <div className="relative">
                    <h2 className="leading-0 font-medium text-gray-700 w-32 transition duration-300 opacity-100 ">
                        {item.title}
                    </h2>
                </div>
                <span className="text-xs tracking-wide text-gray-600 text-right">{item.category}</span>
            </div>
        </div>
    );
}

export default CardContent;