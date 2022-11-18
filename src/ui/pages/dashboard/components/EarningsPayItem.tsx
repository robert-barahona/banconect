import React from 'react'
import { Status } from '.';

interface Props {
  date: Date;
  id: string;
  status: number;
  earning: number;
  commission: number;
}

export const EarningsPayItem = React.memo(({ date, id, status, earning, commission }: Props) => {
  return (
    <>
      <div className="col-2">
        {date.toLocaleDateString()}
      </div>
      <div className="col-2">
        {id}
      </div>
      <div className="col-2">
        <Status status={status} />
      </div>
      <div className="col-2">
        ${earning.toFixed(2)}
      </div>
      <div className="col-2 d-flex align-items-center">
        ${commission.toFixed(2)}
      </div>
      <div className="col-2">
        ${(earning + commission).toFixed(2)}
      </div>
    </>
  )
})