/* Entry point for application to inject js */
import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		// Put global props here
	}
});

export default app;