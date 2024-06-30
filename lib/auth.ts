import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


interface CustomUser {
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
    password: string;
}

// Usuarios ficticios
const users: CustomUser[] = [
    {
        id: "1",
        firstName:"Maria",
        lastName:"Rodriguez",
        address:"Misiones",
        phone:"+509998877",
        dni:"44555666",
        photo:"/perfil/perfilusuario.png",
        email: "Usuario@HappyPaws.com",
        role: "user",
        status: "active",
        username: "usuario",
        password: "password"
    },
    {
        id: "2",
        firstName:"Nombre",
        lastName:"Apellido",
        address:"Misiones",
        phone:"+509998878",
        dni:"44555667",
        photo:"/photo/perfil",
        email: "Usuario@HappyPaws.com",
        role: "user",
        status: "active",
        username: "cuidador",
        password: "password"
    }
];
// 
declare module "next-auth/jwt" {
    interface JWT {
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
// 
export const AuthOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Ingresa : usuario o cuidador" },
                password: { label: "Password", type: "password", placeholder:"Ingresa: password" }
            },
            async authorize(credentials, req) {
                console.log("Credenciales recibidas:", credentials);

                // Buscar el usuario en el arreglo de usuarios ficticios
                const user = users.find(user => {
                    console.log("Comparando usuario:", user);
                    return user.username === credentials?.username && user.password === credentials?.password;
                });

                if (user) {
                    // Eliminar el campo password antes de devolver el usuario
                    const { password, ...userWithoutPassword } = user;
                    return userWithoutPassword;
                }

                console.log("Usuario no encontrado o credenciales incorrectas");
                // Devuelve null si los datos del usuario no se pudieron recuperar
                return null;
            }
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            return true;
        },
        async redirect({ url, baseUrl }) {
            return baseUrl;
        },
        async session({ session, user, token }) {
            if (token) {
                session.user = {
                    id: token.id,
                    firstName: token.firstName,
                    lastName: token.lastName,
                    address: token.address,
                    phone: token.phone,
                    dni: token.dni,
                    photo: token.photo,
                    email: token.email,
                    role: token.role,
                    status: token.status,
                    username: token.username
                };
            }
            console.log('Esto es la session', session);
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.firstName = user.firstName;
                token.lastName = user.lastName;
                token.address = user.address;
                token.phone = user.phone;
                token.dni = user.dni;
                token.photo = user.photo;
                token.email = user.email;
                token.role = user.role;
                token.status = user.status;
                token.username = user.username;
            }
            return token;
        },
    },
};