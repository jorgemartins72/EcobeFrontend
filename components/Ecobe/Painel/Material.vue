<template>
  <div class="flex items-center justify-center">
    <UiCard
      class="w-full"
    >
      <template #content>
        <UiCardContent>
          <UiSkeleton class="h-8 w-full mb-2" />
          <UiSkeleton class="h-4 w-1/2 mb-2" />
          <div class="flex gap-2">
            <UiSkeleton class="h-6 w-48" />
            <UiSkeleton class="h-6 w-48" />
            <UiSkeleton class="h-6 w-48" />
          </div>
        </UiCardContent>
      </template>
    </UiCard>
  </div>
</template>

<script lang="ts" setup>
  const push = ref(false);

  const items = [
    { text: "Your call has been confirmed.", time: "2m ago" },
    { text: "You have a new message.", time: "1h ago" },
    { text: "Your order has been shipped.", time: "2h ago" },
  ];
</script>
