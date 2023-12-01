import { useCallback, useEffect, useReducer } from "react";

const useDataFetch = () => {
  const INITIAL_STATE = {
    data: [],
    isLoading: false,
    isError: false,
  };
  const reducer = (
    state: typeof INITIAL_STATE,
    action: { type: any; payload: any },
  ) => {
    switch (action.type) {
      case "IS_LOADING":
        return {
          ...state,
          data: action.payload,
        };
      case "IS_ERROR":
        return {
          ...state,
          error: action.payload,
        };
      case "DATA":
        return {
          ...state,
          data: action.payload,
        };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const getData = useCallback(async () => {
    try {
      dispatch({ type: "IS_LOADING" });
      const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
      });

      const response = await data.json();

      dispatch({ type: "DATA", payload: response });
    } catch (error) {
      dispatch({ type: "IS_ERROR", payload: error });
    }
  }, []);

  useEffect(() => {
    getData();
    return () => {};
  }, [getData]);

  return { state };
};

export default useDataFetch;
