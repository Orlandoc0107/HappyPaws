import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { hashPassword } from "@/lib/password"

interface Data {
    email: string;
    password: string;
}

export async function POST(request: NextRequest) {
    try {
        const data: Data = await request.json();
        const { email, password } = data;
        // 
        const existingUser = await prisma.user.findFirst({
            where: { email }
        });
        // 
        if (existingUser) {
            return NextResponse.json({message: 'Existe un usuario con ese email'}, {status: 400});
        }
        // 
        const hashedPassword = await hashPassword(password);

        await prisma.user.create({
            data:{
                email,
                password: hashedPassword,
            },
        });
        return NextResponse.json({message: 'Registro Comletado'});
    }
    catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Ocurrio un error' }, { status: 500 })
    }
}