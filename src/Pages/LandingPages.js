import { useState } from "react";
import CardContent from "../Component/CardContent";

import LogoPindad from "../Asset/Teal.png";
import Industrial from "../Asset/Industiral.jpg";
import Senjata from "../Asset/Senjata.png";
import Maung from "../Asset/Maung.png";
import KendaraanMulty from "../Asset/KendaraanMulty.png";
import Amunisi from "../Asset/Amunisi.png";
import Litbang from "../Asset/litbang.jpg";
import Production from "../Asset/production.jpg";

function LandingPage() {
    const navigationItems = [
        {
            img: Maung,
            title: "Kendaraan Khusus",
            link: "",
            id: "001",
            category:
                "kendaraan yang dirancang untuk tugas tertentu.",
            children: [
                {
                    img: Production,
                    title: "Production",
                    link: "",
                    id: "001",
                    category:
                        "Proses menghasilkan produk massal melalui perencanaan, pengolahan, dan pengawasan.",
                },
                {
                    img: Litbang,
                    title: "Lit bang",
                    link: "",
                    id: "002",
                    category:
                        "Mengembangkan inovasi produk melalui riset, eksperimen, dan analisis berkelanjutan.",
                },
            ],
        },
        {
            img: Senjata,
            title: <>Senjata <br /><br /></>,
            link: "",
            id: "002",
            category: "alat untuk menyerang, bertahan, berburu, atau melindungi diri.",
            children: [
                {
                    img: Production,
                    title: "Production",
                    link: "",
                    id: "001",
                    category:
                        "Proses menghasilkan produk massal melalui perencanaan, pengolahan, dan pengawasan.",
                },
                {
                    img: Litbang,
                    title: "Lit bang",
                    link: "",
                    id: "002",
                    category:
                        "Mengembangkan inovasi produk melalui riset, eksperimen, dan analisis berkelanjutan.",
                },
            ],
        },
        {
            img: Industrial,
            title: <>Industrial <br /><br /></>,
            link: "",
            id: "003",
            category: "Proses produksi barang atau jasa dalam skala besar",
            children: [
                {
                    img: Production,
                    title: "Production",
                    link: "",
                    id: "001",
                    category:
                        "Proses menghasilkan produk massal melalui perencanaan, pengolahan, dan pengawasan.",
                },
                {
                    img: Litbang,
                    title: "Lit bang",
                    link: "",
                    id: "002",
                    category:
                        "Mengembangkan inovasi produk melalui riset, eksperimen, dan analisis berkelanjutan.",
                },
            ],
        },
        {
            img: Amunisi,
            title: <>Munisi <br /><br /></>,
            link: "",
            id: "004",
            category: "peluru senjata api, bom, roket, granat, bahan peledak.",
            children: [
                {
                    img: Production,
                    title: "Production",
                    link: "",
                    id: "001",
                    category:
                        "Proses menghasilkan produk massal melalui perencanaan, pengolahan, dan pengawasan.",
                },
                {
                    img: Litbang,
                    title: "Lit bang",
                    link: "",
                    id: "002",
                    category:
                        "Mengembangkan inovasi produk melalui riset, eksperimen, dan analisis berkelanjutan.",
                },
            ],
        },
        {
            img: KendaraanMulty,
            title: "Kendaraan Multy Nasional",
            link: "",
            id: "005",
            category: "Kendaraan dari perusahaan global, digunakan di berbagai negara.",
            children: [
                {
                    img: Production,
                    title: "Production",
                    link: "",
                    id: "001",
                    category:
                        "Proses menghasilkan produk massal melalui perencanaan, pengolahan, dan pengawasan.",
                },
                {
                    img: Litbang,
                    title: "Lit bang",
                    link: "",
                    id: "002",
                    category:
                        "Mengembangkan inovasi produk melalui riset, eksperimen, dan analisis berkelanjutan.",
                },
            ],
        },
    ];

    const [featured, ...others] = navigationItems;
    const [selectedParent, setSelectedParent] = useState(null);
    const [selectedChild, setSelectedChild] = useState(null);

    const handleContactUs = () => {
        window.open("https://wa.me/6282113935599", "_blank");
    };

    const handleParentClick = (item) => {
        setSelectedParent(item);
        setSelectedChild(null);
    };

    const handleChildClick = (child) => {
        setSelectedChild(child);
    };

    const handleBack = () => {
        if (selectedChild) {
            setSelectedChild(null);
        } else if (selectedParent) {
            setSelectedParent(null);
        }
    };

    return (
        <div className="flex min-h-screen flex-col lg:flex-row">

            {/* Tampilan Sebelah Kiri */}
            <div className="relative bg-[#283739] flex h-[280px] shrink-0 flex-col items-center justify-center gap-4 p-10 lg:h-screen lg:w-1/3 2xl:w-1/2 xl:w-1/3 lg:items-start lg:justify-start lg:gap-52">
                <img src={LogoPindad} alt="Logo Pindad Persero" className="w-52" />
                <div className="flex flex-col items-center gap-4 lg:items-start">
                    <h1 className="text-xl font-medium tracking-widest text-[#50C9CE] lg:text-7xl">
                        Pindad Solid Works
                    </h1>
                    <h1 className="text-xl font-medium tracking-widest text-[#50C9CE] lg:text-7xl">
                        PDM
                    </h1>
                </div>
                <p className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-sm tracking-widest text-[#50C9CE] lg:block lg:bottom-0">
                    &copy; 2025 Divisi Teknologi Informasi PT.Pindad(Persero)
                </p>
            </div>

            {/* Tampilan Sebelah Kanan */}
            <div className="relative flex min-h-[calc(100vh-260px)] w-full items-center justify-center overflow-x-hidden px-1 py-6 lg:min-h-full">

                {/* Tampilan Parent Carousel Dinamis */}
                {!selectedParent && (
                    <div className="group/list flex flex-col items-center gap-1 lg:flex-row lg:justify-center">
                        {others.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => handleParentClick(item)}
                                className="group peer relative order-last w-96 cursor-pointer overflow-hidden transition-all duration-500 lg:w-20 lg:hover:w-96"
                            >
                                <CardContent item={item} peer={false} />
                            </div>
                        ))}

                        <div
                            key={featured.id}
                            onClick={() => handleParentClick(featured)}
                            className="group relative order-first w-96 cursor-pointer overflow-hidden transition-all duration-500 lg:w-96 lg:peer-hover:w-24"
                        >
                            <CardContent item={featured} peer={true} />
                        </div>
                    </div>
                )}

                {/* Tampilan Child Ketika Click Carousel */}
                {selectedParent && !selectedChild && (
                    <div className="flex flex-col items-center gap-4">
                        <h2 className="text-2xl font-semibold tracking-widest text-[#283739]">
                            {selectedParent.title}
                        </h2>

                        <div className="flex flex-wrap justify-center gap-4">
                            {selectedParent.children.map((child) => (
                                <div
                                    key={child.id}
                                    onClick={() => handleChildClick(child)}
                                    className="group peer relative order-last w-96 cursor-pointer overflow-hidden transition-all duration-500 lg:w-24 lg:hover:w-96"
                                >
                                    <CardContent item={child} peer={false} />
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={handleBack}
                            className="mt-4 rounded-md bg-[#50C9CE] px-6 py-2 text-white hover:bg-[#3EA7AD]"
                        >
                            Back
                        </button>
                    </div>
                )}

                <div className="absolute bottom-0 hidden lg:flex flex-row gap-2">
                    <p className="text-gray-700">Need Help?</p>
                    <button
                        onClick={handleContactUs}
                        className="cursor-pointer border-none bg-transparent p-0 underline text-blue-500"
                    >
                        Contact Us
                    </button>
                </div>
            </div>

            <div className="mb-4 -mt-8 flex flex-row items-center justify-center gap-2 lg:hidden">
                <p className="text-gray-700">Need Help?</p>
                <button
                    onClick={handleContactUs}
                    className="cursor-pointer border-none bg-transparent p-0 underline text-blue-500"
                >
                    Contact Us
                </button>
            </div>

            <p className="flex w-full items-center justify-center text-sm tracking-widest text-black lg:hidden">
                &copy; 2025 Divisi Teknologi Informasi PT.Pindad(Persero)
            </p>
        </div>
    );
}

export default LandingPage;
