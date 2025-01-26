import { Configuration } from "@/gen/jfds-api-client";
import { Env } from "@/conf/env";
import { authWhoamiCache } from "@/common/utils/cache";

export const API_BASE_PATH = process.env.API_URL!;
export const getConfiguration = () => {
  const conf = new Configuration();
  conf.accessToken = authWhoamiCache.get()?.token ?? "";
  conf.basePath = Env.apiUrl;
  return conf;
};
