import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@utilities/prismadb"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import bcrypt from "bcrypt"

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials:{
        email: { label: "Email", type: "text", placeholder: "example@example.com" },
        password: { label: "Password", type: "password", placeholder: "password" },
        username: { label: "Username", type: "text", placeholder: "User Name"}
      },

      async authorize(credentials){
          // check to see if email and password is there
          if(!credentials.email || !credentials.password) {
            throw new Error('Please enter an email and password')
        }

        // check to see if user exists
        const user = await prisma.user.findUnique({
            where: {
                email: credentials.email
            }
        });

        // if no user was found 
        if (!user || !user?.hashedPassword) {
            throw new Error('No user found')
        }

        // check to see if password matches
        const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword)

        // if password does not match
        if (!passwordMatch) {
            throw new Error('Incorrect password')
        }

        return user;
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session:{
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  debug: process.env.NODE_ENV === "development",
  pages: {
    signIn: '/auth/login',
    register: '/auth/register'
  },
  jwt: {
    encryption: true,
  },
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      if(account){
        if(account.type === "credentials"){
          if(user){
            token.userId = user.id;
            token.emailVerified = user.emailVerified;
          }
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.user.userId = token.userId;
      session.user.emailVerified = token.emailVerified;
      return session;
    },
  }
}

const handler = NextAuth(authOptions)
export default handler;