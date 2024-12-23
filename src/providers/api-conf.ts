import { Configuration } from "@/gen/pfds-api-client";

export const configureApi = <
  T extends { new (conf?: Configuration): InstanceType<T> },
>(
  ApiClass: T
): (() => InstanceType<T>) => {
  return () => new ApiClass();
};
