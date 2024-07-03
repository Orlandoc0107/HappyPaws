import Link from "next/link";
import Image from "next/image";


// Logo Header
export function LogoOne({
    src = "/logo/logoheader.svg",
    alt = "Logo",
    width = 350,
    height = 60,
    href = "/",
    className = "",
    target = "_blank"
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
    src = "/iconos/copy_right.svg",
    alt = "Copy_Right",
    width = 350,
    height = 60,
    href = "/",
    className = "",
    target = "_blank"
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
// Figma
export function IconoFigma({
    src = "/iconos/Figma.svg",
    alt = "Figma",
    width = 350,
    height = 60,
    href = "/",
    className = "",
    target = "_blank"
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

// IconoGithub
export function IconoGithub({
    src = "/iconos/github.svg",
    alt = "Copy_Right",
    width = 350,
    height = 60,
    href = "/",
    className = "",
    target = "_blank"
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

// IconoCalendario
export function IconoCalendario({
    src = "/iconos/calendario.svg",
    alt = "Calendario",
    width = 350,
    height = 60,
    href = "#",
    className = "",
}) {
    return (
        <Link href={href} passHref rel="noopener noreferrer"
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

// IconoClick
export function IconoClick({
    src = "/iconos/click.svg",
    alt = "Click",
    width = 350,
    height = 60,
    href = "#",
    className = "",
}) {
    return (
        <Link href={href} passHref rel="noopener noreferrer"
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

// IconoCorazon
export function IconoCorazon({
    src = "/iconos/corazon.svg",
    alt = "Corazon",
    width = 350,
    height = 60,
    href = "#",
    className = "",
}) {
    return (
        <Link href={href} passHref rel="noopener noreferrer"
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

// IconoLupa
export function IconoLupa({
    src = "/iconos/lupa.svg",
    alt = "Lupa",
    width = 350,
    height = 60,
    href = "#",
    className = "",
}) {
    return (
        <Link href={href} passHref rel="noopener noreferrer"
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



// IconoEstrella1
export function IconoEstrella1({
    src = "/stars/Property1.svg",
    alt = "Estrella1",
    width = 350,
    height = 60,
    href = "#",
    className = "",
}) {
    return (
        <Link href={href} passHref rel="noopener noreferrer"
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

// IconoEstrella2
export function IconoEstrella2({
    src = "/stars/Property2.svg",
    alt = "Estrella2",
    width = 350,
    height = 60,
    href = "#",
    className = "",
}) {
    return (
        <Link href={href} passHref rel="noopener noreferrer"
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

// IconoEstrella3
export function IconoEstrella3({
    src = "/stars/Property3.svg",
    alt = "Estrella3",
    width = 350,
    height = 60,
    href = "#",
    className = "",
}) {
    return (
        <Link href={href} passHref rel="noopener noreferrer"
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

// IconoEstrella4
export function IconoEstrella4({
    src = "/stars/Property4.svg",
    alt = "Estrella4",
    width = 350,
    height = 60,
    href = "#",
    className = "",
}) {
    return (
        <Link href={href} passHref rel="noopener noreferrer"
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

// IconoEstrella5
export function IconoEstrella5({
    src = "/stars/Property5.svg",
    alt = "Estrella5",
    width = 350,
    height = 60,
    href = "#",
    className = "",
}) {
    return (
        <Link href={href} passHref rel="noopener noreferrer"
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


// CopyVerde
export function LogoCopyVerde({
    width = 350,
    height = 60,
    fill = "#0A6141",
    className = ""
}) {
    return (
        <div className={className}>
            <svg
                width={width}
                height={height}
                viewBox="0 0 24 24"
                fill={fill}
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="ic:baseline-copyright">
                    <path
                        id="Vector"
                        d="M11.88 9.14C13.16 9.2 13.49 10.29 13.51 10.8H15.3C15.22 8.82 13.81 7.61 11.85 7.61C9.64 7.61 8 9 8 12.14C8 14.08 8.93 16.38 11.84 16.38C14.06 16.38 15.25 14.73 15.28 13.43H13.49C13.46 14.02 13.04 14.81 11.86 14.87C10.55 14.83 10 13.81 10 12.14C10 9.25 11.28 9.16 11.88 9.14ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                        fill={fill}
                    />
                </g>
            </svg>
        </div>

    )
}