<template>
  <div>

    <div class="min-h-screen flex flex-col">
      <div class='bg-blue-700 px-8 flex items-center justify-between py-4 shadow-sm text-white'> App Bar </div>
      <div class='relative flex flex-grow'>
        <nav class='shadow-sm p-0 w-56 bg-white'> Navbar </nav>
        <main class='flex-1 bg-gray-100'>
          <slot />
        </main>
      </div>
      <div>ccc</div>
    </div>

  </div>
</template>

<script setup>

</script>

<style>

</style>