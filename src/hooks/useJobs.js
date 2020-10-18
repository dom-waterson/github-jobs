import React from "react";
import axios from "axios";

export function useJobs() {
  const [state, setState] = React.useReducer((_, action) => action, {
    isLoading: true,
  });

  const fetch = async () => {
    setState({ isLoading: true });

    try {
      const data = await axios
        .get(
          "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1&search=code"
        )
        .then((res) => res.data);
      setState({ isSuccess: true, data });
    } catch (error) {
      setState({ isError: true, error });
    }
  };

  React.useEffect(() => {
    fetch();
  }, []);

  return {
    ...state,
    fetch,
  };
}
