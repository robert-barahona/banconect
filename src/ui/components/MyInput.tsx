import React from 'react'
import { SizedBox } from '.';

interface Props {
  icon: string;
  placeholder?: string;
}

export const MyInput = React.memo(({ icon, placeholder }: Props) => {
  return (
    <div className='d-flex position-relative flex-1' >
      <input
        style={{ height: 40, paddingLeft: 40, }}
        className='border-grey rounded-8 pe-2 py-1 flex-1'
        placeholder={placeholder}
      />
      <div
        style={{ height: 40 }}
        className='position-absolute d-flex align-items-center' >
        <span className='material-symbols-outlined px-2'>
          {icon}
        </span>
      </div>
    </div>
  )
})
