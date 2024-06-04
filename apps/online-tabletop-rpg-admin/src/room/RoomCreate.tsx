import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CombatGridTitle } from "../combatGrid/CombatGridTitle";

export const RoomCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="combatGrids"
          reference="CombatGrid"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CombatGridTitle} />
        </ReferenceArrayInput>
        <TextInput label="gm" source="gm" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
