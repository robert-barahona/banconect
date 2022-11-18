import React from 'react'
import { primary } from '../../../../../theme'
import { SizedBox } from '../../../../components'
import { MyButton } from '../../../../components/MyButton'

export const Filters = React.memo(() => {
  return (
    <div className='d-flex align-items-center'>
      <div className='rounded-4px bg-white d-flex py-1 align-items-center justify-content-center' style={{ width: 128 }}>
        <span className='material-symbols-outlined' style={{ fontSize: 30 }}>
          filter_alt
        </span>
        <SizedBox width={8} />
        <span className='fs-16 fw-600'>
          Filtros
        </span>
      </div>
      <SizedBox width={24} />
      <MyButton
        title='Todos'
        bgColor={primary}
        textColor='white'
      />
      <SizedBox width={8} />
      <MyButton
        title='Completas'
        bgColor='white'
      />
      <SizedBox width={8} />
      <MyButton
        title='Incompletas'
        bgColor='white'
      />
      <SizedBox width={8} />
      <MyButton
        title='Error'
        bgColor='white'
      />
    </div>
  )
})
