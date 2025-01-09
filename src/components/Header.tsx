import { Clapperboard } from 'lucide-react';
import Link from "next/link"

export function Header() {
    return (
        <header className='bg-blue-500 text-white pt-1'>
            <div className='flex justify-start text-center mt-2'>
                <Clapperboard size={130} className='md:size-40'/>
                <h2 className='text-2xl pt-16 pl-2 font-bold md:pl-5 md:text-4xl'>
                    Movie Here
                </h2>
            </div>

            <div className='flex justify-end pb-3 pr-3 md:text-xl'>
                
                <Link href="#" className='pl-5'>
                    <span className='hover:bg-blue-600 text-white font-bold py-2 px-4rounded'>   
                        Home
                    </span>
                </Link>
                
                <Link href="#" className='pl-5'>
                    <span className='hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>   
                        Movies
                    </span>
                </Link>
                <Link href="#" className='pr-2 pl-5'>
                    <span className='hover:bg-blue-600 text-white font-bold py-2 px-2 rounded hover:scale-105 duration-200'>   
                        Login
                    </span>
                </Link>
            </div>          
        </header>
    )
}