import Image from "next/image";

export default function HomeMain() {
    return (
        <div className="flex pt-16">
            <span className=" md:w-1/2 xl:w-1/2 px-12">
                <div className="font-poppins md:text-xl xl:text-2xl text-sky">Quienes Somos</div>
                <span className="font-poppins text-3xl md:text-5xl xl:text-5xl">
                    <b>Bienvenidos a</b> <p>LH Consulting.</p>
                </span>
                <p className="font-poppins mt-6 text-md md:text-lg xl:text-2xl">Somos un estudio contable con amplia experiencia en auditoría, impuestos, consultoría de empresas, contabilidad y outsourcing  Se compras. LH Consulting Group S.A.C. se caracteriza por presentar y prestar soluciones y servicios a la medida de sus clientes, siempre ofreciendo el componente diferenciador de un acompañamiento enfocado en la puntualidad y la eficiencia.
                    El personal vinculado a nuestra Firma cuenta con una importante trayectoria en las áreas relacionadas con su profesión, la mayoría de ellos con estudios adicionales en materia de impuestos, financiera, NIIF y NIAS en reconocidas instituciones de la ciudad.</p>
            </span>
            {/* Imagen de la derecha */}
            <span className="hidden md:flex xl:flex md:w-1/2 xl:w-1/2 justify-center relative ">
                <Image src={'/bienvenido-lh-consulting.png'} width={544} height={650} alt="bienvenido lh-consulting" />
                <span className="flex flex-col md:max-w-sm xl:max-w-sm bg-sky absolute bottom-0 ">
                    <Image src={'/mission-icon.png'} width={62} height={58} alt="image mission" />
                    <span className="text-white text-l px-11">
                        <p className="text-2xl"><b>Nuestra Misión</b></p>
                        <p className="mb-10 md:text-lg xl:text-xl">Obtener la satisfacción de nuestros clientes mediante soluciones que logren proteger y maximizar sus recursos, todo ello con un grupo de profesionales altamente capacitados, que tienen una amplia experiencia en el ámbito fiscal, legal, contable y outsourcing de compras.</p>

                    </span>
                </span>
            </span>
        </div>
    )
}
