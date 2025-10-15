<script lang="ts">
    import "../app.css";
    import { ModeWatcher } from "mode-watcher";
    let { children } = $props();
</script>

<svelte:head>
    <script defer src="https://cloud.umami.is/script.js" data-website-id="1a0d7826-1cbc-400e-ae16-d1bcb61c09fa"></script>
</svelte:head>

<ModeWatcher />
{@render children?.()}
