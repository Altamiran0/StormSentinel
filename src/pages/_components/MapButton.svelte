<script>
  import mapIcon from '../_assets/icons/mapIcon.svg'
  export let alt

  let src = mapIcon
</script>

<div>
  <button><img {src} {alt} /></button>
</div>

<style>
  * {
    padding: 0%;
    margin: 0%;
  }
  button {
    background: #0000;
    border: 0;
  }
  button:hover {
    scale: 98%;
  }
  button:active {
    background: #0000;
    translate: 1px 1px;
  }
</style>
