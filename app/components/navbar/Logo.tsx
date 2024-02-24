'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
const Logo  = () => 
{
    const router = useRouter();
    return(
        <div>
            <Image
            alt="Logo for Airvnv"
            className="hidden md:block cursor-pointer"
            height="100"
            width="100"
            src="/images/logo.png"/>
            This is the logo
        </div>
    )
}
export default Logo;
