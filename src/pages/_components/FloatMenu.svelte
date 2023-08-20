<script>
  import { url } from '@roxi/routify'
  import { fly } from 'svelte/transition'

  import menuState from '../_js/_stores/menuState.js'
  import { locations } from '../_js/_stores/locationsData.js'
</script>

<nav
  in:fly={{ x: -500, duration: 1500 }}
  out:fly={{ x: -500, duration: 1500 }}
  on:pointerleave={() => menuState.set(false)}
>
  <h3 class="text">Choose an location</h3>

  <ul class="text">
      <li>
        <a href={$url('/')}>Your location</a>
      </li>
      {#each $locations as { name, address }}
        <li><a href={$url('/:city', {city: address})}>{name}</a></li>
      {/each}    
  </ul>
</nav>

<style>
  nav {
    position: absolute;
    z-index: 10;

    width: 403px;
    height: 100vh;

    display: grid;
    grid-template-rows: 150px 1fr;
    gap: 50px;

    align-items: center;

    border-radius: var(--borderRadius);
    background: rgba(0, 0, 0, 0.75);
    mix-blend-mode: multiply;
    backdrop-filter: blur(25px);
  }

  h3 {
    margin-left: 50px;
    font-size: 24px;
    font-weight: 600;

    letter-spacing: 2px;
    text-align: left;
  }

  ul {
    height: 100%;
    width: 100%;

    padding-left: 50px;

    display: grid;
    justify-content: start;

    letter-spacing: 10px;
    text-align: left;
  }

  li {
    height: 35px;
  }

  li:hover {
    scale: 110%;
    translate: 10px 0 -5px;
  }

  a {
    font-size: 14px;
    font-weight: 400;
  }

  @media (max-width: 754px) {
    nav{
      width: 100%;
      border-radius: 0;

      position: fixed;
    }
  }
</style>
