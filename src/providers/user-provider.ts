import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { CreateUser, UpdateUser, User } from "@/gen/jfds-api-client";
import { unwrap } from "./utils";
import { usersApi } from "./api";

export enum UserSaveOrUpdateActionType {
  CREATE = "CREATE",
  UPDATE_USER_INFOS = "UPDATE_USER_INFOS",
  UPDATE_USER_PICTURE = "UPDATE_USER_PICTURE",
}

export type CreateUserPayload = CreateUser & {
  photo?: any;
};
export type UpdateUserPicturePayload = {
  profilePicture: any;
  id: string;
};
export const userProvider: ResourceProvider<User> = {
  resource: "user",
  getOne: async ({ id }) => {
    return unwrap(() => usersApi().getUserById(id));
  },
  getList: async ({ filter = {}, pagination: { perPage, page } }) => {
    const { role } = filter;
    return unwrap(() => usersApi().getUsers(role, page, perPage));
  },
  getMany: async (_resource, { ids }) => {
    const [id] = ids as string[]; // as we use only select input and never array input
    return {
      data: [await unwrap(() => usersApi().getUserById(id))],
    } as any;
  },
  saveOrUpdate: async ({ data, meta = {} }) => {
    const { actionType } = meta as { actionType: UserSaveOrUpdateActionType };
    if (!actionType) {
      throw new Error("Must specifify actionType in meta of saveOrUpdateUser");
    }

    switch (actionType) {
      case UserSaveOrUpdateActionType.UPDATE_USER_PICTURE:
        const { userId } = meta as { userId: string };
        await usersApi().updateProfilePicture(
          userId,
          (data as UpdateUserPicturePayload).profilePicture
        );
        return data as User;
      case UserSaveOrUpdateActionType.UPDATE_USER_INFOS:
        return unwrap(() => usersApi().updateUserInfo(data as UpdateUser));
      case UserSaveOrUpdateActionType.CREATE:
        const { photo, ...createUser } = data as CreateUserPayload;

        const user = await unwrap(() => usersApi().createUser(createUser));
        if (photo) {
          await usersApi().updateProfilePicture(user.id, photo);
        }
        return user;
      default:
        throw new Error("Unkown action type");
    }
  },
};
