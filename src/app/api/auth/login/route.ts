import API_URL from "@/utils/utils";
import { cookies } from "next/headers";
import axios from "axios";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const { email, password } = await req.json();
    try {
        const response = await axios.post(`${API_URL}/auth/login`, {
            email: email,
            password: password,
        });
        cookies().set("accessToken", response.data.accessToken);
        return NextResponse.json(response.data);
    } catch (error) {
        return NextResponse.error();
    }
}