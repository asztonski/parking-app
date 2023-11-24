import Image from "next/image";
import Logo from "@/app/assets/logo.png";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full flex justify-center p-8">
      <Link
        href={"/"}
        className="max-h-96 w-full max-w-xl relative aspect-[2000_/_1247]"
      >
        <Image
          className=""
          alt="Image of CarPark logo brand"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={Logo}
        />
      </Link>
    </header>
  );
};
