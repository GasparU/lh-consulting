'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import Logo from '@/components/Logo';

const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.1,
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

// const ImageClient = ({ src }) => {
//     return (
//         <motion.div className='flex w-52 h-52 bg-white justify-center items-center rounded-xl hover:opacity-75 bg-indigo duration-200
//             hover:scale-110'
//             variants={container}
//             initial="hidden"
//             animate="visible">
//             <motion.div variants={item}>
//                 <Image className='saturate-800 w-max h-max' src={src} width={350} height={150} alt='whatsapp' />
//             </motion.div >
//         </motion.div>

//     )
// }


// export default function ClientPage() {
//     return (
//         <div className='flex gap-8 flex-wrap m-10 justify-items-center content-center justify-center'
//         >
//             {
//                 logos.map(logo => (
//                     <ImageClient key={logo.empresas} src={logo.empresas} />
//                 ))
//             }
//         </div>
//     )
// }

export default function ClientPage() {
    return (

        // <motion.div className='flex flex-wrap  rounded-xl hover:opacity-75 bg-indigo duration-200 hover:scale-110 gap-10 my-16 mx-16'
        //     variants={container}
        //     initial="hidden"
        //     animate="visible"
        // >
        //     {
        //         logos.map(logo => (
        //             <motion.img key={logo.empresas} src={logo.empresas} variants={item} className='saturate-800 w-96 h-max' />
        //         ))
        //     }
        // </motion.div>

        <div className='py-2'>
            <motion.div className={`flex items-center flex-wrap gap-10 m-10 justify-center `}
                variants={quote}
                initial="initial"
                animate="animate"
            >
                {
                    logos.map((logo) =>
                        <motion.img key={logo.empresas} className=' w-96 h-44 rounded-xl object-scale-down bg-white ' src={logo.empresas}
                            variants={singelWord}
                        >

                        </motion.img>)
                }
            </motion.div>
        </div>

    )
}
