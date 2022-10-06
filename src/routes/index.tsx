// Bootstrap stuff
import * as bootstrap from 'bootstrap'

// Qwik
import { Link } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

// Components
import Hero from "../components/Hero"
import Creations from "../components/Creations"

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};

export default component$(() => {
	return(
		<div className="px-4 text-center">
			<Hero/>
			<div className="dropdown-divider"></div>
			<Creations/>
		</div>
	)
})