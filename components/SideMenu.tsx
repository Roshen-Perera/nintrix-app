import React, { FC } from 'react'

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu:FC<SideMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div>
      Side Menu
    </div>
  )
}

export default SideMenu