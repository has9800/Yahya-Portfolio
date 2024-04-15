const year = new Date().getFullYear();

export default {
  footer: <p style={{ fontSize: "12px" }}>Hasan Ahmed © {year}</p>,
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  readMore: "Read More →",
  postFooter: null,
  darkMode: false,
  navs: [
    {
      url: "https://github.com/shuding/nextra",
      name: "Nextra",
    },
  ],
};
