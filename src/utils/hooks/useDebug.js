import { useRouter } from "next/router";

export const useDebug = () => {
  const { query } = useRouter()

  return !!query.debug;
};

export default useDebug
