<template>
  <div class="layout">
    <navbar/>
    <div class="layout-content">
      <nuxt/>
    </div>
    <div class="layout-footer">
      2017 &copy; Sunway Innovators
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
}

.layout-content {
  max-width: 992px;
  min-height: 200px;
  margin: 15px auto;
  padding: 30px 20px;
  overflow: hidden;
  background: #fff;
  border-radius: 0px;
}

.layout-footer {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}
</style>
