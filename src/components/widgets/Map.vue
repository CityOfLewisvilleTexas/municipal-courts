<template>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="600"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Lewisville%20Municipal%20Court%20%20P.O.%20Box%20299002%20%20Lewisville%2C%20Texas%2075029&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          >
          </iframe>
        </div>
      </div>
</template>

<script>
export default {};
</script>

<style>
.mapouter {
  position: relative;
  text-align: right;
  width: auto;
  margin-bottom: 24px;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  width: auto;
}

@media only screen and (max-width:1024px) {
  .mapouter {
    margin-left:30px;
  }
}
</style>
