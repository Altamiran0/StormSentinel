<script>
  import WeatherCard from './weatherCard.svelte'
  import { mphToKmh, miToKm } from '../_js/convertUnits'

  export let weatherData

  let data = [
    {
      title: 'Viento',
      number: mphToKmh(weatherData.wind.speed),
      unit: 'Km / H',
    },
    {
      title: 'Humedad',
      number: weatherData.main.humidity,
      unit: '%',
    },
    {
      title: 'Visibilidad',
      number: miToKm(weatherData.visibility),
      unit: 'Km',
    },
    {
      title: 'Presion',
      number: weatherData.main.pressure,
      unit: 'Mb',
    },
  ]
</script>

<section>
  <article>
    {#key weatherData}
      {#each data as { title, number, unit }}
        <WeatherCard {title} {number} {unit} />
      {/each}
    {/key}
  </article>
  <h4 class="text">Create by Altamirano Agustin</h4>
</section>

<style>
  section {
    display: grid;
    grid-template-rows: 1fr 50px;
    gap: 25px;

    padding: 25px;
  }

  article {
    display: grid;
    place-content: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 500px));

    gap: 30px;
  }

  section > h4 {
    text-align: center;
    align-self: center;

    font-size: 16px;
    font-weight: 400;

    mix-blend-mode: screen;
  }

  @media (max-width: 754px) {
    section {
      background: var(--colorBackground);
    }
    article {
      grid-template-columns: repeat(auto-fit, minmax(200px, 270px));
    }
  }
</style>
