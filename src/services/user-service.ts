import { axiosInstance, getAxiosInstance, postAxiosInstance } from "@/config/axios";


export const loginService = async (payload: any) => await axiosInstance.post(`/auth/email/login`, { email: payload.email, password: payload.password });
export const registerService = async (payload: any) => await axiosInstance.post(`/auth/email/register`, payload);



export const logoutService = async(route:string)=>{
  const axiosInstance = await getAxiosInstance()
  return axiosInstance.post(route)
}

export const getDarkWebNewsService = async (route: string) => {
  const axiosInstance = await getAxiosInstance()
  return axiosInstance.get(route)
}
export const getGeneralNewsService = async (route: string) => {
  const axiosInstance = await getAxiosInstance()
  return axiosInstance.get(route)
}
export const contactUs = async (route: string,payload:any) => {
  const axiosInstance = await postAxiosInstance()
  return axiosInstance.post(route,payload)
}