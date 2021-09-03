module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "shuffle",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-material-ui",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
  ],
};
