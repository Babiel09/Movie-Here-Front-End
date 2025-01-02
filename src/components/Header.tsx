import { Clapperboard, House, User } from 'lucide-react';


export function Header() {
    return (
        <>
            <header className='bg-blue-500 text-white p-4'>
                <div className='flex justify-center text-center mt-4'>
                    <Clapperboard size={70} className=""/>
                    <h3 className='text-2xl pt-4 pl-2 font-semibold md:pl-5'>
                        Bem vindo ao Movie Here
                    </h3>
                </div>

                <div className='flex justify-end pt-4'>
                    
                    <a href="#" className='pl-5'>
                    <span className='hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>   
                            Home
                        </span>
                    </a>
                    
                    <a href="#" className='pl-5'>
                        <span className='hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>   
                            Movies
                        </span>
                    </a>
                    <a href="#" className='pr-7 pl-5'>
                        <span className='hover:bg-blue-600 text-white font-bold py-2 px-2 rounded hover:scale-105 duration-200'>   
                            Login
                        </span>
                    </a>
                </div> 
                
            </header>
        </>
    )
}