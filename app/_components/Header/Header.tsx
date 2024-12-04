import Image from "next/image";
import LogoSintrop from '../../assets/img/logo-branco.png'

export function Header(){
    return(
        <header className="w-full flex items-center bg-container-primary h-20 fixed top-0 px-10 py-5">
            <Image
                width={120}
                height={150}
                alt="Logo sintrop"
                src={LogoSintrop}
                quality={100}
            />
        </header>
    )
}