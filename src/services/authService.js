import Http from "./httpService";

export const getOtp = (userNumber) => {
  return Http.post("/user/get-otpq", userNumber).then(({ data }) => data.data);
};

export const checkOtp = (data) => {
  return Http.post("/user/check-otp", data).then(({ data }) => data.data);
};
