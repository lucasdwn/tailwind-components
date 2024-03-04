import { useState } from "react";

function ResponsiveBar() {

    const [menuVisible, setMenuVisible] = useState(false);

    const handleToggleMenu = () => {
        setMenuVisible(!menuVisible);
    };


    return (
        <>
            <div className="bg-gray-800">
                <nav className="bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <a href="#" className="flex-shink-0">
                                    <img className="h-8 w-8 rounded-full" src="https://lcsconsultoria.com.br/wp-content/uploads/2019/03/finance.png" alt="cédula cem reais" />
                                </a>
                                <div className="hidden md:block ">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        <a href="#" className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-linear">Home</a>
                                        <a href="#" className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-linear">Sobre</a>
                                        <a href="#" className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-linear">Contatos</a>
                                    </div>
                                </div>
                            </div>
                            <div className="mrr-2 flex md:hidden">
                                <button onClick={handleToggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" aria-label="Menu" aria-expanded="false">
                                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div id="menu" className={`md:hidden transition-all ease-in-out duration-300 ${menuVisible ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
                        <div className="px-2 pt-2 pd-3 sm:px-3 ">
                            <a href="#" className="hover:bg-gray-700 text-white block px-3 py-2 roudend-md text-base font-medium transition duration-300 ease-linear">Home</a>
                            <a href="#" className="hover:bg-gray-700 text-white block px-3 py-2 roudend-md text-base font-medium transition duration-300 ease-linear">Sobre</a>
                            <a href="#" className="hover:bg-gray-700 text-white block px-3 py-2 roudend-md text-base font-medium transition duration-300 ease-linear">Contatos</a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default ResponsiveBar;