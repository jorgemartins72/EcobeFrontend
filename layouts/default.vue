<template>
  <div>
    <div class="min-h-screen flex flex-col">
      <EcobeMenuPrincipal />
      <div class='relative flex flex-grow'>
        <!-- <nav class='shadow-sm p-0 w-56 bg-white'>
          Navbar
        </nav> -->
        <main class='flex-1 bg-gray-100'>
          <slot />
        </main>
      </div>
      <div class="text-xs font-light px-4 py-1">
        <div>
          Ecobe - Ciência com vida
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>

</script>

<style>

</style>