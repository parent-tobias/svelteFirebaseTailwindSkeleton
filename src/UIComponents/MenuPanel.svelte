<script lang='ts'> 
  import { menuOption } from '../stores/store';
  
  export let title:string="Menu Panel Title";
  export let isActive:boolean=false;

  export let open:boolean=false;

  const toggleMenu = () =>{
    if(title === $menuOption){
      open = !open;
    } else {
      menuOption.set(title);
      open=true;
    }
  }

  $: { if(title !== $menuOption) isActive=false;}
</script>

<div>
  <!-- active & hover classes 'bg-primary-100 dark:bg-primary' -->
  <a href="#!" on:click|preventDefault={toggleMenu} class="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary {isActive || open ? "bg-primary-100 dark:bg-primary":""}"
     role="button" aria-haspopup="true" aria-expanded={open||isActive ? true:false}>
    <span aria-hidden="true">
      <slot name='icon'></slot>
    </span>
    <span class="ml-2 text-sm"> {title} </span>
    <span class="ml-auto" aria-hidden="true">
      <!-- active class 'rotate-180' -->
      <svg class="w-4 h-4 transition-transform transform {(open && "rotate-180")}" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" stroke="currentColor">
   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
 </svg>
</span>
  </a>
  <div role="menu" class="mt-2 space-y-2 px-7 {open ? "":"hidden"}" aria-label={title}>
    <!-- active & hover classes 'text-gray-700 dark:text-light' -->
    <!-- inActive classes 'text-gray-400 dark:text-gray-400' -->
    <slot name='menuItems'></slot>
  </div>
</div>