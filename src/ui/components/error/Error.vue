<template>
    <Card class="error">
        <slot/>
    </Card>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import Card from "@/ui/components/card/Card.vue";

@Options({
    components: {Card},
})
export default class Error extends Vue {
}
</script>

<style scoped>
.card {
    background-color: #f64c59;
    color:white;
}

.error {
    transition: 0.3s;

    opacity: 0;
}

.error.error-displaying{
    opacity: 1;
}
</style>
