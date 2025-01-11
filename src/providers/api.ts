import {
  HealthApi,
  MoneysApi,
  ResourcesApi,
  SecurityApi,
  UsersApi,
} from "@/gen/jfds-api-client";
import { API_BASE_PATH, getConfiguration } from "./api-conf";

export const createImageUrl = (filename: string) =>
  `${API_BASE_PATH}/files/${filename}`;
export const healthApi = () => new HealthApi(getConfiguration());
export const securityApi = () => new SecurityApi(getConfiguration());
export const usersApi = () => new UsersApi(getConfiguration());
export const resourcesApi = () => new ResourcesApi(getConfiguration());
export const moneysApi = () => new MoneysApi(getConfiguration());
