import { CustomError } from "@/lib/errors/error";
import authApiRequest from "@/lib/https/api/auth";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const parts = request.url.split("access_token=");
  const accessToken = parts[1];
  const cookieStore = cookies();
  const refreshToken = await cookieStore.get("refreshToken")?.value;
  try {
    const { data } = await authApiRequest.NextSevrerLogout(
      refreshToken as string,
      accessToken as string
    );
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
