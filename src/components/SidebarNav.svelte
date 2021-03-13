<script lang='ts'>
  import MenuPanel from '../UIComponents/MenuPanel.svelte';
  import MenuItem from '../UIComponents/MenuItem.svelte';

  let menuPanels = [
    {title:'Dashboards', isActive:true,open:true},
    {title:'Components', isActive:false,open:false},
  ]
  /***
   * Think logic for a minute. If you click on a menuPanel, and it is not currently active,
   *  it becomes active and we set its open to true. If the panel *is* currently active, we
   *  toggle its open state.
   * At the same time, if a menuPanel is clicked, all other menuPanels become inactive, and hidden
   ***/
  const togglePanels = (toggleTitle)=>{
    menuPanels = menuPanels.reduce((panels, option)=>{
      let {title, isActive, open} = option;

      if( toggleTitle===title ){
        open = isActive ? !open : true;
        isActive=true;
      } else {
        open=false;
        isActive=false;
      }
      return [...panels, {title, open, isActive}]
    },[])
  }
</script>

<aside class='flex-shrink-0 hidden w-64 bg-white border-r dark:border-primary-darker dark:bg-darker md:block'>
  <div class='flex flex-col h-full'>
    <nav aria-label='Main' class='flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto'>
      <MenuPanel isActive={true} open={true} title='Dashboards'>
        <span slot='icon'>
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
          </svg>
        </span>
        <div slot='menuItems'>
          <MenuItem link='/' text='Default' />
          <MenuItem link='/' text='Project Management (soon)' />
          <MenuItem link='/' text='ECommerce (soon)' />
        </div>
      </MenuPanel>
      <MenuPanel title='Components'>
        <span slot='icon'>
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
          </svg>        </span>
        <div slot='menuItems'>
          <MenuItem link='/' text='Alerts' />
          <MenuItem link='/' text='Buttons' />
          <MenuItem link='/' text='Cards' />
          <MenuItem link='/' text='Dropdowns' />
          <MenuItem link='/' text='Forms' />
          <MenuItem link='/' text='Lists' />
        </div>
      </MenuPanel>
    </nav>
  </div>
</aside>
<!-- 


<a href="index.html" role="menuitem" class="block p-2 text-sm text-gray-700 transition-colors duration-200 rounded-md dark:text-light dark:hover:text-light hover:text-gray-700">
  Default
</a>
<a href="#" role="menuitem" class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700">
  Project Mangement (soon)
</a>
<a href="#" role="menuitem" class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700">
  E-Commerce (soon)
</a> -->
