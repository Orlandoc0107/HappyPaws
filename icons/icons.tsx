import Link from "next/link";
import Image from "next/image";


// Logo Header
export function LogoOne({
    src="/logo/logoheader.svg",
    alt="Logo",
    width=350,
    height=60,
    href="/",
    className="",
    target="_blank"
}) {
    return (
        <Link href={href} passHref target={target} rel="noopener noreferrer"
        className={className}>
            <Image 
            src={src}
            alt={alt}
            width={width}
            height={height}
            />
        </Link>
    )
}

// Copy 
export function LogoCopy({
    src="/iconos/copy_right.svg",
    alt="Copy_Right",
    width=350,
    height=60,
    href="/",
    className="",
    target="_blank"
}) {
    return (
        <Link href={href} passHref target={target} rel="noopener noreferrer"
        className={className}>
            <Image 
            src={src}
            alt={alt}
            width={width}
            height={height}
            />
        </Link>
    )
}