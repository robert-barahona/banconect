import React from 'react'
import { lightEa, primary } from '../../../../../theme'
import { IconButton, SizedBox } from '../../../../components'

interface Props {
  onOptions?: () => void;
  onEdit?: () => void;
}

export const EditProfileButton = React.memo(({ onOptions, onEdit, }: Props) => {
  return (
    <div className='d-flex'>
      <IconButton
        icon="more_vert"
        bgColor={lightEa}
        height={40}
        onClick={onOptions}
      />
      <SizedBox width={16} />
      <IconButton
        icon="manage_accounts"
        bgColor={primary}
        onClick={onEdit}
        iconColor="white"
        width={160}
        height={40}
        rightElement={(
          <span className="text-white fw-700 fs-16">
            Editar perfil
          </span>
        )}
      />
    </div>
  )
})
