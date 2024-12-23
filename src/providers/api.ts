import { HealthApi, SecurityApi, UsersApi } from "@/gen/pfds-api-client";
import { configureApi } from "./api-conf";

export const healthApi = configureApi(HealthApi);
export const securityApi = configureApi(SecurityApi);
export const usersApi = configureApi(UsersApi);
