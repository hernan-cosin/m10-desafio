import useSWRImmutable from "swr/immutable";
import useSWRI from "swr";
import { fetchAPI } from "lib/api";
import { useEffect, useState } from "react";

export function useMe() {
  const [loggedIn, setLoggedIn] = useState("");

  useEffect(() => {
    const inSession = localStorage.getItem("auth_token") || "";
    setLoggedIn(inSession);
  }, []);

  const { data, error } = useSWRI(loggedIn ? "/me" : null, fetchAPI, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  if (error) {
    throw { message: "hay un error", error: error };
  } else {
    return data;
  }
}

export function useFeaturedProducts() {
  const { data, error } = useSWRI("/products/featured", fetchAPI, {
    revalidateIfStale: true,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  if (error) {
    throw { message: "hay un error", error: error };
  } else {
    return data;
  }
}
export function useSearchProduct(routerQuery:any) {
  console.log(routerQuery);
  const q = routerQuery.q
  const page = routerQuery.page? "&page=" + routerQuery.page : ""
  const hitsPerPage = routerQuery.hitsPerPage? "&hitsPerPage=" + routerQuery.hitsPerPage : ""

  const { data, error } = useSWRI(
    "/search?q=" + q + page + hitsPerPage,
    fetchAPI,
    {
      revalidateIfStale: true,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  if (error) {
    throw { message: "hay un error", error: error };
  } else {
    return data;
  }
}
