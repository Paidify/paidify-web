import Image from "next/image";
import Link from "next/link";

const Header = () => {

    return (
        <nav className="flex justify-between mx-32 mt-4 pb-2">
            <Link href="/" className="self-end">
                <Image src="/images/logo.svg" width={160} height={40} />
            </Link>
        </nav>
    );
}

export default Header;