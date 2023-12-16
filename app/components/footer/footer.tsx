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
          <p>{footerData.p0}</p>
          <p>{footerData.p1}</p>
        </div>
        <div className="flex gap-2 mt-3">
          <Image src={"/facebook.png"} alt="Facebook" width={18} height={18} />
          <Image
            src={"/instagram.png"}
            alt="Instagram"
            width={18}
            height={18}
          />
          <Image src={"/tiktok.png"} alt="TikTok" width={18} height={18} />
          <Image src={"/youtube.png"} alt="Youtube" width={18} height={18} />
        </div>
      </div>
      <div className="flex justify-between text-xs sm:w-[35%] sm:pt-5">
        {footerLinks.map((link) => (
          <div key={link.title} className="flex flex-col gap-4">
            <span className="font-semibold">{link.title}</span>
            <Link href={link.link0}>{link.name0}</Link>
            <Link href={link.link1}>{link.name1}</Link>
            <Link href={link.link2}>{link.name2}</Link>
            <Link href={link.link3}>{link.name3}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
