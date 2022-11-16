import React from 'react'
import { IconButton, MyAvatar, SizedBox } from '../../../components'
import { SearchBar } from '.'

export const TopBar = React.memo(() => {
  return (
    <div className='container'>
      <div className="row justify-content-end px-0">
        <div className="col-12 col-md-8 col-xl-6 px-0 d-flex">
          <SearchBar />
          <SizedBox width={10} />
          <div className='d-flex'>
            <IconButton
              icon='notifications'
              bgColor='rgba(243, 244, 245, 0.6)'
              flexGrow={1}
              onClick={() => { }}
            />
            <SizedBox width={10} />
            <IconButton
              icon='expand_more'
              bgColor='rgba(243, 244, 245, 0.6)'
              flexGrow={1}
              leftElement={<MyAvatar size={24} />}
              onClick={() => { }}
            />
          </div>
        </div>
      </div>
    </div>
  )
})
