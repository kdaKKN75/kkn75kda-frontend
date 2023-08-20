import { FaGooglePlay } from 'react-icons/fa';
import { BiLogoGmail, BiPhoneCall, BiPhone } from 'react-icons/bi';

const Footer = () => {
    return (
        <>
            <footer className="container min-w-full bg-slate-800 text-gray-200 px-6 md:px-24">
                <div className="py-4">
                    <div className="flex flex-col md:flex-row justify-between gap-x-48">
                        <div className="pe-10">
                            <div className="flex flex-row content-center">
                                <span className="text-2xl my-auto">
                                    <FaGooglePlay />
                                </span>
                                <h2 className="ms-3 font-bold text-xl">Desa Koncer Darul Aman</h2>
                            </div>
                            <div className="mt-3">
                                <p>
                                Desa Koncer Darul Aman Merupakan salah satu desa di kabupaten Bondowoso yang terletak di kecamatan Tenggarang.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-row content-center mt-4 md:mt-0">
                                <span className="text-2xl my-auto">
                                    <BiPhoneCall />
                                </span>
                                <h2 className="ms-3 font-bold text-xl">Hubungi Kami</h2>
                            </div>
                            <div>
                                <div>
                                    <div className="flex flex-row content-center mt-2">
                                        <BiPhone className="my-auto" />
                                        <p className="ms-3">+62 856 1567 0981</p>
                                    </div>
                                    <div className="flex flex-row content-center mt-2">
                                        <BiLogoGmail className="my-auto" />
                                        <p className="ms-3">mail@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <hr style={{ border: '1px dashed white', marginTop: '10px', marginBottom: '10px' }} />
                        <div className="flex flex-row justify-center">
                            <p>Copyright &copy;{new Date().getFullYear()} - Pemerintah Desa Koncer Darul Aman </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
