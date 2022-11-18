import React from 'react'
import { SizedBox } from '../../../../components';

interface Props {
  color: string;
  title: string;
  amount: number;
}

export const AmountValue = React.memo(({ color, title, amount }: Props) => {
  return (
    <div className='d-flex flex-column'>

      <div className="d-flex align-items-center">
        <div style={{ background: color, width: 19, height: 19 }} />
        <SizedBox width={8} />
        <span>
          {title}
        </span>
      </div>
      <span className='fw-700' style={{ fontSize: 44 }}>
        ${amount.toFixed(2)}
      </span>

    </div>
  )
})
