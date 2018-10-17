export const validateForm = (value: string) => {
  return new Promise((resolve, reject) => {
    if(value === ""){
      reject({success: false, data: "You must enter a value!"})
    }
    resolve({success: true})
  })
}