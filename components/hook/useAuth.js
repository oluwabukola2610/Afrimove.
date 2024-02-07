import { useLocalStorage } from "usehooks-ts";

export const useAuthToken = () => {
  const [authToken, setAuthToken] = useLocalStorage("afrimove", null);
  return { authToken, setAuthToken };
};
export const useStoredData = () => {
  const [email, setEmail] = useLocalStorage("email", null);
  return { email, setEmail };
};
