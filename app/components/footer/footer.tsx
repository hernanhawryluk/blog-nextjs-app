import Image from "next/image";
import Link from "next/link";
import { footerData, footerLinks } from "@/libs/data";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 sm:gap-24 mt-16 sm:mt-12 mb-6 sm:mb-12">
      <div className="w-full">
        <div className="flex items-center gap-2 mb-3">
          <Image
            src={"/logo.png"}
            alt="Logo"
            width={36}
            height={36}
            className="rounded-full"
          />
          <h2 className="text-lg font-semibold">{footerData.title}</h2>
        </div>
        <div className="text-sm xl:mb-4 2xl:mb-8">
          <p className="mb-2">{footerData.p0}</p>
          <p>{footerData.p1}</p>
        </div>
        <div className="flex justify-center sm:justify-start gap-12 sm:gap-6 scale-110 sm:scale-100 mt-5 sm:mt-3">
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
      <div className="hidden sm:flex justify-between text-xs w-[30rem] pt-4">
        {footerLinks.map((link) => (
          <div key={link.title} className="flex flex-col gap-4">
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
