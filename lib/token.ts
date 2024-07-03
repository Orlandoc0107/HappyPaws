import jwt from "jsonwebtoken";

const secretJWT = process.env.JWT_SECRET || 'KeyExample';
const algorit: jwt.Algorithm = process.env.ALGORITHM as jwt.Algorithm || 'HS256';

interface User {
    id: string;
    name: string | null;
    username: string | null;
    firstName: string | null;
    lastName: string | null;
    image: string | null;
    email: string;
    role: string;
}

export async function codeToken(user: User) {
    return jwt.sign({
        exp: Math.floor(Date.now() / 1000) * 60 * 60 * 24 * 7,
        id: user.id,
        name: user.name ?? '',
        username: user.username ?? '',
        firstName: user.firstName ?? '',
        lastName: user.lastName ?? '',
        image: user.image ?? '',
        email: user.email,
        role: user.role,
    },
        secretJWT,
        { algorithm: algorit }
    );
}

// el back una vez ingrese
export async function decoToken(token: string) {
    try {
        return jwt.verify(token, secretJWT);
    } catch (error) {
        throw new Error('Token inválido');
    }
}