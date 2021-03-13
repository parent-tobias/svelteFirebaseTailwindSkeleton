<script lang='ts'>
  export let link:string="#!";
  export let text:string="Menu Item"
</script>

<a href={link} role="menuitem" class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-light dark:hover:text-light hover:text-gray-700">
  {text}
</a>