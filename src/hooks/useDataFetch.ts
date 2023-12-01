import { Reducer, useCallback, useEffect, useReducer } from "react";

const useDataFetch = () => {
  enum DataFetchActions {
    LOADING = "LOADING",
    ERROR = "ERROR",
    SUCCESS = "SUCCESS",
  }

  const INITIAL_STATE = {
    data: [],
    isLoading: false,
    error: "",
  };
  type TState = {
    data: Record<string, string | number>[];
    isLoading: boolean;
    error: string;
  };
  type TAction =
    | { type: "LOADING" }
    | { type: "ERROR"; payload: string }
    | { type: "SUCCESS"; payload: any[] };

  const dataReducer = (state: TState, action: TAction) => {
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
          data: [],
        };
      case DataFetchActions.SUCCESS:
        return {
          isLoading: false,
          error: "",
          data: action.payload,
        };

      default:
        throw Error("Unknown action");
    }
  };
  const [state, dispatch] = useReducer<Reducer<TState, TAction>>(
    dataReducer,
    INITIAL_STATE,
  );

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
      if (error instanceof Error) {
        dispatch({ type: "ERROR", payload: error.message });
      }
    }
  }, []);

  useEffect(() => {
    getData();
    return () => {};
  }, [getData]);

  return { state };
};

export default useDataFetch;
