import { HealthApi, SecurityApi, UsersApi } from "@/gen/pfds-api-client";
import { getConfiguration } from "./api-conf";

export const healthApi = () => new HealthApi(getConfiguration());
export const securityApi = () => new SecurityApi(getConfiguration());
export const usersApi = () => new UsersApi(getConfiguration());
