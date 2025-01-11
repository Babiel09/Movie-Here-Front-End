import { Clapperboard } from 'lucide-react';
import Image from 'next/image';
import picgabriel from '../../assets/picgabriel.png';
import picguilherme from '../../assets/picguilherme.png';

export function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 bg-blue-500 w-screen p-3">  
            <div>
                <div className='flex justify-end'>
                    <Image
                    src={picgabriel}
                    alt='Gabriel. Github: "babiel09".'
                    className='size-28 rounded-lg p-2'/>

                    <Image
                    src={picguilherme}
                    alt='Gabriel. Github: Nu S "nunesIug".'
                    className='size-28 rounded-xl p-2'/>
                    <Clapperboard size={90} className='md:size-30'/>
                </div>
                <p className='p-2'>
                    Movie Here é um website de streaming de filmes antigos até aos novos. <br />
                    Todos os filmes que tiver interesse em assistir, busque aqui que você achará.
                </p>
            </div>
        </footer>
    )
}