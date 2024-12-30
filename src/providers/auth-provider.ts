import { AuthProvider } from 'react-admin';
import { isAxiosError } from 'axios';
import { SigninPayload } from '@/gen/pfds-api-client';
import { authWhoamiCache, clearCaches } from '@/common/utils/cache';
import { securityApi } from './api';
import { unwrap } from './utils';

const TO_SIGNOUT_STATUS_CODES = [403, 401];
const shouldSignout = (error: any) => {
  return isAxiosError(error) && TO_SIGNOUT_STATUS_CODES.includes(error.status ?? 0);
};
export const authProvider: AuthProvider = {
  login: async (loginData: SigninPayload) => {
    const whoami = await unwrap(() => securityApi().signin(loginData));
    authWhoamiCache.replace(whoami);
  },
  logout: async () => {
    clearCaches();
  },
  checkError: (error) => {
    return shouldSignout(error) ? Promise.reject() : Promise.resolve();
  },
  checkAuth: async () => {
    try {
      await securityApi().whoami();
      return Promise.resolve();
    } catch (error) {
      return shouldSignout(error) ? Promise.reject() : Promise.resolve();
    }
  },
  getIdentity: async () => {
    const whoami = authWhoamiCache.get();
    if (!whoami) {
      return Promise.resolve({
        id: "",
        avatar: "",
        fullName: ""
      })
    }

    return Promise.resolve({ id: whoami.id, fullName: whoami.username, avatar: whoami.photo });
  },
  getPermissions: () => Promise.resolve([]),
};
