<template>
  <h2>logout successfuly</h2>
</template>

<script>
export default {
    created() {
        localStorage.removeItem('AToken');
    },

}
</script>

<style>

</style>