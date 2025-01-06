import Link from "next/link";
import Image from "next/image";

import RCIcon from '../../assets/img/rc.png';
import SintropPayIcon from '../../assets/img/sintrop-pay.png';
import SintropChainIcon from '../../assets/img/sintrop-chain.png';
import SintropStoreIcon from '../../assets/img/sintrop-store.png';
import TreinamentosIcon from '../../assets/img/icon-treinamentos.png';

interface Props {
    appName: AppName;
}
export function AppIcon({ appName }: Props) {
    const appData = apps[appName];

    return (
        <Link
            href={appData.href}
            className="w-[30%] h-[80px] flex flex-col items-center mb-10 relative"
        >
            <Image
                src={appData.image}
                alt='Icone do app'
                className="w-16 h-16 object-contain rounded-full mb-1"
                width={300}
                height={300}
            />

            <p className="font-semibold text-white text-center text-xs">{appData.title}</p>

            {appData.testnet && (
                <div className="px-2 h-4 rounded-md bg-[#def7e3] absolute top-[-5px] right-0">
                    <p className="text-[9px] text-gray-500">Testnet</p>
                </div>
            )}

            {!appData.live && (
                <div className="px-2 h-4 rounded-md bg-[#def7e3] absolute top-[-5px] right-0">
                    <p className="text-[9px] text-gray-500">Coming soon</p>
                </div>
            )}
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
    sintropPay: {
        image: SintropPayIcon,
        title: 'Sintrop Pay',
        href: 'https://pay.sintrop.com',
        live: true,
        testnet: true,
    },
    sintropStore: {
        image: SintropStoreIcon,
        title: 'Sintrop Store',
        href: '/',
        live: false,
        testnet: false,
    },
    sintropChain: {
        image: SintropChainIcon,
        title: 'Sintrop Chain',
        href: '/',
        live: false,
        testnet: false,
    },
    sequoiaChain: {
        image: SintropChainIcon,
        title: 'Sequoia (Testnet)',
        href: 'https://sequoia.sintrop.com',
        live: true,
        testnet: true,
    },
    regenerationCreditV7: {
        image: RCIcon,
        title: 'Crédito de Regeneração (V7)',
        href: 'https://v7.sintrop.com',
        live: true,
        testnet: true,
    },
    sintropPayMainnet: {
        image: SintropPayIcon,
        title: 'Sintrop Pay (Mainnet)',
        href: '/',
        live: false,
        testnet: false,
    },
    treinamentos: {
        image: TreinamentosIcon,
        title: 'Treinamentos',
        href: 'https://education.sintrop.com',
        live: true,
        testnet: false,
    },
    market: {
        image: SintropStoreIcon,
        title: 'Mercado',
        href: 'https://v8.sintrop.com',
        live: false,
        testnet: false,
    },
}

type AppType = typeof apps;
type AppName = keyof AppType;