import React from 'react'
import { useNavigate } from 'react-router-dom';
import { SizedBox } from '../../../components';

interface Props {
  icon: string;
  title: string;
  route: string;
  selected?: boolean;
}

export const NavBarItem = React.memo(({ icon, route, title, selected }: Props) => {

  const navigate = useNavigate();

  const handlePress = () => navigate(route);

  return (
    <div className={`d-flex align-items-center p-3 rounded-8 pointer ${selected && 'bg-primary-navbar-item'}`} onClick={handlePress}>
      <span className={`material-symbols-outlined ${selected ? 'color-primary-blue' : 'color-unselected'}`}>
        {icon}
      </span>
      <SizedBox size={25} />
      <span className={`fw-500 ${selected ? 'color-primary-blue' : 'color-unselected'}`}>
        {title}
      </span>
    </div>
  )
})
