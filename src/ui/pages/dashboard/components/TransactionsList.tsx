import React from 'react'
import { grey } from '../../../../theme'
import { IconButton, SizedBox } from '../../../components'
import { TransactionItem } from '.';

export const TransactionsList = React.memo(() => {
  return (
    <div>
      <div className='d-flex align-items-center'>
        <span className='flex-1'>
          Listado
        </span>
        <SizedBox width={10} />
        <div className='d-flex align-items-center border-grey rounded-8 px-2 py-1 flex-1' style={{ height: 40 }}>
          <span className='material-symbols-outlined'>
            search
          </span>
          <SizedBox width={10} />
          <input
            className='flex-1'
            placeholder='Buscar en el listado'
          />
        </div>
        <SizedBox width={10} />

        <IconButton
          icon='filter_list'
          borderColor={grey}
          rightElement={<span>Filtros</span>}
        />
        <SizedBox width={10} />
        <IconButton
          icon='calendar_month'
          borderColor={grey}
          rightElement={<span>Fechas</span>}
        />
        <SizedBox width={10} />
        <IconButton
          icon='download'
          borderColor={grey}
          rightElement={<span>Descargar</span>}
        />
        <SizedBox width={10} />
        <IconButton
          icon='more_horiz'
          borderColor={grey}
        />
      </div>
      <SizedBox height={8} />
      <hr className='my-0' />
      <div className="row py-2">
        <div className="col-2">
          <IconButton
            align='left'
            icon='filter_list'
            bgColor='transparent'
            flexGrow={2}
            rightElement={<span>Fecha</span>}
          />
        </div>
        <div className="col-2">
          <IconButton
            align='left'
            icon='filter_list'
            bgColor='transparent'
            flexGrow={1}
            rightElement={<span>ID transaccion</span>}
          />
        </div>
        <div className="col-2">
          <IconButton
            align='left'
            icon='filter_list'
            bgColor='transparent'
            flexGrow={1}
            rightElement={<span>Desde</span>}
          />
        </div>
        <div className="col-2">
          <IconButton
            align='left'
            icon='filter_list'
            bgColor='transparent'
            flexGrow={1}
            rightElement={<span>Int. Financiera</span>}
          />
        </div>
        <div className="col-2">
          <IconButton
            align='left'
            icon='filter_list'
            bgColor='transparent'
            flexGrow={1}
            rightElement={<span>Estado</span>}
          />
        </div>
        <div className="col-2">
          <IconButton
            align='left'
            icon='filter_list'
            bgColor='transparent'
            flexGrow={1}
            rightElement={<span>Costo</span>}
          />
        </div>
      </div>
      <hr className='my-0' />
      <SizedBox height={8} />
      <div className="row text-grey1">
        <TransactionItem />
        <SizedBox height={8} />
        <TransactionItem />
        <SizedBox height={8} />
        <TransactionItem />
      </div>
      <SizedBox height={8} />
      <hr className='my-0' />
      <SizedBox height={8} />
      <div className="d-flex align-items-center">
        <span className='text-muted flex-1'>
          Item por página: 1-10 of 200 items
        </span>
        <IconButton
          icon='expand_more'
          bgColor='rgba(94, 99, 102, 0.08)'
          height={23}
          leftElement={<span className='ps-2'>1</span>}
        />
        <SizedBox width={8} />
        <span>
          of 44 pages
        </span>
        <SizedBox width={8} />
        <IconButton
          icon='expand_more'
          bgColor='rgba(94, 99, 102, 0.08)'
          height={23}
          leftElement={<span className='ps-2'>10</span>}
        />
        <SizedBox width={8} />
        <IconButton
          height={23}
          icon='chevron_left'
        />
        <SizedBox width={8} />
        <IconButton
          height={23}
          icon='chevron_right'
        />
      </div>

    </div>
  )
})