<div>
    <StatusBadge text="status: {status}" status="{status}"  on:click="{() => clickNum += 1}" />
</div>
<style>
	h1 {
		color: purple;
	}
</style>
<script>
    import StatusBadge from './components/StatusBadge.html';

    const statuses = ['pending', 'ok', 'failed', 'na'];
    let clickNum = 0;
    $: status = statuses[clickNum % statuses.length];

</script>