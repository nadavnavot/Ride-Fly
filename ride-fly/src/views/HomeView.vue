<script>
export default {
  components: {
    main_header,
    current_date
}  
}

import main_header from '../components/main_header.vue';
import current_date from '../components/current_date.vue';
</script>

<template>
<div>
    <main_header title="Home">
    </main_header>
    <current_date>
    </current_date>
  </div>
</template>
