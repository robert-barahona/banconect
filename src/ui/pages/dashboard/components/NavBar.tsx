import React from "react"

import logoBlue from '../../../../assets/images/logo_blue.svg';
import { NabBarSelect, NavBarItem } from ".";
import { SizedBox } from "../../../components";
import { navbarItems } from "../../../../utils";
import { useLocation } from "react-router-dom";
import { DashboardRoutes } from "../../../../routes";

export const NavBar = React.memo(() => {

  const { pathname } = useLocation();

  return (
    <div style={navbarStyles} className='d-flex flex-column py-4'>
      <img src={logoBlue} className='w-100 px-2' />
      <SizedBox size={80} />
      <NabBarSelect />
      <SizedBox size={64} />
      <div className="flex-1">
        {
          navbarItems.map((item, i) => (
            <div key={i}>
              <NavBarItem
                icon={item.icon}
                title={item.name}
                route={item.route}
                selected={item.route === pathname}
              />
              <SizedBox size={20} />
            </div>
          ))
        }
      </div>
      <NavBarItem
        icon='settings'
        title='Configuración'
        route={DashboardRoutes.settings}
        selected={pathname === DashboardRoutes.settings}
      />
    </div>
  )
})

const navbarStyles: React.CSSProperties = {
  position: 'absolute',
  width: 240,
  bottom: 0,
  left: 0,
  top: 0,
  background: 'rgba(250, 243, 243, 0.5)',
  backdropFilter: 'blur(30px)',
  paddingRight: 18,
  paddingLeft: 18,
}