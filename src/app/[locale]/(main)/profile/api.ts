import envConfiguration from "@/config/envConfiguration";
import api from "@/lib/https/axios";
export const apiGetUseProfile = async (id: string) => {
  const result = await api.get(
    `${envConfiguration.NEXT_PUBLIC_API_BACKEND_URL}/user/customer-profile`,
    {
      params: {
        id,
      },
    }
  );
  return result.data;
};
