import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="bg-secondary flex p-4 justify-center md:text-xl gap-4">
            <Link href={'/'}>CarPark 2023 |</Link>
            <Link href={'/terms'}>Terms & Conditions</Link>
        </footer>
    )
}