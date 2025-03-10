import { authWhoamiCache } from "@/common/utils/cache";
import axios from "axios";

export const getAxios = () => {
  return axios.create({
    baseURL: process.env.API_URL!,
    headers: {
      Authorization: `Bearer ${authWhoamiCache.get()?.token}`,
    },
  });
};
