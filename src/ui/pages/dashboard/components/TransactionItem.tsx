import React from 'react'
import { SizedBox } from '../../../components'
import quayaquilLogo from '../../../../assets/images/b_guayaquil.svg';

export const TransactionItem = () => {
  return (
    <>
      <div className="col-2">
        2022/04/17, 12:00
      </div>
      <div className="col-2">
        15834
      </div>
      <div className="col-2">
        ANGEL BENAVIDES
      </div>
      <div className="col-2 d-flex align-items-center">
        <img src={quayaquilLogo} className='rounded-circle' />
        <SizedBox width={8} />
        <span>
          B. Guayaquil
        </span>
      </div>
      <div className="col-2">
        <span style={completedStyle} className='rounded-8 px-2 py-1'>
          Completado
        </span>
      </div>
      <div className="col-2">
        =$250.00
      </div>
    </>
  )
}

const completedStyle: React.CSSProperties = {
  background: '#E3FBE2',
  color: '#008D0E',
}