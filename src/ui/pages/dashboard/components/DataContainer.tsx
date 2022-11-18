import React from 'react'
import { SizedBox } from '../../../components';

interface Props {
  title?: string;
  children?: React.ReactNode;
  removeMarginBottom?: boolean;
  rightElement?: React.ReactNode;
}

export const DataContainer = React.memo(({ title, removeMarginBottom = false, children, rightElement }: Props) => {
  return (
    <>
      <div className='dashboard-container'>
        <div className="d-flex align-items-center">
          {
            title && (
              <span className='flex-1 fs-20 fw-700'>
                {title}
              </span>
            )
          }
          {rightElement}
        </div>
        {children}
      </div>
      {!removeMarginBottom && <SizedBox height={21} />}
    </>
  )
})
