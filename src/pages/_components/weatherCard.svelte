<script>
  export let title, number, unit
</script>

<div class="glass">
  <h3 class="text wInfo--title">{title}</h3>
  <h3 class="text wInfo--number"><big>{number}</big>{unit}</h3>
</div>

<style>
  div {
    height: 250px;

    border-radius: 15px;
    border: 3px solid rgba(230, 230, 230, 0.75);

    font-size: clamp(8px, 1vw, 24px);
    line-height: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .wInfo--title {
    font-size: 2em;
    font-weight: 300;

    text-align: center;
  }

  .wInfo--number {
    font-size: 3.5em;
    font-weight: 300;
  }
  big {
    font-size: 2em;
    font-weight: 400;
  }

  @media (max-width: 1482px) {
    div {
      height: 150px;
    }
  }
</style>
