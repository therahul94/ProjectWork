fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        enum: ["Mr", "Mrs", "Miss"]
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }


//1
{
  "email":"huihui@gmail.com",
  "password": "password888"
}        

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JJZCI6IjYyNmVkMjk5OGM1YmI4ODAxNzNlMGZmZSIsImlhdCI6MTY1MTQzMDA4Nn0.LKB-kt0W4Uft-bINusMa8unBDn31DCn9DPFLMuny3xI