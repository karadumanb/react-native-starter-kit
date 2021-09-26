import { Text } from "components";
import React, { ComponentProps, useEffect, useState } from "react";

interface Props extends ComponentProps<typeof Text> {
  onFinish: () => void;
  countFrom?: number;
}

export default function CountDown({
  onFinish,
  countFrom = 60,
  ...others
}: Props) {
  const [seconds, setSeconds] = useState(countFrom);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds <= 0) {
        onFinish();
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  return <Text {...others}>{seconds}</Text>;
}
