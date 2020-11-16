<template>
  <div>
    <p>demoA</p>
  </div>
</template>

<script>
export default {
  name: "demoA",
  created() {
    console.log("demoA created========>");
  },
  mounted() {
    console.log("demoA mounted========>");
  },
  activated() {
    console.log("demoA activated========>");
  },
  deactivated() {
    console.log("demoA deactivated========>");
  },
  destroyed() {
    console.log("demoA destroyed========>");
  }
};
</script>
