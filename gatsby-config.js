module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "shuffle",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
        options: {
          tag: "symbol",
          name: "MyIcon",
          props: {
            className: "my-class",
            title: "example",
          },
          filters: [value => console.log(value)],
        },
      },
    },
  ],
};
