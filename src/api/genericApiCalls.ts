import { api } from "./axiosConfig";

export async function getAxios<T>(endpoint: string) {
  return await api.get<T>(endpoint);
}

export async function deleteAxios<T>(endpoint: string, id: string) {
  return await api.delete<T>(`${endpoint}/${id}`);
}

export async function postAxios<T>(endpoint: string, arg: T) {
  return await api.post<T>(`${endpoint}`, arg);
}

export async function putAxios<RT, BT>(endpoint: string, id: string, arg: BT) {
  return await api.put<RT>(`${endpoint}/${id}`, arg);
}
