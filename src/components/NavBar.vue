<script setup>
</script>

<template>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/smooth-scroling">Smooth Scroling</RouterLink>
          </li>
          <li>
            <RouterLink to="/context-menus">Context menus</RouterLink>
          </li>
          <li>
            <RouterLink to="/conditional-visibility">Conditional visibility</RouterLink>
          </li>
          <li>
            <RouterLink to="/modal">Modal</RouterLink>
          </li>
          <li>
            <RouterLink to="/toasters">Toasters</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
