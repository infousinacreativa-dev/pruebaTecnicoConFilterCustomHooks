import {Instagram, Linkedin, Github, Facebook } from 'lucide-react'


export function RedSocialNav (){

    return(
        <div className="flex flex-row gap-5">
            <a href="" className='aspect-square-12 bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 p-2 rounded-full text-white hover:scale-110 transition-transform'> <Instagram /> </a>
            <a href="" className='aspect-square-12 bg-blue-600 p-2 rounded-full text-white hover:scale-110 transition-transform'> <Linkedin /> </a>
            <a href="" className='aspect-square-12 bg-gray-800 p-2 rounded-full text-white hover:scale-110 transition-transform'> <Github /> </a>
            <a href="" className='aspect-square-12 bg-blue-500 p-2 rounded-full text-white hover:scale-110 transition-transform'> <Facebook /> </a>
        </div>
    )
}
