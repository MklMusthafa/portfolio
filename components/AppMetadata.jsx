const author = "Musthafa M";
const description =
	"Software developer from Moldova, Republic of, who loves to develop beautiful websites, single page applications, customer relationship management or code from scratch using React and Next.js";
const url = "https://vasile-novatchii.netlify.app";
export const AppMetadata = {
	metadataBase: new URL("https://vasile-novatchii.netlify.app/"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Musthafa M",
		"Musthafa M - software developer",
		"Frontend developer",
		"Backend developer"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark"
};
