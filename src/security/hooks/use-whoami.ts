import { authWhoamiCache } from "@/common/utils/cache";

export const useWhoami = () => {
  return authWhoamiCache.get()!;
};
