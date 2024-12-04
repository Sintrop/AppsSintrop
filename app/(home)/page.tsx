import { AppIcon } from "../_components/AppIcon/AppIcon";
import { Header } from "../_components/Header/Header";

export default function Home() {
    return (
        <>
            <Header />
            <main className="flex flex-col w-full h-screen justify-center items-center bg-gradient-to-b from-[#043832] to-[#1F5D38]">
                <div className="flex flex-col min-w-[500px] gap-1">
                    <p className="text-gray-200 text-sm mb-2">Live apps</p>
                    <div className="flex gap-10 mb-20 flex-wrap">
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
                    <div className="flex gap-10 flex-wrap">
                        <AppIcon
                            appName="sintropChain"
                        />

                        <AppIcon
                            appName="sintropPayMainnet"
                        />
                        <AppIcon
                            appName="sintropStore"
                        />
                    </div>
                </div>
            </main>
        </>
    );
}
