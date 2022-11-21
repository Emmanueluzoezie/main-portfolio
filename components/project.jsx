import Image from "next/image"
import Link from "next/link"
import project1 from "../public/project1.png";
import project2 from "../public/project2.png";
import project3 from "../public/project3.png";
import project4 from "../public/project4.png";


function Project (){

    
    return(
        <div className=" my-5 ">
            <h1 className="text-center my-5 text-2xl dark:text-white text-black font-bold font-mono"> Projects</h1>
            <div className="px-5 md:flex md:space-x-4">
                <div className="md:w-[50%]">
                    <h3 className="text-center text-xl dark:text-white text-black font-semibold font-mono">My personal Projects</h3>
                    {/* <div className=" md:flex md:space-x-7 px-10"> */}
                    <div className="my-8 border pb-2 bg-gray-300 shadow-xl dark:bg-gray-600 ">
                        <Link href="https://crypto-trackers.vercel.app/" passHref>
                            <div className="cursor-pointer">
                                <Image
                                    src={project1}
                                    alt="technolgy"
                                />
                            </div>
                        </Link>

                        <div className=" flex justify-between cursor-pointer px-4 ">
                            <Link href="https://github.com/Emmanueluzoezie/crypro-tracker" passHref>
                                <a className="dark:text-white text-black font-semibold hover:text-blue-400 dark:hover:text-blue-600">Get the source code</a>
                            </Link>
                            <Link href="https://crypto-trackers.vercel.app/" passHref>
                                <a className="dark:text-white text-black font-semibold hover:text-blue-400 dark:hover:text-blue-600">Veiw website</a>
                            </Link>
                        </div>
                    </div>
                    <div className="my-8 border pb-2 bg-gray-300 dark:bg-gray-600 shadow-xl ">
                        <Link href="https://googl-clone-site.netlify.app/" passHref>
                            <div className="cursor-pointer">
                                <Image
                                    src={project2}
                                    alt="technolgy"
                                />
                            </div>
                        </Link>

                        <div className=" flex justify-between cursor-pointer px-4">
                            <Link href="https://github.com/Emmanueluzoezie/googl-clone" passHref>
                                <a className="dark:text-white text-black font-semibold hover:text-blue-400 dark:hover:text-blue-600">Get the source code</a>
                            </Link>
                            <Link href="https://googl-clone-site.netlify.app/" passHref>
                                <a className="dark:text-white text-black font-semibold hover:text-blue-400 dark:hover:text-blue-600">Veiw website</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="md:w-[50%]">
                    <h3 className="text-center text-xl dark:text-white text-black font-semibold font-mono">Collobrated Projects</h3>
                    <div className="my-8 border pb-2 bg-gray-300 shadow-xl dark:bg-gray-600 ">
                        <Link href="https://binance-clone-rho.vercel.app/" passHref>
                            <div className="cursor-pointer">
                                <Image
                                    height={550}
                                    src={project3}
                                    alt="technolgy"
                                />
                            </div>
                        </Link>

                        <div className=" flex justify-between cursor-pointer px-4 ">
                            <Link href="https://github.com/Emmanueluzoezie/binance-clone" passHref>
                                <a className="dark:text-white text-black font-semibold hover:text-blue-400 dark:hover:text-blue-600">Get the source code</a>
                            </Link>
                            <Link href="https://binance-clone-rho.vercel.app/" passHref>
                                <a className="dark:text-white text-black font-semibold hover:text-blue-400 dark:hover:text-blue-600">Veiw website</a>
                            </Link>
                        </div>
                    </div>
                    <div className="my-8 border pb-2 bg-gray-300 dark:bg-gray-600 shadow-xl ">
                        <Link href="https://ifood-lime.vercel.app/" passHref>
                            <div className="cursor-pointer">
                                <Image
                                    height={320}
                                    src={project4}
                                    alt="technolgy"
                                />
                            </div>
                        </Link>

                        <div className=" flex justify-between cursor-pointer px-4">
                            <Link href="https://github.com/boymeetsblockchain/Restaurant-App" passHref>
                                <a className="dark:text-white text-black font-semibold hover:text-blue-400 dark:hover:text-blue-600">Get the source code</a>
                            </Link>
                            <Link href="https://googl-clone-site.netlify.app/" passHref>
                                <a className="dark:text-white text-black font-semibold hover:text-blue-400 dark:hover:text-blue-600">Veiw website</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project