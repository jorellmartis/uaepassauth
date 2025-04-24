import NextAuth, { NextAuthOptions } from "next-auth";

export const authOption: NextAuthOptions = {
  providers: [
    {
      id: "uaepass",
      name: "UAE Pass",
      type: "oauth",
      idToken: false,
      clientId: process.env.UAEPASS_CLIENT_ID,
      clientSecret: process.env.UAEPASS_CLIENT_SECRET,
      authorization: {
        url: `${process.env.UAEPASS_BASE_URL}/idshub/authorize`,
        params: {
          response_type: "code",
          client_id: process.env.UAEPASS_CLIENT_ID,
          scope: process.env.UAEPASS_SCOPES,
          redirect_uri: process.env.UAEPASS_REDIRECT_URI,
          acr_values: process.env.UAEPASS_ACR_VALUES,
        },
      },
      userinfo: `${process.env.UAEPASS_BASE_URL}/idshub/userinfo`,
      token: `${process.env.UAEPASS_BASE_URL}/idshub/token`,
      profile: async (profile, token) => {
        return {
          access_token: token.access_token,
          id: profile.uuid,
          uuid: profile.uuid,
          name: profile.firstnameEN,
        };
      },
    },
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    signIn(params) {
      return true;
    },
    jwt({ token, account, user }) {
      if (account) {
        token.access_token = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      //@ts-ignore
      session.access_token = token.access_token;

      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
};
