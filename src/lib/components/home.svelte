<script>
  import { onMount } from 'svelte';

  // Lifecycle function that runs after the component is first rendered
  onMount(() => {
    // Placeholder for any future onMount logic
  });
</script>

<div class="w-full min-h-screen bg-gray-900">
  <!-- Main container for the profile section -->
  <div class="min-h-screen w-full mx-auto relative top-24 pb-20 xl:px-16 px-8 flex md:flex-row flex-col gap-4 justify-center items-center pb-10 pt-4">
    <div class="w-full relative">
      <!-- Rotating image with shadow effect -->
      <img class="shadow-2xl shadow-rose-600 animate-[spin_12s_linear_infinite] absolute left-0 right-0 rounded-full lg:max-w-[70%] max-w-[60%] mx-auto" src="/denis.jpg" alt="My Image" />
      <!-- Static image with outline effect -->
      <img class="relative z-10 rounded-full lg:max-w-[70%] max-w-[60%] mx-auto outline outline-[.7rem] outline-offset-[.1rem] outline-rose-400/30" src="/denis.jpg" alt="My Image" />
    </div>
    <div class="w-full flex flex-col justify-center gap-4 md:text-left text-center text-white dark:text-gray-800 md:mt-0 sm:mt-8 mt-4">
      <!-- Introduction heading -->
      <h1 class="md:text-4xl sm:text-3xl text-2xl font-semibold font-serif text-white">Hello, My name is Denis Mwangi</h1>
      <!-- Subheading with typing effect -->
      <h3 class="capitalize text-rose-400">i'm <span class="typing text-green-500 dark:text-green-700">Frontend Developer developer</span></h3>
      <!-- Brief description paragraph -->
      <p class="text-white">Experienced Frontend developer with 2+ years of expertise in Svelte5, sveltekit, tailwindcss, typescript, javascript.</p>
      <div class="sm:mt-4 mt-2">
        <!-- Call to action button -->
        <button class="px-6 py-1 bg-rose-500 text-white rounded-sm">Get In Touch</button>
      </div>
    </div>
  </div>
</div>