<template>
  <div>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name: "lifeCycleComp",
  data() {
    return {
      message: "vue demo"
    };
  },
  beforeCreate() {
    console.group("============>beforeCreate");
    console.log("%c%s", "color:red", "el：" + this.$el);
    console.log("%c%s", "color:red", "data：" + this.$data);
    console.log("%c%s", "color:red", "message：" + this.message);
    console.log("%c%s", "color:red", "updateDemo：" + this.updateDemo);
  },
  created() {
    console.group("============>created");
    console.log("%c%s", "color:red", "el：" + this.$el);
    console.log("%c%s", "color:red", "data：" + this.$data);
    console.log("%c%s", "color:red", "updateDemo：" + this.updateDemo);
  },
  beforeMount() {
    console.group("============>beforeMount");
    console.log("%c%s", "color:red", "el：" + this.$el);
  },
  mounted() {
    console.group("============>mounted");
    console.log("%c%s", "color:red", "el：" + this.$el);
    this.updateDemo();
  },
  beforeUpdate() {
    console.group("============>beforeUpdate");
    console.log("%c%s", "color:red", "message：" + this.message);
    
  },
  updated() {
    console.group("============>updated");
    console.log("%c%s", "color:red", "message：" + this.message);
    this.message = "again updated11";
  },
  activated() {
    console.log("============>activated");
  },
  deactivated() {
    console.log("============>deactivated");
  },
  beforeDestroy() {
    console.group("============>beforeDestroy");
    console.log("%c%s", "color:red", "data：" + this.$data);
    console.log("%c%s", "color:red", "updateDemo：" + this.updateDemo);
  },
  destroyed() {
    console.group("============>destroyed");
    console.log("%c%s", "color:red", "data：" + this.message);
    console.log("%c%s", "color:red", "updateDemo：" + this.updateDemo);
  },
  methods: {
    updateDemo() {
      this.message = "update demp";
    }
  }
};
</script>