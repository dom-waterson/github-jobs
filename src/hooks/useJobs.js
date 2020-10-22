import React from "react";
import axios from "axios";

const BASE_URL =
  "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";

function formatParams(params) {
  if (!params) return "";
  const paramKeys = Object.keys(params);

  return paramKeys.reduce(
    (previous, key, index) =>
      previous.concat(
        `${key}=${params[key]}${index + 1 !== paramKeys.length ? "&" : ""}`
      ),
    "?"
  );
}

export function useJobs() {
  const [state, setState] = React.useReducer((_, action) => action, {
    isLoading: true,
  });

  const fetch = async (params) => {
    setState({ isLoading: true });

    try {
      const data = await axios
        .get(`${BASE_URL}${formatParams(params)}`)
        .then((res) => res.data);
      setState({ isSuccess: true, data });
    } catch (error) {
      setState({ isError: true, error });
    }
  };

  // React.useEffect(() => {
  //   fetch();
  // }, []);

  return {
    ...state,
    fetch,
  };
}
