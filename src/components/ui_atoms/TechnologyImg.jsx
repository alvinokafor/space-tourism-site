import React from 'react'

export default function TechnologyImg({image}) {
  return (
    <div className={`mt-8 w-full h-[170px] md:h-[310px] bg-${image.landscape} bg-center bg-cover lg:bg-${image.portrait} lg:bg-cover lg:w-[515px] lg:h-[527px]`}></div>
  )
}
