import { useWhoami } from "./use-whoami";

export const useRole = () => useWhoami()?.role;
