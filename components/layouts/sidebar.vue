<template>
      <div class="fixed top-0 left-0 bottom-0 h-screen bg-gray-100 dark:bg-gray-900 w-72
       border-r dark:border-r-gray-800 border-r-gray-200 pt-4 ">
           <div>
            <NuxtLink to="/" class="flex items-center space-x-1 pl-2">
				<NuxtImg src="/logo.svg" width="50" height="50" />
				<span class="text-2xl font-medium">Jira software</span>
		</NuxtLink>
           </div>
           <div>
            <SharedSidebarItem />
           </div>
      </div>
</template>