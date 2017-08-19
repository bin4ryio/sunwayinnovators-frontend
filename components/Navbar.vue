<template>
  <div class="layout-header">
    <div class="layout-container">
      <div class="layout-logo">
        <img class="logo" src="~assets/logo_white_glyph.png" alt="Sunway Innovators"/>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.layout-header {
  height: 96px;
  background: #0052cc;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
}

.layout-container {
  max-width: 992px;
  margin: 0 auto;
}

.layout-logo {
  width: 100px;
  height: 40px;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 30px;
}

.logo {
  height: 40px;
}

@media (max-width: @screen-md-max) {
  .layout-header {
    height: 60px;
    background: #0052cc;
  }

  .layout-logo {
    top: 10px;
    left: 20px;
  }
}
</style>
