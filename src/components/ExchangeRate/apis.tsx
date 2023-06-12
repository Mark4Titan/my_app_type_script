import axios, { AxiosResponse } from "axios";

const Url = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange";

export interface CourseResponse {
  data: DataResponse[];
  status: number;
  message: string;
}

export interface DataResponse {
  cc: string;
  exchangedate: string;
  r030: number;
  rate: number;
  txt: string;
  active: boolean;
  poz: number;
}

export const getCourse = async (date: string): Promise<CourseResponse> => {
  try {
    const response: AxiosResponse<DataResponse[]> = await axios({
      method: "GET",
      url: `${Url}?date=${date}&json`,
    });
    return {
      data: response.data.map((el, poz) => ({ ...el, active: true, poz: poz+1 })),
      status: response.status,
      message: `status: ${response.statusText}`,
    };
  } catch (error: any) {
    return {
      data: [],
      message: "it was not possible to contact the National Bank!",
      status: error.response?.status || 404,
    };
  }
};
