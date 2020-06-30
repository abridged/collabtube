<script>
	import {
		Card,
		Button,
		Image
	} from 'smelte';
</script>

<Card.Card class="bg-white">
	<div slot="title">
		<Card.Title
			title="ASMR preview video"
			subheader="sugar boogerz ASMR"
			avatar="https://placekitten.com/64/64"
		/>
	</div>
	<div slot="media">
		<Image
			class="w-full bg-cover bg-center h-24 w-24 bg-no-repeat"
			src="https://placekitten.com/300/200"
			alt="kitty"
		/>
	</div>
	<div slot="text" class="p-5 pb-0 pt-3 text-gray-700 body-2">
		The three little kittens, they lost their mittens,<br>
		And they began to cry,<br>
		"Oh, mother dear, we sadly fear,<br>
		That we have lost our mittens."
	</div>
	<div slot="actions">
		<div class="p-2">
			<Button text>3 $TINGLES</Button>
			<Button text></Button>
		</div>
	</div>
</Card.Card>