// This is the global config for the website
// It is used to configure the website and the website

// Imports
import HeroImage from "./src/components/assets/icon.webp";

const config: WebsiteConfig = {
	hero: {
		image: {
			src: HeroImage,
			alt: "My Icon",
			width: "150px",
			height: "150px",
		}
	},
	cards: {
		topleft: {
			image: undefined,
			title: "PMMPInstaller",
			subtitle: "The easy way to install PocketMine-MP",
			text: "Placeholder text",
			links: {
				website: "https://pmmpinstaller.cf",
				source: "https://github.com/tpguy825/PMMPInstaller"
			}
		},
		topright: {
			image: undefined,
			title: "Placeholder text",
			subtitle: "More placeholder text",
			text: "Even more placeholder text",
			links: {
				website: "/",
				source: "/"
			}
		},
		bottomleft: {
			image: undefined,
			title: "Placeholder text",
			subtitle: "More placeholder text",
			text: "Even more placeholder text",
			links: {
				website: "/",
				source: "/"
			}
		},
		bottomright: {
			image: undefined,
			title: "Placeholder text",
			subtitle: "More placeholder text",
			text: "Even more placeholder text",
			links: {
				website: "/",
				source: "/"
			}
		}
	}
}

export default config;