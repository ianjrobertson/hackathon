import { BsPlus, BsFillLightningFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
import ButtonIcon from './ButtonIcon';

const SideBar = () => {
  return (
    <aside className="flex flex-col gap-4 bg-gradient-to-b from-accent via-primary to-accent px-1">
      <ButtonIcon icon={<FaFire size="28" />} text="Fire 🔥" onClick={() => alert('Fire icon clicked!')} />
      <ButtonIcon icon={<BsPlus size="32" />} text="Add ➕" />
      <ButtonIcon icon={<BsFillLightningFill size="20" />} text="Lightning ⚡" />
      <ButtonIcon icon={<FaPoo size="20" />} text="Poo 💩" />
    </aside>
  );
};

export default SideBar;