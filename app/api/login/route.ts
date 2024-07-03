import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { verifyPassword } from "@/lib/password";
import { codeToken } from "@/lib/token";


interface Data {
    email: string;
    password: string;
}

export async function POST(request: NextRequest) {
    try {
        const data: Data = await request.json();
        const { email, password } = data;
        // 
        const user = await prisma.user.findUnique({
            where: { email: data.email },
        });
        // 
        if (user) {
            const hashedPassword = user.password as string
            const compare = await verifyPassword(data.password, hashedPassword)
            if (!compare) {
                return NextResponse.json({ message: 'Error al Ingresar la Password' }, { status: 401 })
            }
            const token = await codeToken({
                id: user.id,
                name: user.name,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                image: user.image,
                email:user.email,
                role: user.role
            });
            return NextResponse.json({ token }, { status: 200 });
        } else {
            return NextResponse.json({ message: 'Usuario no encontrado' }, { status: 404 })
        }

    }
    catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Ocurrio un error al ingresar' }, { status: 500 })
    }
}