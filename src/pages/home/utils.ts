export interface IValidation {
  success: boolean;
  data: string;
}

export const validateForm = (value: string) => {
  return new Promise((resolve, reject) => {
    if(value === ""){
      reject({success: false, data: "You must enter a public contract ID!"});
    }
    resolve({success: true, data: ""});
  })
}

export const parseResult = (contractID: string, data: any) => {
  return new Promise((resolve, reject) => {
    resolve({[`${contractID}`]: data})
  })
}