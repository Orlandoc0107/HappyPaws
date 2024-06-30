import "next-auth";
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";


declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            firstName: string;
            lastName: string;
            address: string;
            phone: string;
            dni: string;
            photo: string;
            email: string;
            role: string;
            status: string;
            username: string;
        } & DefaultSession["user"];
    }

    interface User {
        id: string;
        firstName: string;
        lastName: string;
        address: string;
        phone: string;
        dni: string;
        photo: string;
        email: string;
        role: string;
        status: string;
        username: string;
    }
}

// Extiende la interfaz JWT predeterminada de next-auth
declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        role: string;
        status: string;
        username: string;
    }
}
