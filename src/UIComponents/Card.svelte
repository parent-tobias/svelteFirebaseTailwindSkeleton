<script lang='ts'>
  export let title:string|null="Card title";
  export let icon;
  export let classList='col-span-12 md:col-span-6 xl:col-span-4'
</script>

<div class='h-24 {classList}  p-4 bg-white rounded-md dark:bg-darker'>
  <h6 class='text-xs font-medium leading-none tracking-wider text-gray-500 uppercase dark:text-primary-light'>{title}</h6>
  <div class='card-contents'>
    <div class='w-full flex items-center justify-between'>
      <slot name='contents'></slot>
      {#if icon}
      <div class='card-icon'>
        <slot name='icon'>{icon}</slot>
      </div>
    {/if}  
    </div>
  </div>
</div>