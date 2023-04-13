<script>
export default {
  components: {
    main_header,
    chatbox
}  
}
import main_header from '../components/main_header.vue';
import chatbox from '../components/chatbox.vue';
</script>

<template>
    <main_header title="Messages"></main_header>
    <chatbox></chatbox>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

</style>