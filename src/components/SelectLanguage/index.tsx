import { ChangeEvent, FC } from 'react';
import { useRouter } from 'next/router';
import setLanguage from 'next-translate/setLanguage';
import { SelectStyled } from '@Styles/components/SelectLanguage';

const SelectLanguage: FC = () => {
  const { locale } = useRouter();

  const handleChangeLanguage = async (e: ChangeEvent<HTMLSelectElement>) => {
    await setLanguage(e.target.value);
  };
  return (
    <SelectStyled
      name="language"
      id="language"
      defaultValue={locale}
      onChange={handleChangeLanguage}
    >
      <option value="en" defaultValue={locale}>
        EN
      </option>
      <option value="es" defaultValue={locale}>
        ES
      </option>
    </SelectStyled>
  );
};

export default SelectLanguage;
