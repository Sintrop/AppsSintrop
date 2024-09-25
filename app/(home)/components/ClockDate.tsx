"use client"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";

export function ClockDate(){
    const [date, setDate] = useState(new Date());

    function setDateNow(){
        setDate(new Date())
    }

    setInterval(setDateNow, 1000)

    return(
        <div className="flex flex-col items-center mb-20 gap-1">
            <p className="font-bold text-white text-7xl">
                {format(date, 'kk:mm:ss')}
            </p>

            <p className="font-bold text-white text-xl">
                {format(date, "PPPP", {locale: ptBR})}
            </p>
        </div>
    )
}