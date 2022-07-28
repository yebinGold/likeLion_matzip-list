import React from "react";
import { Icon, PlusIcon, MatzipBlock } from "../styledComponents";
import {
  faBowlFood,
  faFishFins,
  faWheatAwn,
  faChampagneGlasses,
  faMugHot,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const typeIcon = [
  { type: "한식", icon: faBowlFood },
  { type: "중식", icon: faWheatAwn },
  { type: "일식", icon: faFishFins },
  { type: "양식", icon: faChampagneGlasses },
  { type: "카페", icon: faMugHot },
];

const Matzip = ({ name, type, onAdd }) => {
  const nowIcon = typeIcon.find((elem) => {
    if (elem.type === type) {
      return true;
    }
    return false;
  });

  return (
    <MatzipBlock>
      <Icon>
        <FontAwesomeIcon icon={nowIcon.icon} />
      </Icon>
      <div>
        <h4 className="gmarket">{name}</h4>
        <span>{type}</span>
      </div>
      <PlusIcon>
        <FontAwesomeIcon onClick={() => onAdd(name)} className="shadow" icon={faCirclePlus} />
      </PlusIcon>
    </MatzipBlock>
  );
};

export default Matzip;
