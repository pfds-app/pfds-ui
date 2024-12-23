import { Configuration } from "@/gen/pfds-api-client";

export const configureApi = <
  T extends { new(conf?: Configuration): InstanceType<T> },
>(
  ApiClass: T
): (() => InstanceType<T>) => {
  const conf = new Configuration();
  conf.accessToken = "test";
  return () => new ApiClass(conf);
};
