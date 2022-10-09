import { component$ } from "@builder.io/qwik"
import config from "../website.config"

/**
 * This shows my profile picture and a hello message
 */
export default component$(() => {
	return (
		<div>
			<img width={config.hero.image.width} height={config.hero.image.height} alt={config.hero.image.alt} className="rounded-circle" src={config.hero.image.src} />
			<h1 className="display-5 fw-bold">Hello!</h1>
			<p>Hello, and welcome to my website!</p>
		</div>
	)
})
