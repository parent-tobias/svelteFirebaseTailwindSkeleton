<script lang='ts'>
  export let checked:boolean=false;
  export let label:string='toggle-label';

  const handleClick = (e) =>{
    e.preventDefault();
    e.stopPropagation();
    checked = !checked;
    console.log(checked)
  }

</script>

<label for={label} class="flex items-center">
  <div  on:click={handleClick} class="relative inline-flex items-center">
    <input type="checkbox" id={label} name={label} class="w-10 h-4 transition {!checked ? "bg-gray-200" : "bg-primary-light"} border-none rounded-full shadow-inner outline-none appearance-none toggle checked:bg-primary-light disabled:bg-gray-200 focus:outline-none">
    <span class="absolute top-0 {!checked ? "left-0":"right-0 bg-primary-light"} w-4 h-4 transition-all transform scale-150 bg-white rounded-full shadow-sm"></span>
  </div>
  <span class="ml-3 text-sm font-normal text-gray-500 dark:text-gray-400">
    <slot></slot>
  </span>
</label>