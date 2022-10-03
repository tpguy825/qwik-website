import { component$ } from "@builder.io/qwik";

export default component$(() => {
	return(
		<div className="errorpage">
			<p>404 - Something broke! <a href="/">Go Home</a></p>
		</div>
	)
})
