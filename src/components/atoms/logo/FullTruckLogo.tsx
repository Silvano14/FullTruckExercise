import { FC } from "react";
import logo from "/logo.png";

type Props = {
  onClick?: () => void;
};

const FullTruckLogo: FC<Props> = () => {
  return <img className="bg-white p-2" alt="The FullTruck logo" src={logo} width={200} />;
};

export default FullTruckLogo;
