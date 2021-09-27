import { Box, Ionicon, Text } from "components";
import { Colors } from "constants/Colors";
import { useQuery } from "lib/hooks/useQuery";
import useTranslation from "lib/hooks/useTranslation";
import { Checkbox, Form, Input } from "modules";
import React from "react";

export default function RegisterForm({
  onSuccess,
}: {
  onSuccess: (data: IUser) => void;
}) {
  const { tConcept } = useTranslation({ name: "Register" });

  const { loading, execute } = useQuery({
    pathResolver: "Login",
    options: { manual: true },
    method: "POST",
  });

  const onSubmit = (data: IUser) => {
    execute({ data })
      .then((response: IUser) => {
        onSuccess(response);
      })
      .catch(() => {});
  };

  return (
    <Form
      onSubmit={onSubmit}
      buttonProps={{
        title: tConcept("button"),
        loading,
      }}
      recordType="register"
    >
      <Input name="firstName" placeholder={tConcept("name")} required />
      <Input name="lastName" placeholder={tConcept("surname")} required />
      <Input name="email" placeholder={tConcept("email")} required />
      <Input
        name="phone"
        placeholder={tConcept("phone")}
        addon={
          <Ionicon
            name="information-circle"
            size={24}
            color={Colors.blue?.[50]}
          />
        }
      />
      <Box alignItems="flex-start">
        <Checkbox
          name="termsAccepted"
          bg={"white"}
          accessibilityLabel={tConcept("termsAccepted")}
        >
          <Text typography="small" bold color="warmGray.50">
            {tConcept("termsAccepted")}
          </Text>
        </Checkbox>
      </Box>
    </Form>
  );
}
