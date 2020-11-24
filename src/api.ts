import axios from "axios";
import { promises } from "dns";
import { Constituent } from "./types";

const DEFAULT_HEADERS = Object.freeze({
  Accept: "application/json",
});

const DEFAULT_AXIOS_CONFIG = Object.freeze({
  headers: DEFAULT_HEADERS,
});

// TODO
const ROOT_BACKEND_API_PATH =
  process.env.REACT_APP_CONSTITUENT_API_URL + "/api";
const USE_BACKEND_API = process.env.REACT_APP_USE_BACKEND_API;

export const PATHS = Object.freeze({
  GET_CONSTITUENTS: "constituents",
});

const getAllConstituents = async (): Promise<Constituent[]> => {
  const url = `${ROOT_BACKEND_API_PATH}/${PATHS.GET_CONSTITUENTS}`;

  if (USE_BACKEND_API) {
    const response = await axios.get(url, DEFAULT_AXIOS_CONFIG);
    return response.data as Constituent[];
  } else {
    return Promise.resolve(fakeData);
  }
};

const searchConstituents = async (emailQuery: string): Promise<Constituent[]> => {
  const url = `${ROOT_BACKEND_API_PATH}/${PATHS.GET_CONSTITUENTS}/${emailQuery}`;

  if (USE_BACKEND_API) {
    const response = await axios.get(url, DEFAULT_AXIOS_CONFIG);
    return response.data as Constituent[];
  } else {
    const filteredConstituents = fakeData.filter(
      (constituent) => constituent.email.includes(emailQuery)
    );
    return Promise.resolve(filteredConstituents);
  }
};

const ConstituentApiClient = Object.freeze({
  getAllConstituents,
  searchConstituents,
});

export default ConstituentApiClient;

const fakeData: Constituent[] = [
  {
    email: "goku@foo.com",
    firstName: "Goku",
    lastName: "Saiyan",
    zipCode: "92660",
  },
  {
    email: "frieza@foo.com",
    firstName: "Frieza",
    lastName: "フリーザ",
    zipCode: "namek-2242",
  },
  {
    email: "spartan117@unsc.gov",
    firstName: "John",
    lastName: "Spartan",
    zipCode: "92660",
  },
  {
    email: "wTheRockb@gmail.com",
    firstName: "Woody",
    lastName: '"The Rock" Butler',
    zipCode: "92660-0155",
  },
];
