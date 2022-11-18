import React from 'react'
import { EarningsPayItem, SearchBar } from '.'
import { grey } from '../../../../theme'
import { IconButton, SizedBox } from '../../../components'

export const EarningsPayList = React.memo(() => {
  return (
    <>
      <div className='d-flex align-items-center'>
        <span className='flex-1'>
          Listado
        </span>
        <SizedBox width={10} />
        <SearchBar />
        <SizedBox width={10} />

        <IconButton
          icon='filter_list'
          borderColor={grey}
          height={40}
          rightElement={<span>Filtros</span>}
        />
        <SizedBox width={10} />
        <IconButton
          icon='calendar_month'
          borderColor={grey}
          height={40}
          rightElement={<span>Fechas</span>}
        />
        <SizedBox width={10} />
        <IconButton
          icon='download'
          borderColor={grey}
          height={40}
          rightElement={<span>Descargar</span>}
        />
        <SizedBox width={10} />
        <IconButton
          icon='more_horiz'
          height={40}
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
            rightElement={<span>Fecha de corte</span>}
          />
        </div>
        <div className="col-2">
          <IconButton
            align='left'
            icon='filter_list'
            bgColor='transparent'
            flexGrow={1}
            rightElement={<span>ID</span>}
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
            rightElement={<span>Ganancia</span>}
          />
        </div>
        <div className="col-2">
          <IconButton
            align='left'
            icon='filter_list'
            bgColor='transparent'
            flexGrow={1}
            rightElement={<span>Comisión (1.9%)</span>}
          />
        </div>
        <div className="col-2">
          <IconButton
            align='left'
            icon='filter_list'
            bgColor='transparent'
            flexGrow={1}
            rightElement={<span>Total procesado</span>}
          />
        </div>
      </div>
      <hr className='my-0' />
      <SizedBox height={8} />
      <div className="row text-grey1">
        <EarningsPayItem
          date={new Date}
          id='165324'
          status={0}
          earning={250}
          commission={2.9}
        />
        <SizedBox height={12} />
        <EarningsPayItem
          date={new Date}
          id='165324'
          status={1}
          earning={250}
          commission={2.9}
        />
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
    </>
  )
})
