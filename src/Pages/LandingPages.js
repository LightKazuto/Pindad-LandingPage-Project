import { useState } from "react";
import CardContent from "../Component/CardContent";

import LogoPindad from "../Asset/Teal.png";
import Litbang from "../Asset/litbang.jpg";
import Production from "../Asset/production.jpg";
import KK from "../Asset/kk.png";
import Senjata from "../Asset/senjata.jpg"
import Industrial from "../Asset/industrial.jpg";
import Munisi from "../Asset/munisi.jpg";
import KMN from "../Asset/kmn.png";


function LandingPage() {
    const navigationItems = [
        {
            img: KK,
            title: "Kendaraan Khusus",
            id: "001",
            category:
                "kendaraan yang dirancang untuk tugas tertentu.",
            children: [
                {
                    img: Production,
                    title: "Production",
                    link: "http://pdm.pindad.co.id/engkk",
                    id: "001",
                    category:
                        "Proses menghasilkan produk massal melalui perencanaan, pengolahan, dan pengawasan.",
                },
                {
                    img: Litbang,
                    title: "Lit bang",
                    link: "http://pdm.pindad.co.id/bpkk",
                    id: "002",
                    category:
                        "Mengembangkan inovasi produk melalui riset, eksperimen, dan analisis berkelanjutan.",
                },
            ],
        },
        {
            img: Senjata,
            title: <>Senjata <br /><br /></>,
            id: "002",
            category: "alat untuk menyerang, bertahan, berburu, atau melindungi diri.",
            children: [
                {
                    img: Production,
                    title: "Production",
                    link: "http://pdm.pindad.co.id/engjat",
                    id: "001",
                    category:
                        "Proses menghasilkan produk massal melalui perencanaan, pengolahan, dan pengawasan.",
                },
                {
                    img: Litbang,
                    title: "Lit bang",
                    link: "http://pdm.pindad.co.id/bpjat",
                    id: "002",
                    category:
                        "Mengembangkan inovasi produk melalui riset, eksperimen, dan analisis berkelanjutan.",
                },
            ],
        },
        {
            img: Industrial,
            title: <>Industrial <br /><br /></>,
            id: "003",
            category: "Proses produksi barang atau jasa dalam skala besar",
            link: "http://pdm.pindad.co.id/engmri",
        },
        {
            img: Munisi,
            title: <>Munisi <br /><br /></>,
            id: "004",
            category: "peluru senjata api, bom, roket, granat, bahan peledak.",
            children: [
                {
                    img: Production,
                    title: "Production",
                    link: "http://pdm.pindad.co.id/engmu",
                    id: "001",
                    category:
                        "Proses menghasilkan produk massal melalui perencanaan, pengolahan, dan pengawasan.",
                },
                {
                    img: Litbang,
                    title: "Lit bang",
                    link: "http://pdm.pindad.co.id/bpmu",
                    id: "002",
                    category:
                        "Mengembangkan inovasi produk melalui riset, eksperimen, dan analisis berkelanjutan.",
                },
            ],
        },
        {
            img: KMN,
            title: "Kendaraan Multi Nasional",
            id: "005",
            category: "Kendaraan dari perusahaan global, digunakan di berbagai negara.",
            link: "http://pdm.pindad.co.id/kmn",
        },
    ];

    const [featured, ...others] = navigationItems;
    const [selectedParent, setSelectedParent] = useState(null);
    const [selectedChild, setSelectedChild] = useState(null);

    const handleContactUs = () => {
        window.open("https://wa.me/6282113935599", "_blank");
    };

    const handleParentClick = (item) => {
        if (item.children?.length) {
            setSelectedParent(item);
        } else if (item.link) {
            window.open(item.link, "_blank");
        }
    };

    const handleChildClick = (child) => {
        if (child.link) {
            window.open(child.link, "_blank");
        }
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
            <div className="relative bg-[#283739] flex h-[280px] shrink-0 flex-col items-center justify-center gap-4 p-8 lg:h-screen lg:w-1/3 2xl:w-1/2 xl:w-1/3 lg:items-start lg:justify-start lg:gap-[10%]">
                <img src={LogoPindad} alt="Logo Pindad Persero" className="w-40 lg:44 xl:w-52 invert brightness-0 contrast-200" />
                <div className="flex flex-col gap-4 text-center lg:text-left h-[50%] justify-center " >
                    <h1 className="text-xl font-medium tracking-widest text-white lg:text-5xl xl:text-5xl 2xl:text-7xl">
                        Pindad
                    </h1>
                    <h1 className="text-xl font-medium tracking-widest text-white lg:text-5xl xl:text-5xl 2xl:text-7xl">
                        Solid Works PDM
                    </h1>
                </div>
                <p className="absolute w-full text-center bottom-5 left-1/2 hidden -translate-x-1/2 text-sm tracking-widest text-white lg:block lg:bottom-0">
                    &copy; 2025 Divisi Teknologi Informasi PT.Pindad(Persero)
                </p>
            </div>

            {/* Tampilan Sebelah Kanan */}
            <div className="relative flex min-h-[calc(100vh-260px)] w-full items-center justify-center overflow-x-hidden px-1 pb-20 py-6 lg:h-screen">

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
