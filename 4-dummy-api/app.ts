import axios from "axios";

enum Gender {
  Male = 'male',
  Female = 'female'
}

interface Hair {
  color: string,
  type: string
}

interface Coordinates {
          "lat": number,
          "lng": number
}

interface Address {
        "address": string,
        "city": string,
        "state": string,
        "stateCode": string,
        "postalCode": string,
        "coordinates": Coordinates,
        "country": string
      }
interface Bank {
        "cardExpire": string,
        "cardNumber": string,
        "cardType": string,
        "currency": string,
        "iban": string
      }

interface Company {
        "department": string,
        "name": string,
        "title": string,
        "address": Address}
interface Crypto {
        "coin": string,
        "wallet": string,
        "network": string
}

enum Role {
  Admin = 'admin',
  Moderator = 'moderator',
  User = 'user'
}  

interface User
  {
      "id": number,
      "firstName": string,
      "lastName": string,
      "maidenName": string,
      "age": number,
      "gender": Gender,
      "email": string,
      "phone": string,
      "username": string,
      "password": string,
      "birthDate": string,
      "image": string,
      "bloodGroup": string,
      "height": number,
      "weight": number,
      "eyeColor": string,
      "hair": Hair,
      "ip": string,
      "address": Address,
      "macAddress": string,
      "university": string,
      "bank": Bank,
      "company": Company,
      "ein": string,
      "ssn": string,
      "userAgent": string,
      "crypto": Crypto,
      "role": Role
    }

interface UserResponse {
  users: User[],
  total: number,
  skip: number,
  limit: number
}

async function getData(url: string): Promise<void> {
  try {
    const res = await axios.get<UserResponse>(url);
    console.log(res.data.users);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
      console.error("Status:", error.response?.status);
    } else if (error instanceof Error) {
      console.error("General error:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
  }
}

getData('https://dummyjson.com/users');

