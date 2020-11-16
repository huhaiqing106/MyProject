<template>
  <div>
    <p>{{message}}</p>
    <button @click="updateComp('')">清空组件</button>
    <button @click="updateComp('demoA')">设置为组件DemoA</button>
    <button @click="updateComp('demoB')">设置为组件DemoB</button>
    <keep-alive >
      <component :is="componentId"></component>
    </keep-alive>
  </div>
</template>

<script>
import demoA from "./demoA";
import demoB from "./demoB";

export default {
  components: {
    demoA,
    demoB
  },
  data() {
    return {
      componentId: "",
      message: "keepAlive Test"
    };
  },
  methods: {
    updateComp(name) {
      this.componentId = name;
    }
  }
};
</script>