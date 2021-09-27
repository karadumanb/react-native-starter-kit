import { useAppContext } from "lib/hooks/useAppContext";
import { useQuery } from "lib/hooks/useQuery";
import useTranslation from "lib/hooks/useTranslation";
import { Form, OTPInputs } from "modules";
import React from "react";

export default function OTPForm({
  onSuccess,
  member,
}: {
  onSuccess?: (data: IUser) => void;
  member: Partial<IUser>;
}) {
  const { tConcept } = useTranslation({ name: "OTP" });
  const { setUser } = useAppContext();

  const { loading, execute } = useQuery({
    pathResolver: "Login",
    options: { manual: true },
    method: "GET",
  });

  const onSubmit = (data: IUser & { smsCode: string }) => {
    execute({ params: { phone: member.phone, smsCode: data.smsCode } })
      .then((response: IUser) => {
        setUser(response);
        onSuccess?.(response);
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
      recordType="login"
    >
      <OTPInputs name="smsCode" />
    </Form>
  );
}
