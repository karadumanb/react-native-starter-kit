import { useContext } from "react";
import * as React from "react";

const FormContext = React.createContext<FormContextProps | null>(null);

export function useFormContext() {
  return useContext(FormContext) as FormContextProps;
}

export function useError(name: string) {
  const { errors } = useFormContext();
  return errors[name]?.message;
}

const FormContextProvider: React.FC<FormContextProps> = ({
  recordType,
  visualRecordType = recordType,
  children,
  ...others
}) => {
  return (
    <FormContext.Provider value={{ ...others, recordType, visualRecordType }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
