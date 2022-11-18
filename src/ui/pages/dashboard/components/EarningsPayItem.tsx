import React from 'react'

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
        <span className={`rounded-8 px-2 py-1 ${status === 1 ? 'status-completed' : 'status-pending'}`}>
          {status === 1 ? 'Completado' : 'Pendiente'}
        </span>
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