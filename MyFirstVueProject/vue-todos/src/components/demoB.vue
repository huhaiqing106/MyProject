<template>
  <div>
    <p>demoB</p>
  </div>
</template>

<script>
export default {
  name: "demoB",
  created() {
    console.log("demoB created========>");
  },
  mounted() {
    console.log("demoB mounted========>");
  },
  activated() {
    console.log("demoB activated========>");
  },
  deactivated() {
    console.log("demoB deactivated========>");
  },
  destroyed() {
    console.log("demoB destroyed========>");
  }
};
</script>
