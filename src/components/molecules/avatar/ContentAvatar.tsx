import { DefaultButton } from "@atoms/buttons/DefaultButton";
import DefaultParagraph from "@atoms/text/DefaultParagraph";
import { ThemeSwitcher } from "@atoms/themes/ThemeSwitcher";
import { Avatar, Chip, Divider, Select, SelectItem } from "@nextui-org/react";
import { IconX } from "@tabler/icons-react";
import { t } from "i18next";
import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

type ContentAvatarProps = {
  onClose: () => void;
};

const ContentAvatar: React.FC<ContentAvatarProps> = ({ onClose }) => {
  const { i18n } = useTranslation();

  const setLang = (lang: ChangeEvent<HTMLSelectElement>): void => {
    i18n.changeLanguage(lang.target.value);
  };

  return (
    <div className="w-60 h-full flex flex-col gap-4">
      <div>
        <div className="flex justify-between items-center text-lg">
          <h1>{t("hi")} Silvano</h1>
          <DefaultButton
            variant="light"
            className="absolute right-1"
            isIconOnly
            aria-label="Close popover"
            onClick={onClose}
          >
            <IconX />
          </DefaultButton>
        </div>
        <Divider className="my-2" />
      </div>
      <div className="flex gap-2 items-center">
        <DefaultParagraph>{t("role")}:</DefaultParagraph>
        <Chip color="primary">Admin</Chip>
      </div>
      <ThemeSwitcher />
      <div>
        <Select
          className="w-40"
          label={t("selectLang")}
          id="language"
          defaultSelectedKeys={[i18n.language]}
          onChange={setLang}
        >
          <SelectItem
            key="it"
            startContent={
              <Avatar
                alt="Italian"
                className="w-6 h-6"
                src="https://flagcdn.com/it.svg"
              />
            }
          >
            {t("italian")}
          </SelectItem>
          <SelectItem
            key="en"
            startContent={
              <Avatar
                alt="English"
                className="w-6 h-6"
                src="https://flagcdn.com/gb.svg"
              />
            }
          >
            {t("english")}
          </SelectItem>
        </Select>
      </div>
    </div>
  );
};

export default ContentAvatar;
