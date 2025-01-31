<script lang="ts">
	import { env } from "$env/dynamic/public";
</script>
This is an SSR page. Check the DevTools for no error.
<br />
Environment variable test: "{env.PUBLIC_ENVIRONMENT_VARIABLE}""
<br />
<a href="/">Pre-rendered page</a>
