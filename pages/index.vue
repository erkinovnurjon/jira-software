<script setup lang="ts">
import { tabs } from '~/constants';

useHead({title : 'Jira Software'})
</script>

<template >
  <main class="pb-72">
    <!-- Hero section -->
        <section class="flex items-center justify-between h-[100vh] pt-[10vh] gap-4
         bg-gradient-to-t from-white dark:from-black to-blue-500 dark:to-blue-800">
           <div class="pl-20 flex flex-col space-y-3">
            <h1 class="text-5xl">Move fast, stay aligned, and build better - together</h1>
            <p class="text-lg opacity-80">
              The #1 softare development tool used by agile teams
            </p>
            <NuxtLink>
              <UButton color="blue">
                Try it free
              </UButton>
            </NuxtLink>
           </div>
  
           <NuxtImg src="/hero.webp" width="1000"  />
        </section>
  
        <!-- section Tabs -->
  
        <section>
          <h1 class="text-4xl font-medium px-4">All from a single source og truth</h1>
  
          <UTabs :items="tabs" class="mt-6 px-4" :ui="{list : {width : 'w-fit'}}" >
             <template #item="{item}">
              <div class="flex items-center justify-between gap-6 mt-8">
                <div class="w-[40%]">
                  <h1 class="text-4xl font-bold">{{ item.label }}</h1>
                  <p class="mt-6 text-xl">{{ item.description }}</p>

                  <div 
                  class="py-4 mt-12 rounded-r-full flex flex-col space-y-2
                  bg-gradient-to-r from-white dark:from-black to-blue-500 dark:to-blue-800">
                 <Icon name="bxs:quote-alt-left" class="text-7xl" />
                 <p class="text-lg pl-2">{{ item.credentials.text }}</p>
                 <div class="opacity-70 pl-2">
                  <p class="font-bold">{{ item.credentials.username }}</p>
                  <p class="text-sm">{{ item.credentials.company }}</p>
                 </div>
                </div>
                </div>
                <NuxtImg :src="item.image" class="w-[60%]" />
              </div>
            </template>
          </UTabs>
        </section>
      </main>
</template>