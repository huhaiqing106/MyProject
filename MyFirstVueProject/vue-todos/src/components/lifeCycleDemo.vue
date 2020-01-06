<template>
  <div>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name: "lifeCycleDemo",
  data() {
    return {
      message: "vue demo"
    };
  },
  beforeCreate() {
    console.log("beforeCreate ===================>");
    console.log("%c%s", "color:red", "el:" + this.$el);
    console.log("%c%s", "color:red", "data:" + this.$data);
    console.log("%c%s", "color:red", "methods:" + this.updateMsg);
  },
  created() {
    console.log("created ===================>");
    console.log("%c%s", "color:red", "el:" + this.$el);
    console.log("%c%s", "color:red", "data:" + this.$data);
    console.log("%c%s", "color:red", "methods:" + this.updateMsg);
  },
  beforeMount() {
    console.log("beforeMount ===================>");
    console.log("%c%s", "color:red", "el:" + this.$el);
  },
  mounted() {
    console.log("mounted ===================>");
    console.log("%c%s", "color:red", "el:" + this.$el);
    // this.message = "20200101";
  },
  activated() {
    console.log("activated ===================>");
  },
  deactivated() {
    console.log("deactivated ===================>");
  },
  beforeUpdate() {
    console.log("beforeUpdate ===================>");
  },
  updated() {
    console.log("updated ===================>");
  },
  beforeDestroy() {
    console.log("beforeDestroy ===================>");
    this.updateMsg();
  },
  destroyed() {
    console.log("destroyed ===================>");
  },
  methods: {
    updateMsg() {
      console.log("test");
    }
  }
};
</script>