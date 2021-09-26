import { useNavigation } from "@react-navigation/core";
import { Ionicon } from "components/general/Ionicon";
import { Button } from "components/general/Button";
import React, { ComponentProps } from "react";

interface Props extends Partial<ComponentProps<typeof Ionicon>> {
  onBack?: () => void;
}

const BackIcon = (props: Props) => {
  const { onBack, ...others } = props;
  const { goBack, canGoBack } = useNavigation<any>();

  if (!canGoBack() && !onBack) {
    return null;
  }

  return (
    <Button onPress={onBack ? onBack : goBack} variant="unstyled" paddingY={0}>
      <Ionicon name="chevron-back" size={24} {...others} />
    </Button>
  );
};

export default BackIcon;
