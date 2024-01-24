<script setup lang="ts">

import  { status } from '~/constants';
import { ACCOUNT } from '~/libs/appwrite'
import { useAuthStore } from '~/store/auth.store'
import { useLoadingStore } from '~/store/loading.store'

definePageMeta({ layout: 'documents' })
useHead({ title: 'Documents | Jira software' })

const router = useRouter()
const loadingStore = useLoadingStore()
const authStore = useAuthStore()

onMounted(() => {
	ACCOUNT.get()
		.then(response => {
			loadingStore.set(false)
			authStore.set({
				email: response.email,
				id: response.$id,
				name: response.name,
				status: response.status,
			})
		})
		.catch(() => router.push('/auth'))
})
</script>

<template>
	<div class="grid grid-cols-4 gap-2 mt-12">
		<UButton class="w-full h-12" color="blue" variant="outline"
		v-for="(item,index) in status" :key="index">
			<div class="flex items-center space-x-2">
				<span class="font-bold">{{ item.name }}</span>
				<span class="text-sm text-neutral-500">2</span>
			</div>
		</UButton>
	</div>
</template>