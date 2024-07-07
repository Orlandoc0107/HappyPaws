import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { hashPassword } from "@/lib/password"

interface DataRegister {
    fistName: string;
    lastName: string;
    phone: string;
    email: string;
    password: string;
}

export async function POST(request: NextRequest) {
    try {
        const data: DataRegister = await request.json();
        const { fistName, lastName, phone, email, password } = data;
        // 
        const existingUser = await prisma.user.findFirst({
            where: { 
                email
            }
        });
        // 
        if (existingUser) {
            return NextResponse.json({message: 'Existe un usuario con ese email'}, {status: 400});
        }
        // 
        const hashedPassword = await hashPassword(password);

        await prisma.user.create({
            data:{
                firstName: data.fistName,
                lastName: data.lastName,
                phone: data.phone,
                email: data.email,
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