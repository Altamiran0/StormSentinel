<script>
  import { metatags } from '@roxi/routify'

  // Metatags ---------------

  metatags.title = 'Storm sentinel'
  metatags.description = 'A weather web app with svelte.'

  // Components -------------

  import LoadingScreen from './_components/LoadingScreen.svelte'
  import FloatMenu from './_components/FloatMenu.svelte'
  import MenuButton from './_components/MapButton.svelte'

  import WeatherInfo_Tab from './_components/WeatherInfo_tab.svelte'
  import WeatherData from './_components/WeatherData.svelte'

  // Stores -----------------

  import { coordinateCities } from './_js/_stores/locationsData'
  import menuState from './_js/_stores/menuState'

  // Variables --------------

  export let city
  const five_minutes = 1000 * 60 * 5 // 5ms

  // Functions --------------

  import getWeatherData from './_js/getWeatherData'

  $: promise = getWeatherData($coordinateCities[city].lat, $coordinateCities[city].lon)

  setInterval(() => {
    promise = getWeatherData($coordinateCities[city].lat, $coordinateCities[city].lon)
  }, five_minutes)
</script>

{#key city}
  {#if $menuState}
    <FloatMenu />
  {/if}

  {#await promise}
    <LoadingScreen />
  {:then weatherData}
    <aside class="glass" on:pointerenter={() => menuState.set(true)}>
      <MenuButton alt="choose an location" />
    </aside>
    <main>
      <WeatherData {weatherData} />
      <WeatherInfo_Tab {weatherData} />
    </main>
  {:catch err}
    <strong>Por favor, recargue la pagina</strong>
    <strong>{err}</strong>
  {/await}
{/key}

<style>
  aside {
    padding: 0 10px;

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;

    border-right: var(--borderConfig);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  main {
    width: calc(100% - 55px);
    margin-left: 53px;

    display: grid;
    grid-template-columns: 350px 1fr;

    text-align: center;
  }

  @media (max-width: 754px) {
    aside {
      background: var(--colorBackground);
    }
    main {
      grid-template-columns: 1fr;
    }
  }
</style>
