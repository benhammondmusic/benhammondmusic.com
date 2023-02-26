<script lang="ts">
	import { AnimatedCounter } from "@benzara/svelte-animated-counter";
	export let targetCount: number;
	export let interval: number;
	export let suffix: string = "";
	export let textLabel: string;
	export let className: string = "";
</script>

<div class={`m-2 flex items-center ${className}`}>
	<div class="mr-3"><slot /></div>
	<div>
		<p class="text-3xl text-white">
			<AnimatedCounter
				values={Array.from({ length: targetCount + 1 }, (_, i) => i + suffix)}
				class="custom-counter"
				{interval}
				direction="up"
				loop={false}
			/>
		</p>
		<p class="w-fit bg-bhm-copper bg-opacity-25 text-xs">{textLabel}</p>
	</div>
</div>
