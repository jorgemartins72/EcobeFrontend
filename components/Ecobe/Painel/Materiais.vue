<template>
  <div class="w-full">
    <div class="flex flex-col">

      <div class="bg-white px-4">
        <div class="flex justify-between py-6 bg-white border-b border-gray-200 select-none">
          <div class="fontpainel-title">Materiais</div>
          <div class="flex justify-between gap-4">
            <UiTagsInput v-model="tags_cat">
              <UiTagsInputItem v-for="tag in tags_cat" :key="tag" :value="tag" />
              <UiTagsInputField placeholder="Categorias..." />
              <UiTagsInputClear />
            </UiTagsInput>
            <UiTagsInput v-model="tags_local" class="whitespace-nowrap">
              <UiTagsInputItem v-for="tag in tags_local" :key="tag" :value="tag" />
              <UiTagsInputField placeholder="Localização..." />
              <UiTagsInputClear />
            </UiTagsInput>

            <UiButton class="font-semibold">
              <Icon class="size-4" name="lucide:plus" />Adicionar Material
            </UiButton>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-5 gap-2 overflow-hidden">
        <div class="max-h-[490px] 2xl:max-h-[790px] overflow-y-auto scrollbar-hide col-span-2">
          <div class="pl-4 pt-2 space-y-2">

            <div class="border border-gray-200 rounded-md bg-white p-3" v-for="i in [...'x'.repeat(1).split('').keys()]"
              :key="i" :value="tag">
              <UiSkeleton class="h-8 w-full mb-2" />
              <UiSkeleton class="h-4 w-1/2 mb-2" />
              <div class="flex gap-2">
                <UiSkeleton class="h-6 w-48" />
                <UiSkeleton class="h-6 w-48" />
                <UiSkeleton class="h-6 w-48" />
              </div>
            </div>

          </div>
        </div>
        <div
          class="max-h-[500px] min-h-[500px] 2xl:max-h-[790px] 2xl:min-h-[790px] overflow-y-auto scrollbar-hide bg-white col-span-3">
          <div class="p-2 space-y-2">
            <!-- <p>ssss</p> -->
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
const tags_cat = ref([]);
const tags_local = ref([]);
</script>

<style scoped>

</style>