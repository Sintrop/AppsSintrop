import { AppIcon } from "../_components/AppIcon/AppIcon";
import Image from "next/image";
import LogoSintrop from '../assets/img/logo-branco.png'

export default function Home() {
    return (
        <>
            <main className="flex flex-col w-full h-screen justify-center items-center bg-gradient-to-b from-[#043832] to-[#1F5D38]">
                <div className="flex flex-col w-full h-full lg:max-w-[420px] pb-20 px-3 lg:border-2 border-white rounded-lg overflow-x-hidden">
                    <div className="flex flex-col items-center py-20">
                        <Image
                            width={220}
                            height={70}
                            alt="Logo sintrop"
                            src={LogoSintrop}
                            quality={100}
                        />
                    </div>

                    <div className="flex flex-col max-w-[420px] gap-1">
                        <p className="text-gray-200 text-sm mb-2">Live apps</p>
                        <div className="flex gap-4 mb-10 flex-wrap">
                            <AppIcon
                                appName="regenerationCredit"
                            />

                            <AppIcon
                                appName="regenerationCreditV7"
                            />

                            <AppIcon
                                appName="sintropPay"
                            />

                            <AppIcon
                                appName="sequoiaChain"
                            />

                            <AppIcon
                                appName="treinamentos"
                            />
                        </div>

                        <p className="text-gray-200 text-sm mb-2">Future apps</p>
                        <div className="flex gap-4 flex-wrap">
                            <AppIcon
                                appName="sintropChain"
                            />

                            <AppIcon
                                appName="sintropPayMainnet"
                            />

                            <AppIcon
                                appName="sintropStore"
                            />

                            <AppIcon
                                appName="market"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
