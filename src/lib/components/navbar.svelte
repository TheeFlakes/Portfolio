<script lang="ts">
  import { onMount } from 'svelte';

  let darkMode = false;
  let mobileMenuOpen = false;

  // Dark mode handling
  onMount(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    darkMode = savedDarkMode || (!('darkMode' in localStorage) && prefersDark);
    document.documentElement.classList.toggle('dark', darkMode);
  });

  function toggleDarkMode() {
    darkMode = !darkMode;
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', String(darkMode));
  }

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function scrollToSection(e: Event, id: string) {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      const yOffset = -60;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      mobileMenuOpen = false;
    }
  }

  function handleSubmit(e: Event) {
    e.preventDefault();
    alert('Form submitted! (Replace this with your own logic)');
    const form = e.target as HTMLFormElement;
    form.reset();
  }
</script>

<svelte:head>
  <title>Denis Mwangi - Web Developer</title>
  <style>
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
      animation: fadeInUp 0.6s ease-out forwards;
    }
  </style>
</svelte:head>

<div class="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
  <header class="bg-white dark:bg-gray-800 shadow-md fixed w-full z-10 transition-colors duration-300">
    <nav class="container mx-auto px-6 py-3">
      <div class="flex justify-between items-center">
        <a href="#home" on:click={(e) => scrollToSection(e, '#home')} class="text-2xl font-bold text-primary-light dark:text-primary-dark">Denis Mwangi</a>
        
        <div class="hidden md:flex space-x-6">
          <a 
            href="#aboutme" 
            on:click={(e) => scrollToSection(e, '#aboutme')}
            class="hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-300"
          >
            AboutMe
          </a>
          <a 
            href="#projects"
            on:click={(e) => scrollToSection(e, '#projects')} 
            class="hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-300"
          >
            Projects
          </a>
          <a 
            href="#contact"
            on:click={(e) => scrollToSection(e, '#contact')}
            class="hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-300"
          >
            Contact
          </a>
          <a 
            href="#education"
            on:click={(e) => scrollToSection(e, '#education')}
            class="hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-300"
          >
            Education
          </a>
        </div>

        <div class="flex items-center">
          

          <button
            on:click={toggleMobileMenu}
            class="md:hidden focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    {#if mobileMenuOpen}
      <div class="md:hidden bg-white dark:bg-gray-800 transition-colors duration-300">
        <a 
          href="#aboutme"
          on:click={(e) => scrollToSection(e, '#aboutme')}
          class="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
        >
          About
        </a>
        <a 
          href="#projects"
          on:click={(e) => scrollToSection(e, '#projects')}
          class="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
        >
          Projects
        </a>
        <a 
          href="#contact"
          on:click={(e) => scrollToSection(e, '#contact')}
          class="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
        >
          Contact
        </a>
        <a 
          href="#education"
          on:click={(e) => scrollToSection(e, '#education')}
          class="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
        >
          Education
        </a>
      </div>
    {/if}
  </header>

</div>