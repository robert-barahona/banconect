import React from 'react'
import { SizedBox } from '../../../components';

interface Props {
  title?: string;
  children?: React.ReactNode;
  removeMarginBottom?: boolean;
}

export const DataContainer = React.memo(({ title, removeMarginBottom = false, children }: Props) => {
  return (
    <>
      <div className='dashboard-container'>
        {
          title && (
            <span className='fs-20 fw-700'>
              {title}
            </span>
          )
        }
        {children}
      </div>
      {!removeMarginBottom && <SizedBox height={21} />}
    </>
  )
})
