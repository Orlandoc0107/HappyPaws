import "next-auth";
import { JwtPayload } from "jsonwebtoken";

declare module "next-auth" {
  interface Session {
    user: {
      token: string;
      data: {
        id: string;
        name: string | null;
        username: string | null;
        firstName: string | null;
        lastName: string | null;
        image: string | null;
        email: string | null;
        role: string;
        exp: number;
      };
    };
  }
}