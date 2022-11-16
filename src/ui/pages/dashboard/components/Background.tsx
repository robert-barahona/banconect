import React from 'react'

import bgImage from '../../../../assets/images/dashboard_bg.png';

export const Background = React.memo(() => {

  return (
    <img src={bgImage} alt="backgroundImg" style={bgStyle} className='position-absolute bg-white w-100 h-full' />
  )
})

const bgStyle: React.CSSProperties = {
  top: 0,
  bottom: 0,
}