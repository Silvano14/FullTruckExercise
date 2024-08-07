import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import { FC, ReactNode } from "react";

type DefaultModalProps = {
  onClose: () => void;
  onOpen: () => void;
  isOpen: boolean;
  buttonTitle: string;
  modalTitle: string;
  children: ReactNode;
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "full";
};

export const DefaultModal: FC<DefaultModalProps> = ({
  buttonTitle,
  modalTitle,
  children,
  size,
  onClose,
  onOpen,
  isOpen,
}) => {
  return (
    <>
      <Button color="primary" onPress={onOpen}>
        {buttonTitle}
      </Button>
      <Modal
        size={size}
        scrollBehavior="inside"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            {modalTitle}
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
