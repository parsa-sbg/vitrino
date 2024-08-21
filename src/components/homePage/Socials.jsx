import { FaLinkedin } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { SiAparat } from "react-icons/si";

export default function Socials() {
    return (
        <div className="flex gap-10">
            <IoLogoTwitter className="transition-colors hover:text-gray-950 dark:hover:text-white cursor-pointer" size={18} />
            <RiInstagramFill className="transition-colors hover:text-gray-950 dark:hover:text-white cursor-pointer" size={18} />
            <FaLinkedin className="transition-colors hover:text-gray-950 dark:hover:text-white cursor-pointer" size={18} />
            <SiAparat className="transition-colors hover:text-gray-950 dark:hover:text-white cursor-pointer" size={18} />
        </div>)
}
