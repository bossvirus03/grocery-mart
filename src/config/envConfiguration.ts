import { z } from "zod";
const configSchema = z.object({
  NEXT_PUBLIC_API_BACKEND_URL: z.string(),
  NEXT_PUBLIC_URL: z.string(),
  NEXT_PUBLIC_TOKEN_KEY: z.string(),
});

const configProject = configSchema.safeParse({
  NEXT_PUBLIC_API_BACKEND_URL: process.env.NEXT_PUBLIC_API_BACKEND_URL,
  NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
  NEXT_PUBLIC_TOKEN_KEY: process.env.NEXT_PUBLIC_TOKEN_KEY,
});

if (!configProject.success) {
  console.log(configProject.error.errors);
  throw new Error("Các biến khai báo môi trường không hợp lệ!");
}

const envConfiguration = configProject.data;

export default envConfiguration;
