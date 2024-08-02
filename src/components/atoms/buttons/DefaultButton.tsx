// https://nextui.org/docs/customization/custom-variants
import { Button, extendVariants } from "@nextui-org/react";

export const DefaultButton = extendVariants(Button, {
  variants: {
    size: {
      xs: "min-w-6 h-6",
    },
  },
});
