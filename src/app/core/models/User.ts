export interface User {
  id: Number,
  name?: string,
  email: string,
  password: string,
  cpassword: string,
  date_created?: Date | Number,
  data_modified?: Date | Number
}