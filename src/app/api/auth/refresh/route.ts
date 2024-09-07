import { CustomError } from "@/lib/errors/error";
import authApiRequest from "@/lib/https/api/auth";
import { LoginBodyType } from "@/lib/schemas/schema-validation";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const cookieStore = cookies();
  const refreshToken = await cookieStore.get("refreshToken")?.value;
  const res = (await request.json()) as LoginBodyType;
  try {
    const { data } = await authApiRequest.NextServerRefresh(
      refreshToken as string
    );
    const {
      data: { access_token, refresh_token },
    } = data;
    const decodedRefreshToken = jwtDecode(refresh_token) as { exp: number };
    cookieStore.set("loggedIn", String(Boolean(access_token)), {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      secure: true,
    });
    cookieStore.set("refreshToken", refresh_token, {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      secure: true,
      expires: new Date(decodedRefreshToken.exp * 1000),
    });
    return Response.json(data);
  } catch (error) {
    cookieStore.delete("loggedIn");
    if (error instanceof CustomError) {
      return Response.json(
        { message: error.message },
        {
          status: error.status,
        }
      );
    } else {
      return Response.json(
        {
          message: "Lỗi không xác định",
        },
        {
          status: 500,
        }
      );
    }
  }
}
