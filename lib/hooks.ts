import { fetchAPI } from "lib/api";
import { useEffect, useState } from "react";
import useSWRI from "swr";

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
export function useSearchProduct(routerQuery: any) {
  const q = routerQuery.q;
  const page = routerQuery.page ? "&page=" + routerQuery.page : "";
  const hitsPerPage = routerQuery.hitsPerPage
    ? "&hitsPerPage=" + routerQuery.hitsPerPage
    : "";

  const { data, error } = useSWRI(
    q ? "/search?q=" + q + page + hitsPerPage : null,
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

export function useMyOrders() {
  const { data, error } = useSWRI("/me/orders", fetchAPI, {
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
