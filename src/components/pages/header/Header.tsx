import FullTruckLogo from "@atoms/logo/FullTruckLogo";
import DefaultAvatar from "@molecules/avatar/DefaultAvatar";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

const Header: React.FC = () => {
  return (
    <Navbar
      className="border-b-1 dark:border-blue dark:bg-darkGrey shadow-lg"
      maxWidth="full"
    >
      <NavbarBrand>
        <FullTruckLogo />
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <DefaultAvatar />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
