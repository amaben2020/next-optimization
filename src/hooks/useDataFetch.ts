import { useCallback, useEffect, useReducer } from "react";

const useDataFetch = () => {
  enum DataFetchActions {
    LOADING = "LOADING",
    ERROR = "ERROR",
    SUCCESS = "SUCCESS",
  }

  const INITIAL_STATE = {
    data: [],
    isLoading: false,
    isError: false,
  };

  type TActions =
    | { type: "LOADING" }
    | { type: "ERROR"; payload: string }
    | { type: "SUCCESS"; payload: any[] };

  const reducer = (
    state: {
      data: any;
      isLoading: boolean;
      isError: boolean;
    },
    action: TActions,
  ) => {
    switch (action.type) {
      case DataFetchActions.LOADING:
        return {
          ...state,
          isLoading: true,
        };
      case DataFetchActions.ERROR:
        return {
          error: action?.payload,
          isLoading: false,
          data: null,
        };
      case DataFetchActions.SUCCESS:
        return {
          isLoading: false,
          isError: false,
          data: action.payload,
        };

      default:
        throw Error("Unknown action");
    }
  };
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const getData = useCallback(async () => {
    try {
      dispatch({ type: "LOADING" });
      const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
      });

      const response = await data.json();

      dispatch({ type: "SUCCESS", payload: response });
    } catch (error) {
      console.log(error);
      dispatch({ type: "ERROR", payload: error.message });
    }
  }, []);

  useEffect(() => {
    getData();
    return () => {};
  }, [getData]);

  return { state };
};

export default useDataFetch;
