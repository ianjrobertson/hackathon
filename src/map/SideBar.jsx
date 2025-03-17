import { BsPlus, BsFillLightningFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
import React from 'react';
import ButtonIcon from './ButtonIcon';

const SideBar = () => {
  return (
    <div className="fixed left-0 h-full w-16 bg-gray-900 mx-auto">
      <ButtonIcon icon={<FaFire size="28" />} text="Fire 🔥" onClick={() => alert('Fire icon clicked!')} />
      <ButtonIcon icon={<BsPlus size="32" />} text="Add ➕" />
      <ButtonIcon icon={<BsFillLightningFill size="20" />} text="Lightning ⚡" />
      <ButtonIcon icon={<FaPoo size="20" />} text="Poo 💩" />
    </div>
  );
};

export default SideBar;