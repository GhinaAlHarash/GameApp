import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";
import { Icon } from "@chakra-ui/react";

interface Props {
  platforms: Platform[];
}

const PlatformsIcons = ({ platforms }: Props) => {
  const icons: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
    nintendo: SiNintendo,
  };

  return (
    <>
      {platforms.map((platform) => (
        <Icon
          as={icons[platform.slug]}
          color="gray.500"
          size="10px"
          margin="1px"
        />
      ))}
    </>
  );
};

export default PlatformsIcons;
