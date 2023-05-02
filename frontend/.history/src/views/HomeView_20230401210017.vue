<script>
export default {
  components: {
    main_header,
    current_date,
    availableride_card
}  
}

import main_header from '../components/main_header.vue';
import current_date from '../components/current_date.vue';
import availableride_card from '../components/availableride_card.vue';

</script>

<template>
<div>
    <main_header title="Home">
    </main_header>
    <current_date>
    </current_date>
    <availableride_card></availableride_card>
  </div>
</template>