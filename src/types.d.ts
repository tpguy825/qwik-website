// Vite types
/// <reference types="vite/client" />

type CardElement = {
	image: CardImage | undefined;
	title: string;
	subtitle: string;
	text: string;
	links: {
		website: string;
		source: string;
	}
}

type CardImage = {
	src: string;
	alt: string;
}

type CardsList = {
	topleft: CardElement,
	topright: CardElement,
	bottomleft: CardElement,
	bottomright: CardElement
}