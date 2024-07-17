<script>
import Selector from './Selector.vue';

export default {
  components:
  {
    Selector,
  },
  data () {
    return  {
      test: 4,
    };
  },
};
</script>

<template>
  <div id="settings-container">
    <Selector v-model="test"/>
    <Selector v-model="test"/>
  </div>
</template>