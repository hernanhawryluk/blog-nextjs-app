import Image from "next/image";
import Link from "next/link";
import { footerData, footerLinks } from "@/libs/data";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-24 mt-12 mb-12">
      <div className="sm:w-[65%]">
        <div className="flex items-center gap-2 mb-3">
          <Image
            src={"/logo.png"}
            alt="Logo"
            width={48}
            height={48}
            className="rounded-full"
          />
          <h2 className="text-xl font-semibold">{footerData.title}</h2>
        </div>
        <div className="text-sm">
          <p className="mb-2">{footerData.p0}</p>
          <p>{footerData.p1}</p>
        </div>
        <div className="flex gap-2 mt-3">
          <Link href={"/"} className="animation">
            <Image
              src={"/facebook.png"}
              alt="Facebook"
              width={24}
              height={24}
            />
          </Link>
          <Link href={"/"} className="animation">
            <Image
              src={"/instagram.png"}
              alt="Instagram"
              width={24}
              height={24}
            />
          </Link>
          <Link href={"/"} className="animation">
            <Image
              src={"/tiktok.png"}
              alt="TikTok"
              width={24}
              height={24}
              className="dark:p-[1px] dark:rounded-full dark:bg-gray-300"
            />
          </Link>
          <Link href={"/"} className="animation">
            <Image src={"/youtube.png"} alt="Youtube" width={24} height={24} />
          </Link>
        </div>
      </div>
      <div className="flex justify-between text-xs sm:w-[35%] sm:pt-4">
        {footerLinks.map((link) => (
          <div key={link.title} className="flex flex-col gap-5">
            <span className="text-sm font-semibold">{link.title}</span>
            <Link href={link.link0} className="animation">
              {link.name0}
            </Link>
            <Link href={link.link1} className="animation">
              {link.name1}
            </Link>
            <Link href={link.link2} className="animation">
              {link.name2}
            </Link>
            <Link href={link.link3} className="animation">
              {link.name3}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
