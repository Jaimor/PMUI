<template>
  <div>
    <div class="body">
      <pm-row>
        <pm-col span="8"><div class="content">span_8</div></pm-col>
        <pm-col span="8"><div class="content">span_8</div></pm-col>
        <pm-col span="8"><div class="content">span_8</div></pm-col>
      </pm-row>
    </div>
    <div class="body">
      <pm-row gutter="1">
        <pm-col span="6"><div class="content">span_6</div></pm-col>
        <pm-col span="6"><div class="content">span_6</div></pm-col>
        <pm-col span="6"><div class="content">span_6</div></pm-col>
        <pm-col span="6"><div class="content">span_6</div></pm-col>
      </pm-row>
    </div>
    <div class="body">
      <pm-row>
        <pm-col span="8"><div class="content">span_8</div></pm-col>
        <pm-col span="8" offset="8"><div class="content">span_8 offset_8</div></pm-col>
      </pm-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RowColTest"
  }
</script>

<style scoped>
  .body {
    padding: 8px;
  }
  .content {
    font-size: .8rem;
    line-height: 1.5rem;
  }
  .pm-col:nth-of-type(even) .content {
    background-color: rgb(208, 220, 231)
  }
  .pm-col:nth-of-type(odd) .content {
    background-color: rgb(228, 234, 243)
  }
</style>
