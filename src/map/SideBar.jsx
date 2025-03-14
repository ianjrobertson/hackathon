import { BsPlus, BsFillLightningFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
import React from 'react';

const SideBar = ({ className }) => {
  return (
    <div className={`${className}`}>
      <SideBarIcon icon={<FaFire size="28" />} text="Fire 🔥" />
      <SideBarIcon icon={<BsPlus size="32" />} text="Add ➕" />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} text="Lightning ⚡" />
      <SideBarIcon icon={<FaPoo size="20" />} text="Poo 💩" />
    </div>
  );
};

const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default SideBar;