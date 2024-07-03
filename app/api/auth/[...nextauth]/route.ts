import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt from "jsonwebtoken"

const secret = `${process.env.JWT_SECRET}`

// 
interface UserData {
  id: string;
  name: string | null;
  username: string | null;
  firstName: string | null;
  lastName: string | null;
  image: string | null;
  email: string | null;
  role: string;
  exp: number;
}

// 

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "test@test.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`,
          {
            method: "POST",
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
            headers: { 
              "Content-Type": "application/json" 
            },
          }
        );
        const user = await res.json();

        if (res.status === 401) {
          throw new Error("Credenciales incorrectas");
        }
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {

      return { ...token, ...user };
    },
    async session({ session, token }) {
      
      session.user = token as any;
      const tokenString = String(session.user.token);
      const data = jwt.verify(tokenString, secret) as UserData;
      console.log(data)
      if (data) {
        session.user.data = data;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
