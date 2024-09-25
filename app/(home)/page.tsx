import Link from "next/link";
import { ClockDate } from "./components/ClockDate";
import { AppIcon } from "../_components/AppIcon/AppIcon";

export default function Home() {
    return (
        <div className="flex flex-col w-full h-screen justify-center items-center">

            <ClockDate />

            <div className="flex flex-col w-[500px] gap-1">
                <p className="text-gray-300 text-sm">Live apps</p>
                <div className="flex gap-7">
                    <AppIcon
                        appName="regenerationCredit"
                    />

                    <AppIcon
                        appName="sintropPay"
                    />
                </div>

                <p className="text-gray-300 text-sm mt-12">Future apps</p>
                <div className="flex gap-5">
                    <Link
                        href='https://google.com.br'
                        target="_blank"
                        className="w-[80px] h-[80px] bg-blue-500"
                    >
                    </Link>

                    <Link
                        href='https://google.com.br'
                        target="_blank"
                        className="w-[80px] h-[80px] bg-blue-500"
                    >
                    </Link>

                    <Link
                        href='https://google.com.br'
                        target="_blank"
                        className="w-[80px] h-[80px] bg-blue-500"
                    >
                    </Link>

                    <Link
                        href='https://google.com.br'
                        target="_blank"
                        className="w-[80px] h-[80px] bg-blue-500"
                    >
                    </Link>
                </div>
            </div>
        </div>
    );
}
