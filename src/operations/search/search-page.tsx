import { Search, Clear } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import {
  FunctionField,
  TextField,
  SaveButton,
  SimpleForm,
  TextInput,
  Toolbar,
  SelectInput,
  ReferenceInput,
  Button,
  useTranslate,
  useListContext,
  useListFilterContext,
  useGetOne,
} from "react-admin";
import { Count, User, UserRoleEnum } from "@/gen/jfds-api-client";
import { useFormContext } from "react-hook-form";
import { FC, useEffect, useState } from "react";

import {
  BoxPaperTitled,
  ListAndCreateLayout,
  WithLayoutPadding,
} from "@/common/components";
import { List, TranslatedEnumTextField } from "@/common/components/list";
import { createImageUrl } from "@/providers";
import { USER_GENDER_CHOICES } from "../profile/utils/gender-choices";
import { USER_ROLE_CHOICES } from "../profile/utils/role-choices";
import { StateSetter } from "@/common/utils/types";
import { ShowIfRole } from "@/security/components";

export const SearchPage = () => {
  const translate = useTranslate();
  const [filters, setFilters] = useState({});
  const [listCount, setListCount] = useState(0);
  const { data: userCount } = useGetOne<Count & { id: string }>("user", {
    id: "dummy",
    meta: { isGetCount: true },
  });

  const updateSearchFilter = (newFilterValue: Partial<User>) => {
    setFilters(newFilterValue);
  };

  return (
    <WithLayoutPadding sx={{ pt: 3 }}>
      <ListAndCreateLayout>
        <BoxPaperTitled
          sx={{ maxHeight: "400px", overflow: "auto", maxWidth: "350px" }}
          title={translate("custom.common.find_member")}
        >
          <SimpleForm
            onSubmit={updateSearchFilter}
            toolbar={
              <Toolbar sx={{ gap: 5, position: "absolute", bottom: "50px" }}>
                <ClearButton />
                <SaveButton
                  color="success"
                  icon={<Search />}
                  label={translate("ra.action.search")}
                />
              </Toolbar>
            }
          >
            <TextInput
              source="firstName"
              label={translate("resources.user.fields.firstName")}
            />
            <TextInput
              source="lastName"
              label={translate("resources.user.fields.lastName")}
            />
            <TextInput
              source="username"
              label={translate("resources.user.fields.username")}
            />
            <TextInput
              fullWidth
              label={translate("resources.user.fields.nic")}
              source="nic"
            />
            <TextInput
              fullWidth
              label={translate("resources.user.fields.apv")}
              source="apv"
            />
            <SelectInput
              translateChoice
              source="gender"
              sx={{ mb: "8px" }}
              label={translate("resources.user.fields.gender")}
              choices={USER_GENDER_CHOICES}
            />
            <SelectInput
              translateChoice
              source="role"
              sx={{ mb: "8px" }}
              label={translate("resources.user.fields.role")}
              choices={USER_ROLE_CHOICES}
            />
            <ReferenceInput
              reference="responsability"
              source="responsabilityId"
            >
              <SelectInput
                fullWidth
                optionText="name"
                label={translate("resources.responsability.name")}
              />
            </ReferenceInput>
            <ShowIfRole roles={[UserRoleEnum.Admin]}>
              <ReferenceInput reference="region" source="regionId">
                <SelectInput
                  fullWidth
                  label={translate("resources.region.name")}
                  optionText="name"
                />
              </ReferenceInput>
            </ShowIfRole>
            <ReferenceInput reference="association" source="associationId">
              <SelectInput
                fullWidth
                label={translate("resources.association.name")}
                optionText="name"
              />
            </ReferenceInput>
            <ReferenceInput reference="sacrament" source="sacramentId">
              <SelectInput
                fullWidth
                label={translate("resources.sacrament.name")}
                optionText="name"
              />
            </ReferenceInput>
            <ReferenceInput reference="committee" source="committeeId">
              <SelectInput
                fullWidth
                label={translate("resources.committee.name")}
                optionText="name"
              />
            </ReferenceInput>
          </SimpleForm>
        </BoxPaperTitled>
        <BoxPaperTitled
          title={`${translate("resources.user.name")} - Total ${userCount?.value} - ${translate("custom.common.found")} ${listCount}`}
        >
          <List
            resource="user"
            filter={filters}
            listChildren={
              <ListCountUpdated
                listCount={listCount}
                setListCount={setListCount}
              />
            }
            datagridProps={{
              rowClick: "show",
            }}
          >
            <FunctionField
              label=" "
              render={(user: User) => (
                <>
                  <Avatar
                    src={createImageUrl(user.photo ?? "")}
                    sx={{ width: "35px", height: "35px" }}
                  />
                </>
              )}
            />
            <TextField sortable={false} source="lastName" />
            <TextField sortable={false} source="firstName" />
            <TranslatedEnumTextField
              source="role"
              enumLocalSuffix="custom.enum.user_role"
            />
          </List>
        </BoxPaperTitled>
      </ListAndCreateLayout>
    </WithLayoutPadding>
  );
};

const ClearButton = () => {
  const translate = useTranslate();
  const { reset } = useFormContext();

  return (
    <Button
      size="small"
      variant="contained"
      color="error"
      startIcon={<Clear />}
      onClick={() => reset({})}
      label={translate("custom.common.clear_search")}
    />
  );
};

const ListCountUpdated: FC<{
  listCount: number;
  setListCount: StateSetter<number>;
}> = ({ setListCount }) => {
  const { data = [] } = useListContext();
  const {} = useListFilterContext();

  useEffect(() => {
    setListCount(data.length);
  }, [data.length]);

  return null;
};
