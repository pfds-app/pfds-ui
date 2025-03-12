import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import {
  CreateUser,
  UpdateUser,
  User,
  UserRoleEnum,
} from "@/gen/jfds-api-client";
import { unwrap } from "./utils";
import { usersApi } from "./api";

export enum UserSaveOrUpdateActionType {
  UPDATE = "UPDATE",
  CREATE = "CREATE",
  UPDATE_USER_INFOS = "UPDATE_USER_INFOS",
  UPDATE_USER_PICTURE = "UPDATE_USER_PICTURE",
  UPDATE_ROLE = "UPDATE_ROLE",
}

export type CreateUserPayload = CreateUser & {
  photo?: any;
};
export type UpdateUserPayload = UpdateUser & {
  photo?: any;
};
export type UpdateUserPicturePayload = {
  profilePicture: any;
  id: string;
};

export enum DeleteUserActionType {
  FROM_ASSOCIATION = "FROM_ASSOCIATION",
  FROM_COMMITEE = "FROM_COMMITEE",
  ROLE = "ROLE",
  PERMANENT = "PERMANENT",
}

export const userProvider: ResourceProvider<User> = {
  resource: "user",
  getOne: async ({ id, meta }) => {
    const isGetCount = meta?.isGetCount;
    const count = await unwrap(() => usersApi().getUserMemberCount());

    if (isGetCount) {
      return { id, ...count } as any;
    }

    return unwrap(() => usersApi().getUserById(id));
  },
  delete: ({ previousData = {}, id, meta }) => {
    const {
      committee,
      region,
      sacrament,
      responsability,
      association,
      ...toUpdate
    } = previousData as User;

    switch (meta?.actionType as DeleteUserActionType) {
      case DeleteUserActionType.ROLE:
        return unwrap(() =>
          usersApi().updateUserInfo(id, {
            ...toUpdate,
            role: UserRoleEnum.SimpleUser,
            regionId: region?.id,
            responsabilityId: responsability?.id,
            sacramentId: sacrament?.id,
            associationId: association?.id,
            committeeId: committee?.id,
          })
        );
      case DeleteUserActionType.FROM_COMMITEE:
        return unwrap(() =>
          usersApi().updateUserInfo(id, {
            ...toUpdate,
            regionId: region?.id,
            responsabilityId: responsability?.id,
            sacramentId: sacrament?.id,
            associationId: association?.id,
            committeeId: null as any,
          })
        );
      case DeleteUserActionType.FROM_ASSOCIATION:
        return unwrap(() =>
          usersApi().updateUserInfo(id, {
            ...toUpdate,
            regionId: region?.id,
            responsabilityId: responsability?.id,
            sacramentId: sacrament?.id,
            committeeId: committee?.id,
            associationId: null as any,
          })
        );
      case DeleteUserActionType.PERMANENT:
        return unwrap(() => usersApi().deleteUserById(id));
      default:
        throw new Error("Invalid delete type");
    }
  },
  getList: async ({ filter = {}, pagination: { perPage, page } }) => {
    const {
      role,
      nic,
      apv,
      lastName,
      firstName,
      username,
      regionId,
      sacramentId,
      committeeId,
      associationId,
      gender,
      responsabilityId,
      q,
    } = filter;

    return unwrap(() =>
      usersApi().getUsers(
        q,
        role,
        nic,
        apv,
        lastName,
        firstName,
        username,
        responsabilityId,
        sacramentId,
        regionId,
        committeeId,
        associationId,
        gender,
        page,
        perPage
      )
    );
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
        return unwrap(() =>
          usersApi().updateUserInfo(data.id!, data as UpdateUser)
        );

      case UserSaveOrUpdateActionType.CREATE:
        const { photo, ...createUser } = data as CreateUserPayload;

        const user = await unwrap(() => usersApi().createUser(createUser));
        if (photo) {
          await usersApi().updateProfilePicture(user.id, photo);
        }
        return user;

      case UserSaveOrUpdateActionType.UPDATE:
        const { photo: photoValue, ...updateUser } = data as UpdateUserPayload;

        const userUpdated = await unwrap(() =>
          usersApi().updateUserInfo(data.id!, updateUser)
        );
        if (photoValue) {
          await usersApi().updateProfilePicture(userUpdated.id, photoValue);
        }
        return userUpdated;

      case UserSaveOrUpdateActionType.UPDATE_ROLE:
        const { ...userToUpdate } = data as UpdateUserPayload;
        return unwrap(() => usersApi().updateUserInfo(data.id!, userToUpdate));

      default:
        throw new Error("Unkown action type");
    }
  },
};
