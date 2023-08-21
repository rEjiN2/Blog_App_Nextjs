import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/github"
import connect from "@/utils/db"
import User from "@/models/User"
import bcrypt from "bcrypt"


const handler  =  NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
    CredentialsProvider({
      id:"credentials",
      name:"Credentials",
      async authorize(credentials){
        await connect()
        try{
        const user = User.findOne({email:credentials.email})
        if(user){
       const isPasswordCorrect = await bcrypt.compare(credentials.password , user.password)
       if(isPasswordCorrect){
            return user        
       }
       else{
           throw new Error("Password not match")
        }
        }else{
          throw new Error("User not found")
        }
      }
        catch(err){

        }
      }
    })
  ],
})

export { handler as GET , handler as POST } // for user session and authentication other wise get error separatr export