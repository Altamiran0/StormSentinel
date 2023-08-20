<script>
  export let weatherData

  import { writable } from 'svelte/store'
  import src from '../_assets/icons/weatherIcons/Sun.svg'

  // Functions ----------

  import { kelvinToCelcius } from '../_js/convertUnits'
  const three_hours = 1000 * 60 * 60 * 3 // 3hs

  import getDate from '../_js/getDate'
  let today = writable(getDate())

  setInterval(() => {
    today.set(getDate())
  }, three_hours)
</script>

<section class="glass">
  <article>
    <img {src} alt="weatherStatusIcon" />
  </article>
  <article>
    <h3 class="temperature text">
      {#key weatherData}
        {kelvinToCelcius(weatherData.main.temp)}ºc
      {/key}
    </h3>
    <h3 class="weatherStatus text">
      {#key weatherData}
        {weatherData.weather[0].description}
      {/key}
    </h3>
  </article>
  <article>
    <h4 class="date text">
      {#key weatherData}
        {$today.day_name}, {$today.day_number} {$today.month}
      {/key}
    </h4>
    <h4 class="location text">
      {#key weatherData}
        {weatherData.name}, {weatherData.sys.country}
      {/key}
    </h4>
  </article>
</section>

<style>
  section {
    height: 100vh;
    border-right: var(--borderConfig);

    display: grid;
    grid-template-rows: repeat(3, max-content);
    gap: clamp(10px, 25px, 50px);

    align-content: center;
    font-size: clamp(8px, 1vw, 24px);
  }

  img {
    width: 100%;
    max-height: 315px;
  }

  .temperature {
    text-align: center;
    font-size: 96px;
    font-weight: 500;

    display: inline-block;
    line-height: 1;
  }

  .weatherStatus {
    font-size: 40px;
    font-weight: 300;
  }

  .date {
    font-size: 16px;
    font-weight: 300;
  }

  .location {
    font-size: 24px;
    font-weight: 200;
  }

  @media (max-width: 754px) {
    section {
      border-right: none;
      border-bottom: var(--borderConfig);
    }
  }
</style>
