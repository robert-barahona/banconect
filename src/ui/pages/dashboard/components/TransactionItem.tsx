import React from 'react'
import { SizedBox } from '../../../components'
import quayaquilLogo from '../../../../assets/images/b_guayaquil.svg';
import { Status } from '.';

interface Props {
  date: Date;
  id: string;
  from: string;
  bank: string;
  status: number;
  amount: number;
}

export const TransactionItem = React.memo(({ date, id, from, bank, status, amount }: Props) => {
  return (
    <>
      <div className="col-2">
        {date.toLocaleDateString()}
      </div>
      <div className="col-2">
        {id}
      </div>
      <div className="col-2">
        {from}
      </div>
      <div className="col-2 d-flex align-items-center">
        <img src={quayaquilLogo} className='rounded-circle' />
        <SizedBox width={8} />
        <span>
          {bank}
        </span>
      </div>
      <div className="col-2">
        <Status status={status} />
      </div>
      <div className="col-2">
        ${amount.toFixed(2)}
      </div>
    </>
  )
})