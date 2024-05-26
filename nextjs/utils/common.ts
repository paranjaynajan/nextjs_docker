export const isValidEmail = (email: string|undefined): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  return emailRegex.test(email??"");
}
export const isValidPassword = (password: string ): boolean => {
  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
 
  return passRegex.test(password);
}
 
export const isValidPhone = (phone: string|undefined): boolean => {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone??"");
}

