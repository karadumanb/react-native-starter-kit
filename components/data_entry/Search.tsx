import { Box } from "components/general/Box";
import { Ionicon } from "components/general/Ionicon";
import { HStack } from "components/layout/Stack";
import { Colors } from "constants/Colors";
import useTranslation from "lib/hooks/useTranslation";
import React, { ComponentProps, useRef, useState } from "react";
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputChangeEventData,
} from "react-native";
import { Input } from "./Input";
import debounce from "lodash.debounce";

type IconProps = Partial<ComponentProps<typeof Ionicon>>;
type Props = ComponentProps<typeof Input> & {
  onSearch: (query: string) => void;
  iconProps?: IconProps;
};

export const Search: React.FC<Props> = ({
  placeholder,
  onSearch,
  iconProps = {},
  ...others
}) => {
  const { tComponent } = useTranslation({ name: "Search" });
  const [query, setQuery] = useState<string>("");

  const search = useRef(
    debounce((value: string) => {
      onSearch(value);
    }, 400)
  );

  const setValue = (value: string) => {
    setQuery(value);
    search.current(value);
  };

  const handleChange = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => setValue(event.nativeEvent.text);

  const onDelete = () => setValue("");

  return (
    <HStack width="100%">
      <Box width="90%">
        <Input
          variant="outline"
          size="sm"
          borderColor="transparent"
          style={styles.inputStyle}
          _focus={{
            style: styles.inputStyle,
          }}
          value={query}
          onChange={handleChange}
          placeholder={placeholder || tComponent("default-placeholder")}
          {...others}
        />
      </Box>
      <Box paddingX={2} justifyContent="center">
        {query ? (
          <Ionicon onPress={onDelete} name="close" size={24} {...iconProps} />
        ) : (
          <Ionicon name="search" size={24} {...iconProps} />
        )}
      </Box>
    </HStack>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: Colors.white,
    borderRadius: 4,
    borderColor: "transparent",
  },
});
