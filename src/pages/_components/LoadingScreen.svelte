<script>
  import { fade } from 'svelte/transition'
</script>

<div class="loading__container" out:fade={{delay: 1000,  duration: 3000 }}>
  <span class="loader" />
</div>

<style>
  .loading__container {
    width: 100vw;
    height: 100vh;

    background: #1b49ac;
    display: grid;
    place-content: center;
  }
  .loader {
    --borderColor: #ffffff;

    width: 78px;
    height: 78px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    border: 3px solid;
    border-color: var(--borderColor) var(--borderColor) transparent transparent;
    box-sizing: border-box;
    animation: rotation 3s linear infinite;
  }
  .loader::after,
  .loader::before {
    --borderColor: #34d6ec;

    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 3px solid;
    border-color: transparent transparent var(--borderColor) var(--borderColor);
    width: 70px;
    height: 70px;
    border-radius: 50%;
    box-sizing: border-box;
    animation: rotationBack 0.9s linear infinite;
    transform-origin: center center;
  }
  .loader::before {
    --borderColor: #ffffff;

    width: 62px;
    height: 62px;
    border-color: var(--borderColor) var(--borderColor) transparent transparent;
    animation: rotation 3s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes rotationBack {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
</style>
