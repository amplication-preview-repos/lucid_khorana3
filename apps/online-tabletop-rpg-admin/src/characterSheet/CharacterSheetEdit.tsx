import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CharacterSheetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="assignedUser" source="assignedUser" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
