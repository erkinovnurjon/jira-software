<template>
      <div class=" h-[10vh] fixed top-0  left-0 right-0 bg-gray-100 dark:bg-gray-900 z-50">
            <div class=" container mx-auto flex items-center justify-between h-full">
               <NuxtLink to="/" class="flex items-center space-x-1">
                   <NuxtImg src="/logo.svg" width="50" height="50" />
                   <span class="font-medium text-2xl">Jira software</span>
               </NuxtLink>

               <div class=" flex items-center space-x-2">
                  <SharedColorMode />
                  <NuxtLink to="/auth">
                       <UButton color="blue">
                        Get it free
                       </UButton>
                  </NuxtLink>
                  <NuxtLink to="/auth">
                       <UButton color="blue" variant="soft">
                         Sign in
                       </UButton>
                  </NuxtLink>
               </div>
            </div>
      </div>
</template>