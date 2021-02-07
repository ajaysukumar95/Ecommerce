<template>
  <div>
    <heroLayout/>
    <cardLayout/>
    <documentLayout/>
    <reviewLayout/>
    <supportLayout/>
    <siteContent/>
  </div>
</template>

<script>
// @ is an alias to /src
import heroLayout from '@/layout/heroLayout.vue';
import cardLayout from '@/layout/cardLayout.vue';
import documentLayout from '@/layout/documentLayout.vue';
import supportLayout from '@/layout/supportLayout.vue';
import siteContent from '@/layout/siteContent.vue';
import reviewLayout from '@/layout/reviewLayout.vue';

export default {
  name: 'Home',
  components: {
    heroLayout,
    cardLayout,
    documentLayout,
    supportLayout,
    siteContent,
    reviewLayout
  }
}
</script>
