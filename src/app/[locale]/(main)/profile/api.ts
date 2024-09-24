import envConfiguration from "@/config/envConfiguration";
import { ApiUrls } from "@/config/url";
import api from "@/lib/https/axios";
export const apiGetUseProfile = async (id: string) => {
  const result = await api.get(
    ApiUrls.,
    {
      params: {
        id,
      },
      {
        baseUrl: ""
      }
    }
  );
  return result.data;
};
