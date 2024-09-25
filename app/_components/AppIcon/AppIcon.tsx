import Link from "next/link";
import Image from "next/image";

import RCIcon from '../../assets/img/rc.png';
import SintropPayIcon from '../../assets/img/sintrop-pay.png';

interface Props{
    appName: AppName;
}
export function AppIcon({appName}: Props){
    const appData = apps[appName];

    return(
        <Link
            href={appData.href}
            target="_blank"
            className="w-[80px] h-[80px] rounded-full bg-blue-500"
        >
            <Image
                src={appData.image}
                alt='Icone do app'
                className="w-full h-full object-contain mb-1"
                width={300}
                height={300}
            />

            <p className="font-semibold text-black text-center text-xs">{appData.title}</p>
        </Link>
    )
}

const apps = {
    regenerationCredit: {
        image: RCIcon,
        title: 'Crédito de Regeneração (V6)',
        href: 'https://app.sintrop.com',
        live: true,
        testnet: true,
    },
    sintropPay:{
        image: SintropPayIcon,
        title: 'Sintrop Pay',
        href: 'https://pay.sintrop.com',
        live: true,
        testnet: true,
    }
}

type AppType = typeof apps;
type AppName = keyof AppType;