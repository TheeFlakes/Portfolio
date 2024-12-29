<script lang="ts">
    import Navbar from "../lib/components/navbar.svelte";
    import Home from "../lib/components/home.svelte";
    import AboutMe from "../lib/components/aboutme.svelte";
    import Education from "../lib/components/education.svelte";
    import Projects from "../lib/components/projects.svelte";
    import Contact from "../lib/components/contact.svelte";
    import Footer from "../lib/components/footer.svelte";
</script>

<Navbar activePage="Home" />

<Home />
<AboutMe />
<Education />
<Projects />
<Contact />
<Footer />