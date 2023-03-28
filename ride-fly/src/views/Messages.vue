<script>
export default {
  components: {
    Main_header,
    Messages,
    chat-icon
}  
}
import Main_header from '../components/Main_header.vue';
import Messages from '../components/MessageCard.vue';
import chat_icon from '../components/chat_icon.vue';
</script>

<template>
<div>
    <Main_header title="Messages">
    </Main_header>
    <Message_Card></Message_Card>
    <chat-icon></chat-icon>
  </div>
</template>

