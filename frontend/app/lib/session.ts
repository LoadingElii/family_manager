import { JWTPayload, SignJWT, jwtVerify } from "jose"
import { SessionPayload } from "./models"
import { cookies } from "next/headers"

const encodedKey = new TextEncoder().encode(process.env.SESSION_KEY);
const EXP_TIME = "1h";

export const encrypt = async (payload: JWTPayload) => {
    return new SignJWT(payload)
        .setProtectedHeader({alg: "HS256"})
        .setIssuedAt()
        .setExpirationTime(EXP_TIME)
        .sign(encodedKey)
}

export const decrypt = async (session: string | undefined = " ") => {
    try {
        const { payload } = await jwtVerify(session, encodedKey, {
            algorithms: ['HS256'],
        })
        return payload
    } catch(error) {
        console.log("failed to verify session")
    }
}

export async function setAuthCookie(token: string) {
    (await cookies()).set("auth_token", token, { httpOnly: true, secure: true, path: "/"});

}

export const deleteAuthCookie = async () => {
    (await cookies()).delete("auth_token");

}