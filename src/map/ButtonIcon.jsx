import React from 'react';

const ButtonIcon = ({ icon, text, onClick, className }) => (
    <button className="sidebar-icon group" onClick={onClick}>
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </button>
);

export default ButtonIcon;