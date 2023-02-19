import axios from "axios";
import { GetServerSidePropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";

export function apiClient(
  ctx?: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) {
  const BASE_DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;
  const METEUMAI_API_KEY = process.env.METEUMAI_API_KEY;

  const api = axios.create({
    baseURL: BASE_DOMAIN,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });

  if (METEUMAI_API_KEY) {
    api.defaults.headers.common["Authorization"] = `X-Meteum-API-Key ${METEUMAI_API_KEY}`;
  }
  return api;
}
