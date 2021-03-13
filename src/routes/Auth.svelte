<script lang='ts'>
  import Auth from '../components/Auth.svelte';
	import FixedToggleButton from '../UIComponents/FixedToggleButton.svelte';

  export let qs;

  qs.action = qs.action || 'register';

  if(!['login','register'].includes(qs.action)) qs.action='register'
</script>

<Auth authMode={qs.action} on:auth={()=>window.location.href=qs.next || '/'} />
<FixedToggleButton />