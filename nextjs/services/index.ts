import axios, { AxiosResponse } from 'axios';
const apiUrl = process.env.REACT_APP_API_BASE_URL;


export async function postData<T>(
  endpoint: string,
  data: object
): Promise<T> {

  try {
    const response: AxiosResponse<T> = await axios.post(`${apiUrl}${endpoint}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if(response.status===401){
      refershToken(postData,endpoint,data)
    }
    const authHeader = response.headers.authorization;
    if (authHeader) {
      const otpToken = authHeader.split(' ')[1];  
      console.log('Authentication Token:', otpToken);
      localStorage.setItem("otp_verified_token ",otpToken)
    } else {
      console.log('No Authorization header found in the response.');
    }
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error?.response?.data?.message);
    } else {
      throw new Error('An error occurred while making the request.');
    }
  }
}

export async function getData<T>(
  endpoint: string,
): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios.get(`${apiUrl}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error?.response?.data?.message);
    } else {
      throw new Error('An error occurred while making the request.');
    }
  }
}



async function refershToken(fun:any,endpoint:string,data:object){
  try {
    const response = await axios.get(`${apiUrl}/refresh-token`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const authHeader = response.headers.authorization;
    if (authHeader) {
      const otpToken = authHeader.split(' ')[1];  
      console.log('Access Token:', otpToken);
      localStorage.setItem("access_token",otpToken)
      fun(endpoint,data)
    } else {
      console.log('No Accesstoken  found in the response.');
    }
 

  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error?.response?.data?.message);
    } else {
      throw new Error('An error occurred while making the request.');
    }
  }

}