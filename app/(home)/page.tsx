import { AppIcon } from "../_components/AppIcon/AppIcon";

export default function Home() {
    return (
        <div className="flex flex-col w-full h-screen justify-center items-center bg-gradient-to-t from-[#1F5D38] to-[#043832]">
            <div className="flex flex-col w-[500px] gap-1">
                <p className="text-gray-200 text-sm mb-2">Live apps</p>
                <div className="flex gap-7 mb-20">
                    <AppIcon
                        appName="regenerationCredit"
                    />

                    <AppIcon
                        appName="sintropPay"
                    />
                </div>

                <p className="text-gray-200 text-sm mb-2">Future apps</p>
                <div className="flex gap-5">
                    <AppIcon
                        appName="sintropChain"
                    />
                    <AppIcon
                        appName="regenerationCreditV7"
                    />
                    <AppIcon
                        appName="sintropPayMainnet"
                    />
                    <AppIcon
                        appName="sintropStore"
                    />
                </div>
            </div>
        </div>
    );
}
