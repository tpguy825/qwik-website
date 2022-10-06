import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';
import { partytownSnippet } from "@builder.io/partytown/integration";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
	<>
		<title>{head.title}</title>

		<link rel="canonical" href={loc.href} />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />

		<script type="text/partytown" dangerouslySetInnerHTML={`
			(function(c,l,a,r,i,t,y){
				c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
				t=l.createElement(r);t.async=1;t.type="text/partytown";t.src="https://www.clarity.ms/tag/"+i;
				y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
			})(window, document, "clarity", "script", "dt23pa291z");
		`}></script>
		{/* Google tag (gtag.js) */}
		<script type="text/partytown" async src="https://www.googletagmanager.com/gtag/js?id=G-8PRJJ0GGPS"></script>
		<script type="text/partytown" dangerouslySetInnerHTML={`
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			
			gtag('config', 'G-8PRJJ0GGPS');
		`}></script>
		<script dangerouslySetInnerHTML={partytownSnippet({debug: true, forward: ['dataLayer.push']})}></script>
	</>
  );
});