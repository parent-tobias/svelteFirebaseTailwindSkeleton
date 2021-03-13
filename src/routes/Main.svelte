<script lang='ts'>
  import DarkThemeToggle from '../UIComponents/DarkThemeToggle.svelte';
  import MenuButton from '../UIComponents/MenuButton.svelte';
  import AvatarMenu from '../UIComponents/AvatarMenu.svelte';
  import Card from '../UIComponents/Card.svelte';
  import SidebarNav from '../components/SidebarNav.svelte';
  import Chat from './Chat.svelte';
  import Modal from '../UIComponents/Modal.svelte';
  import Alert from '../UIComponents/Alert.svelte';

</script>

<div class="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
  <SidebarNav />
  <!--Top nav links bar-->
  <div class='flex-1 h-full overflow-x-hidden overflow-y-auto'>
    <header class="relative bg-white dark:bg-darker">
      <div class="flex items-center justify-between p-2 border-b dark:border-primary-darker">

        <!-- Brand -->
        <a href="index.html" class="inline-block text-2xl font-bold tracking-wider uppercase text-primary-dark dark:text-light">
          K-WD
        </a>


        <!-- Desktop Right buttons -->
        <nav aria-label="Secondary" class="hidden space-x-2 md:flex md:items-center">
          <DarkThemeToggle />
          <MenuButton>
            <span class="sr-only">Open Notifications Panel</span>
            <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
            </svg>
          </MenuButton>
          <MenuButton>
            <span class="sr-only">Open Search Panel</span>
            <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </MenuButton>
          <MenuButton>
            <span class="sr-only">Open Settings Panel</span>
            <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </MenuButton> 
          <AvatarMenu />
        </nav>
    </header>
    <main>
      <!-- Contentsection header-->
      <div class="flex items-center justify-between px-4 py-4 border-b lg:py-6 dark:border-primary-darker">
        <h1 class="text-2xl font-semibold">Dashboard</h1>
        <a href="https://github.com/Kamona-WD/kwd-dashboard" target="_blank" class="px-4 py-2 text-sm text-white rounded-md bg-primary hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-dark">
          View on github
        </a>
      </div>
      <div class='mt-2'>
        <div class='grid grid-cols-12 gap-8 p-4'>
          <!-- value card -->
          <Card classList='col-span-6' title='Value'>
            <div slot='contents'>
              <span class='text-xl semibold'>$30,000usd</span>
              <span class='inline-block px-2 py-px ml-2 text-sx text-green-500 bg-green-100 rounded-md'>+4.4%</span>
            </div>
            <div slot='icon'>
              <svg class="w-12 h-12 text-gray-300 dark:text-primary-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </Card>
          <Chat />
        </div>
      </div>
      <!-- state cards section -->
    </main>
  </div>
</div>
<Modal>
  <div slot='content'>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, assumenda quo dolore enim quibusdam omnis possimus molestias perspiciatis similique magnam quasi repudiandae dolorum libero temporibus accusamus facilis veritatis! Fugiat, quaerat.</p>
  </div>
</Modal>

<Alert />