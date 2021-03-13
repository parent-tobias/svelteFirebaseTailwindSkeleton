<script lang='ts'>
  import Backdrop from './Backdrop.svelte';

</script>

<Backdrop visible={true}>
  <div slot='contents' class='w-64 h-48 rounded-xl bg-blue-800 text-blue-200 font-bold dark:bg-blue-200 dark:text-blue-800'>
    <h3>Alert box, do something with this</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus enim amet accusamus rem ex beatae nobis? Exercitationem suscipit amet mollitia, dolorem incidunt alias itaque non beatae. Quo dolores in impedit.</p>
  </div>
</Backdrop>