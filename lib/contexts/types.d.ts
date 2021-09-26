type FormContextProps = {
  recordType: string;
  visualRecordType?: string | undefined;
  control: Control<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
};