import useTranslation from "lib/hooks/useTranslation";
import { Form, Input } from "modules";
import React from "react";
import { useQuery } from "lib/hooks/useQuery";
import { ReachUs, Box, Text } from "components";

export default function LoginForm({
  onSuccess,
}: {
  onSuccess: (data: IUser) => void;
}) {
  const { tConcept } = useTranslation({ name: "Login" });

  const { loading, execute } = useQuery({
    pathResolver: "Login",
    options: { manual: true },
    method: "GET",
  });

  const onSubmit = (data: IUser) => {
    execute({ params: { phone: `0${data.phone}` } })
      .then((data: IUser) => {
        onSuccess(data);
      })
      .catch(() => {});
  };

  return (
    <Form
      onSubmit={onSubmit}
      buttonProps={{
        title: tConcept({ id: "button" }),
        loading,
      }}
      recordType="login"
    >
      <Input
        InputLeftElement={<Text>{tConcept({ id: "phone-suffix" })}</Text>}
        name="phone"
        placeholder={tConcept({ id: "phone" })}
        keyboardType="phone-pad"
        required
      />
      <Box alignItems="center">
        <ReachUs />
      </Box>
    </Form>
  );
}
