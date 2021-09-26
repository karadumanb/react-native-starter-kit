import axios, { AxiosRequestConfig } from "axios";
import useAxios from "axios-hooks";
import { Urls } from "constants/Urls";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useAppContext } from "./useAppContext";

const baseURL = "https://api.baseUrl.com.tr/api/v1";

type Arguments = {
  pathResolver: keyof typeof Urls;
  options?: Options;
  method?: ApiMethodType;
  showErrors?: boolean;
  initialQueryOptions?: AxiosRequestConfig;
};
interface Options {
  manual?: boolean;
  useCache?: boolean;
  ssr?: boolean;
}

interface IResult {
  error: string;
  message: string;
  result: any;
  statusCode: number;
  success: boolean;
}

const headers = {
  ...axios.defaults.headers,
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

export function useQuery({
  pathResolver,
  showErrors = true,
  method = "GET",
  options,
  initialQueryOptions = {},
}: Arguments) {
  const { user } = useAppContext();
  const [{ data, loading, error }, executeAxios] = useAxios(
    {
      url: `${Urls[pathResolver]?.()[method]}`,
      method,
      baseURL,
      headers: {
        ...headers,
        Authorization: "Bearer " + user?.token,
      },
      ...initialQueryOptions,
    },
    options
  );

  const [executeInUse, setExecuteInUse] = useState(false);

  const showErrorMessages = (response: IResult) => {
    if (response?.success === false) {
      showErrors && Alert.alert(response.message, response.error);
      throw response.message;
    }
  };

  useEffect(() => {
    !executeInUse && showErrorMessages(data);
  }, [data]);

  useEffect(() => {
    if (showErrors && error) {
      console.log({ error: JSON.stringify(error) });
      Alert.alert("Hata olustu!", "Bilinmeyen bir hata olustu.");
    }
  }, [error]);

  // const execute: typeof executeAxios = async (...params) => {
  // Todo: Fix Types
  const execute: any = async (...params: any) => {
    setExecuteInUse(true);
    try {
      const response = await executeAxios(...params);
      showErrorMessages(response.data);
      return response.data?.result;
    } catch (err) {
      throw err;
    } finally {
      setExecuteInUse(false);
    }
  };

  return { data: data?.result, loading, error, execute };
}
