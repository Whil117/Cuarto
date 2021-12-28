module.exports = {
    locales: ["en", "es"],
    defaultLocale: "en",
    loadLocaleFrom: (lang, ns) =>
        import(`./src/locales/${lang}/${ns}.json`).then((m) => m.default),
    pages: {
        "*": ["common"],
    },
};