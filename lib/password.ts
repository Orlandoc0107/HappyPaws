import bcrypt from "bcryptjs";


export async function hashPassword(password: string): Promise<string> {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    } catch (error) {
        throw new Error('Error al hashear la contraseña');
    }
}


export async function verifyPassword(password: string, hashedPassword: string) {
    try {
        const isMatch = await bcrypt.compare(password, hashedPassword);
        return isMatch;
    } catch (error) {
        throw new Error('Error al verificar la contraseña');
    }
}

//unknown