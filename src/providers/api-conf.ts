import { Configuration } from "@/gen/jfds-api-client";
import { authWhoamiCache } from "@/common/utils/cache";

export const API_BASE_PATH = process.env.API_URL!;
export const getConfiguration = () => {
  const conf = new Configuration();
  conf.accessToken = authWhoamiCache.get()?.token ?? "";
  conf.basePath = API_BASE_PATH;
  return conf;
};
