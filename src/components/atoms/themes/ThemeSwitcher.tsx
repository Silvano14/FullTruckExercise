import { DefaultButton } from "@atoms/buttons/DefaultButton";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";

export const ThemeSwitcher: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex gap-2 items-start justify-start">
      <DefaultButton
        isIconOnly
        color={theme === "light" ? "warning" : "default"}
        onClick={() => setTheme("light")}
      >
        <IconSun />
      </DefaultButton>
      <DefaultButton
        isIconOnly
        color={theme === "dark" ? "primary" : "default"}
        onClick={() => setTheme("dark")}
      >
        <IconMoon />
      </DefaultButton>
    </div>
  );
};
