import ButtonIcon from './ButtonIcon';
import { FaHouseChimney } from 'react-icons/fa6';

const SideBar = ({setData}) => {
  return (
    <aside className="flex flex-col gap-4 px-1">
      <ButtonIcon icon={<FaHouseChimney size="28" />} text="Edgemont" onClick={() => setData("/data/edgemont.json")} />
      <ButtonIcon icon={<FaHouseChimney size="28" />} text="Grandview" onClick={() => setData("/data/grandview.json")}/>
      <ButtonIcon icon={<FaHouseChimney size="28" />} text="Tree Streets" onClick={() => setData("/data/tree-streets.json")}/>
      <ButtonIcon icon={<FaHouseChimney size="28" />} text="Provost" onClick={() => setData("/data/provost.json")}/>
    </aside>
  );
};

export default SideBar;