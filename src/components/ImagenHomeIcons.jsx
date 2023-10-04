
import { FaCartShopping, FaChartLine, FaLandmark, FaListCheck, FaMoneyBillTrendUp } from "react-icons/fa6";

export default function ImagenHomeIcons() {
        return (

                <div className="w-full absolute bottom-0 flex justify-center justify-items-center items-center content-center flex-auto">
                        <div className="w-1/6 bg-sky h-44 flex  items-center  justify-center " >
                                <FaMoneyBillTrendUp style={{ color: '#eff3fb' }} size={40} />
                                <p className="text-white  text-xl">Impuestos</p>
                        </div>
                        <div className="w-1/6 bg-blue h-44 flex items-center  justify-center" >
                                <FaChartLine style={{ color: '#eff3fb' }} size={40}/>
                                <p className="text-white px-2 text-xl">Contabilidad</p>
                        </div>
                        <div className="w-1/6 bg-sky h-44 flex items-center  justify-center " >
                                <FaListCheck style={{ color: '#eff3fb' }} size={40}/>
                                <div className="flex flex-col">
                                <p className="text-white px-4 text-xl ">Control</p>
                                <p className="text-white px-4 text-xl ">Interno</p>
                                </div>
                        </div>
                        <div className="w-1/6 bg-blue h-44 flex items-center  justify-center" >
                                <FaCartShopping style={{ color: '#eff3fb' }} size={40}/>
                                <p className="text-white  text-xl">Compras</p>
                        </div>
                        <div className="w-1/6 bg-sky h-44 flex items-center  justify-center" >
                                <FaLandmark style={{ color: '#eff3fb' }} size={40}/>
                                <p className="text-white  text-xl">Legal</p>
                        </div>
                </div>
        )
}
