<script>
export default {
  components: {
    main_header,
    message_card,
    chat_icon
}  
}
import main_header from '../components/main_header.vue';
import message_card from '../components/message_card.vue';
import chat_icon from '../components/chat_icon.vue';
</script>

<template>
<div>
    <main_header title="Messages">
    </main_header>
    <message_card></message_card>
    <chat-icon></chat-icon>
  </div>
</template>

