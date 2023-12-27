"use client";

import Link from "next/link";
import Image from "next/image";
import { Caladea, Oswald, Poppins, Roboto, Rokkitt } from "next/font/google";

import { cn } from "@/lib/utils";


const rokkitt = Caladea({ weight:"400", subsets: ["latin"] });

const Sidebar = () => {
    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                        <Image
                            fill
                            alt="Logo"
                            src="/logo.png"
                        />
    
                    </div>
                    <div>
                    <h1 className={cn("text-2xl", 
                    rokkitt.className)}>
                        Armstrong
                    </h1>
                    </div>
                    
                </Link>
            </div>
        </div>
    )
}
export default Sidebar;