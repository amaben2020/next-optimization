import { useQuery } from "@tanstack/react-query";
// prevents always calling useSession
import { useSession } from "next-auth/react";
import { useCallback } from "react";

type TParams = {
  page: number;
};

const useDataFetch = (
  path: string,
  strategy: "jobs" | "auth",
  params?: TParams,
) => {
  const route =
    strategy === "jobs"
      ? process.env.NEXT_PUBLIC_BAMBLE_JOBS_URL!
      : process.env.NEXT_PUBLIC_BAMBLE_AUTH_URL!;

  const session = useSession();

  const getData = useCallback(async () => {
    const BASE_URL = `${route}/${path}`;
    const queryParam = `?page=${params?.page}`;

    const URL = BASE_URL + (params?.page! > 0 ? queryParam : "");

    try {
      const data = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${session.data?.user?.accessToken} ${session.data?.user?.id}`,
        },
        // data caching mechanism, we can pass a prop called duration for data that change frequently. 3600 means refetch after an hour, we could reduce this when we have larger users.
        next: { revalidate: 3600 },
      });

      if (data.ok) {
        const response = await data.json();
        return response.data;
      } else {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        return error.message;
      }
    }
  }, [
    params?.page,
    path,
    route,
    session.data?.user?.accessToken,
    session.data?.user?.id,
  ]);

  const { data, isLoading, error } = useQuery({
    queryKey: [`data-for-${path}`],
    queryFn: getData,
  });

  return { data, isLoading, error };
};

export default useDataFetch;
