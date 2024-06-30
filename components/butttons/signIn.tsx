import { useSession, signIn, signOut } from "next-auth/react"

export default function SignOut() {
    const { data: session } = useSession()
    return (
        <>
            <button onClick={() => signIn()}>Salir</button>
        </>
    )
}
