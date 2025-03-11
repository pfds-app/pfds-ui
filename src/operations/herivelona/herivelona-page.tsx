import { ListAndCreateLayout, WithLayoutPadding } from "@/common/components";
import { UserCreate, UserList, UpdateUserRole } from "../user";
import { UserRoleEnum } from "@/gen/jfds-api-client";
import { ShowIfRole } from "@/security/components";
import { RoleBasedTabs } from "./components";
import { useTabManager } from "@/common/hooks";
import { useRole } from "@/security/hooks";

const ADMIN_TABS = [
  "admin",
  "simple-user",
  "region-manager",
  "association-manager",
  "committee-manager",
];

const REGION_MANAGER_TABS = [
  "simple-user",
  "region-manager",
  "association-manager",
  "committee-manager",
];

const DEFAULT_TABS = ["simple-user"];

const getRole = (tabIndex: number, role: UserRoleEnum) => {
  switch (role) {
    case UserRoleEnum.Admin:
      return adminGetRole(tabIndex);
    case UserRoleEnum.RegionManager:
      return regionManagerGetRole(tabIndex);
    default:
      return UserRoleEnum.SimpleUser;
  }
};

const adminGetRole = (tabIndex: number) => {
  switch (tabIndex) {
    case 0:
      return UserRoleEnum.SimpleUser;
    case 1:
      return UserRoleEnum.Admin;
    case 2:
      return UserRoleEnum.RegionManager;
    case 3:
      return UserRoleEnum.AssociationManager;
    default:
      return UserRoleEnum.CommitteeManager;
  }
};

const regionManagerGetRole = (tabIndex: number) => {
  switch (tabIndex) {
    case 0:
      return UserRoleEnum.SimpleUser;
    case 1:
      return UserRoleEnum.RegionManager;
    case 2:
      return UserRoleEnum.AssociationManager;
    default:
      return UserRoleEnum.CommitteeManager;
  }
};

export const HerivelonaPage = () => {
  const connectedRole = useRole();
  const { tabIndex, handleTabChange } = useTabManager({
    values:
      connectedRole === UserRoleEnum.Admin
        ? ADMIN_TABS
        : connectedRole === UserRoleEnum.RegionManager
          ? REGION_MANAGER_TABS
          : DEFAULT_TABS,
  });
  const role = getRole(tabIndex, connectedRole);

  return (
    <>
      <RoleBasedTabs
        tabIndex={tabIndex}
        handleTabChange={handleTabChange}
        role={connectedRole}
      />
      <WithLayoutPadding sx={{ mt: 3 }}>
        <ListAndCreateLayout>
          <ShowIfRole roles={[UserRoleEnum.Admin, UserRoleEnum.RegionManager]}>
            {role === UserRoleEnum.SimpleUser ? (
              <UserCreate role={role} />
            ) : (
              <UpdateUserRole role={role} />
            )}
          </ShowIfRole>
          <ShowIfRole
            roles={[
              UserRoleEnum.AssociationManager,
              UserRoleEnum.CommitteeManager,
            ]}
          >
            <UpdateUserRole role={role} />
          </ShowIfRole>
          <UserList role={role} />
        </ListAndCreateLayout>
      </WithLayoutPadding>
    </>
  );
};
