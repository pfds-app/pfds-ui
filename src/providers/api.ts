import {
  HealthApi,
  MoneysApi,
  ResourcesApi,
  SecurityApi,
  UsersApi,
} from "@/gen/jfds-api-client";
import { getConfiguration } from "./api-conf";

export const healthApi = () => new HealthApi(getConfiguration());
export const securityApi = () => new SecurityApi(getConfiguration());
export const usersApi = () => new UsersApi(getConfiguration());
export const resourcesApi = () => new ResourcesApi(getConfiguration());
export const moneysApi = () => new MoneysApi(getConfiguration());
