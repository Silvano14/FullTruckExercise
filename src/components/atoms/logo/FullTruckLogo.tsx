import { FC } from "react";
import logo from "/logo.png";

type Props = {
  onClick?: () => void;
};

const FullTruckLogo: FC<Props> = ({ onClick }) => {
  return <img alt="The FullTruck logo" src={logo} onClick={onClick} width={200} />;
};

export default FullTruckLogo;
