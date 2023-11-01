
import { FaCartShopping, FaChartLine, FaLandmark, FaListCheck, FaMoneyBillTrendUp } from "react-icons/fa6";

export default function ImagenHomeIcons() {
        return (

                <div className="lh-consulting md:w-full xl:w-full absolute bottom-0 hidden md:flex xl:flex justify-center justify-items-center items-center content-center flex-auto">
                        <div className="lh-consulting w-1/6 bg-sky h-0 md:h-32 xl:h-44 flex  items-center  justify-center " >
                                {/* <FaMoneyBillTrendUp className="lh-consulting md:text-xl xl:text-5xl mx-1" style={{ color: '#eff3fb' }}  /> */}
                                <p className="lh-consulting text-white text-0 md:text-md xl:text-xl">Impuestos</p>
                        </div>
                        <div className="lh-consulting w-1/6 bg-blue h-0 md:h-32 xl:h-44 flex items-center  justify-center" >
                                {/* <FaChartLine className="lh-consulting md:text-xl xl:text-5xl mx-1" style={{ color: '#eff3fb' }} /> */}
                                <p className="lh-consulting text-white px-2 md:text-md xl:text-xl">Contabilidad</p>
                        </div>
                        <div className="lh-consulting w-1/6 bg-sky h-0 md:h-32 xl:h-44 flex items-center  justify-center " >
                                {/* <FaListCheck className="lh-consulting md:text-xl xl:text-5xl mx-1" style={{ color: '#eff3fb' }} /> */}
                                <div className="lh-consulting flex flex-col">
                                <p className="lh-consulting text-white px-4 md:text-md xl:text-xl ">Control</p>
                                <p className="lh-consulting text-white px-4 md:text-md xl:text-xl ">Interno</p>
                                </div>
                        </div>
                        <div className="lh-consulting w-1/6 bg-blue h-0 md:h-32 xl:h-44 flex items-center  justify-center" >
                                {/* <FaCartShopping className="lh-consulting md:text-xl xl:text-5xl mx-1" style={{ color: '#eff3fb' }} /> */}
                                <p className="lh-consulting text-white  md:text-md xl:text-xl">Compras</p>
                        </div>
                        <div className="lh-consulting w-1/6 bg-sky h-0 md:h-32 xl:h-44 flex items-center  justify-center" >
                                {/* <FaLandmark className="lh-consulting md:text-xl xl:text-5xl mx-1" style={{ color: '#eff3fb' }} /> */}
                                <p className="lh-consulting text-white  md:text-md xl:text-xl">Legal</p>
                        </div>
                </div>
        )
}
