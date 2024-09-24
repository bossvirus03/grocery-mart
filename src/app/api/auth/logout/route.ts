import { CustomError } from "@/lib/errors/error";
import authApiRequest from "@/lib/https/api/auth";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  const refreshToken = await cookieStore.get("refreshToken")?.value;
  console.log("check refresh token", refreshToken);
  try {
    const { data } = await authApiRequest.NextSevrerLogout(
      refreshToken as string
    );
    console.log("sendddddddđ", data);
    cookieStore.set("loggedIn", String(false));
    cookieStore.set("refreshToken", "");
    return Response.json(data);
  } catch (error) {
    console.error("Failed to logout:", error);
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
