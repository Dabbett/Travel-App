import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-10 py-10 pb-32 md:gap-10 lg:py-20 xl:flex-row border-2 border-red-500'>

        <div className='hero-map' />

        <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
            <Image src="/tent.png" alt="tent" width={130} height={130} className='absolute left-[-5px] top-[-10px] w-20 lg:w-[130px] lg:top-[-40px]'/>
        </div>
        <h1 className='bold-52 lg:bold-68'> Wilderness Tent Retreat</h1>
        <p className='regular-16 mt-0 text-gray-30 xl:max-w-[520px]'>Find peace in the great outdoors, where nature's simplicity and starlit nights create unforgettable moments. Camping is a chance to reconnect, relax, and savor life's simple joys.</p>

        <div className=' flex flex-wrap gap-5'>
            <div className='flex items-center gap-1'>
                {Array(5).fill(1).map((_,index) => (
                    <Image 
                    src="/star.png"
                    key={index}
                    alt="star"
                    width={24}
                    height={24}
                    />
                ))}
            </div>
            <p className='bold-16 lg:bold-20 text-cyan-500'>
                204K
                <span className='regular-16 lg:regular-20 ml-1'> Reviews</span>
            </p>
        </div>

        <div className=''>

        
        </div>
    </section>
  )
}

export default Hero
