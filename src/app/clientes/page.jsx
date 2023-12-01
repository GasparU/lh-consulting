'use client'
import React from 'react'
import { motion } from "framer-motion";

const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.02,
            staggerChildren: 0.08
        }
    }
}
const singelWord = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
}

const logos = [
    { empresas: "/LOGO_CAJABAMBA.png" }, { empresas: "/LOGO_LEDESMA.jpeg" }, { empresas: "/LOGO_PARDO.png" }, { empresas: "/LOGO_MERCEDES.png" },
    { empresas: "/LOGO_CUART.png" }, { empresas: "/LOGO_DYNO.png" }, { empresas: "/LOGO_EMS.png" }, { empresas: "/LOGO_GOVI.png" },
    { empresas: "/LOGO_LOGISTIC.png" }, { empresas: "/LOGO_PANAMEDICAL.png" }, { empresas: "/LOGO_AGM.jpg" },
]


export default function ClientPage() {
    return (

        <div className='py-2'>
            <motion.div className={`flex items-center flex-wrap gap-10 m-10 `}
                variants={quote}
                initial="initial"
                animate="animate"
            >
                {
                    logos.map((logo) =>
                        <motion.img key={logo.empresas} className=' w-96 h-44 rounded-xl object-scale-down bg-white hover:scale-75 duration-200' src={logo.empresas}
                            variants={singelWord}
                        >

                        </motion.img>)
                }
            </motion.div>
        </div>

    )
}
