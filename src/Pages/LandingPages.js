import { Link } from "react-router-dom";
import CardContent from "../Component/CardContent";

import LogoPindad from "../Asset/Teal.png";
import Tank from "../Asset/Tank.png";
import Senjata from "../Asset/Senjata.png";
import Maung from "../Asset/Maung.png";
import Excavator from "../Asset/Excavator.png";
import Amunisi from "../Asset/Amunisi.png";

function LandingPage() {
    const navigationItems = [
        {
            img: Tank,
            title: "BPP",
            link: "http://pdm.pindad.co.id/bpp",
            id: "001",
            category:
                "kendaraan tempur berat, bersenjata, lapis baja, dan bermobilitas tinggi.Webdesign",
        },
        {
            img: Senjata,
            title: "Senjata",
            link: "http://pdm.pindad.co.id/senjata",
            id: "002",
            category:
                "alat untuk menyerang, bertahan, berburu, atau melindungi diri.",
        },
        {
            img: Maung,
            title: "Kendaraan Khusus",
            link: "http://pdm.pindad.co.id/bpp",
            id: "003",
            category: "kendaraan yang dirancang untuk tugas tertentu.",
        },
        {
            img: Excavator,
            title: "Alat Berat",
            link: "http://pdm.pindad.co.id/senjata",
            id: "004",
            category: "alat berat gali, angkut material, kuat, dan fleksibel.",
        },
        {
            img: Amunisi,
            title: "Amunisi",
            link: "http://pdm.pindad.co.id/bpp",
            id: "005",
            category: "peluru senjata api, bom, roket, granat, bahan peledak.",
        },
    ];

    const [featured, ...others] = navigationItems;

    const handleContactUs = () => {
        window.open("https://wa.me/6282113935599", "_blank");
    };

    return (
        <div className="flex min-h-screen flex-col lg:flex-row">
            {/* Kolom Sebelah Kiri */}
            <div className="relative bg-[#283739] flex h-[280px] lg:w-1/3 shrink-0 flex-col items-center justify-center gap-4 p-10 lg:h-screen 2xl:w-1/2 xl:w-1/3 lg:items-start lg:justify-start lg:gap-52">
                <img src={LogoPindad} alt="Logo Pindad Persero" className="w-52" />
                <div className="flex flex-col items-center gap-4 lg:items-start">
                    <h1 className="text-xl font-medium tracking-widest text-[#50C9CE] lg:text-7xl">
                        Pindad Solid Works
                    </h1>
                    <h1 className="text-xl font-medium tracking-widest text-[#50C9CE] lg:text-7xl">
                        PDM
                    </h1>
                </div>
                <p className="absolute w-full hidden lg:block bottom-5 left-1/2 -translate-x-1/2 text-sm tracking-widest text-[#50C9CE] lg:bottom-0 lg:left-1/2">
                    &copy; 2025 Divisi Teknologi Informasi PT.Pindad(Persero)
                </p>
            </div>

            <div className="relative flex min-h-[calc(100vh-260px)] items-center justify-center overflow-x-hidden px-1 py-6 lg:min-h-full lg:w-full">
                <div className="relative flex min-h-[calc(100vh-260px)] items-center justify-center overflow-x-hidden px-1 py-6 lg:min-h-full lg:w-full">
                    <div className="group/list flex flex-col items-center gap-1 lg:flex-row lg:justify-center">
                        {others.map((item) => (
                            <Link
                                key={item.id}
                                to={item.link}
                                className="group peer relative order-last w-96 overflow-hidden transition-all duration-500 lg:w-20 lg:hover:w-96">
                                <CardContent item={item} peer={false} />
                            </Link>
                        ))}

                        <Link
                            key={featured.id}
                            to={featured.link}
                            className="group relative order-first w-96 overflow-hidden transition-all duration-500 lg:w-96 lg:peer-hover:w-20">
                            <CardContent item={featured} peer={true} />
                        </Link>
                    </div>

                    <div className="absolute bottom-0 lg:flex flex-row gap-2  hidden">
                        <p className="text-gray-700">Need Help?</p>
                        <Link
                            onClick={handleContactUs}
                            className="cursor-pointer underline text-blue-500">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center flex-row gap-2 lg:hidden mb-4 -mt-8">
                <p className="text-gray-700">Need Help?</p>
                <Link
                    onClick={handleContactUs}
                    className="cursor-pointer underline text-blue-500">
                    Contact Us
                </Link>
            </div>

            <div className="">
                <p className="flex items-center justify-center  lg:hidden flex w-full bottom-0 text-sm tracking-widest text-black ">
                    &copy; 2025 Divisi Teknologi Informasi PT.Pindad(Persero)
                </p>
            </div>
        </div>
    );
}

export default LandingPage;
