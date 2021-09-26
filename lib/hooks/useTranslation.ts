// import { useIntl } from "react-intl";

export default function useTranslation(options: { name?: string } & any = {}) {
  const formatMessage = (params1: any, ...params2: any) => {
    return "Translations coming";
  };

  const tComponent = ({ id }: { id: string }, ...other: any) => {
    return formatMessage({ id: `components.${options.name}.${id}` }, ...other);
  };

  const tScreen = ({ id }: { id: string }, ...other: any) => {
    return formatMessage({ id: `screens.${options.name}.${id}` }, ...other);
  };

  const tConcept = ({ id }: { id: string }, ...other: any) => {
    return formatMessage({ id: `concepts.${options.name}.${id}` }, ...other);
  };

  const tModule = ({ id }: { id: string }, ...other: any) => {
    return formatMessage({ id: `modules.${options.name}.${id}` }, ...other);
  };

  return { tComponent, tScreen, tConcept, tModule };
}
