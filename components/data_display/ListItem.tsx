import { List as DefaultListItem } from "native-base";
import * as React from "react";
import { ComponentProps } from "react";

interface ListItemProps extends ComponentProps<typeof DefaultListItem.Item> {}

export const ListItem: React.FC<ListItemProps> = (props) => {
  return <DefaultListItem.Item {...props} />;
};
