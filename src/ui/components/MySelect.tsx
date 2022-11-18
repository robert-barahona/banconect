import React from 'react'
import { SizedBox } from './SizedBox';

interface Props {
  name: string;
  options: any[];
  keyToShow: string;
  keyValue: string;
}

export const MySelect = React.memo(({ name, options, keyToShow, keyValue }: Props) => {
  return (
    <div className='d-flex position-relative'>
      <div
        style={{ height: 40, right: 0, zIndex: -1 }}
        className='position-absolute d-flex align-items-center' >
        <span className='material-symbols-outlined px-2'>
          expand_more
        </span>
      </div>
      <select
        name={name}
        style={{ height: 40, paddingRight: 40 }}
        className='bg-transparent border-grey rounded-8 ps-2 py-1 flex-1'>
        {
          options.map(opt => (
            <option value={opt[keyValue]}>{opt[keyToShow]}</option>
          ))
        }
      </select>
    </div>
  )
})
