import React, { ComponentProps } from "react";
import { Modal as DefaultModal } from 'native-base';

export interface ModalProps extends ComponentProps<typeof DefaultModal> {}

export function Modal(props: ModalProps) {
  return <DefaultModal {...props} />;
}
