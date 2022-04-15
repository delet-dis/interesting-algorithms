<template>
    <Card class="error">
        <slot/>
    </Card>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component"
import Card from "@/ui/components/card/Card.vue"

@Options({
    components: {Card},
})
export default class Error extends Vue {
}
</script>

<style scoped>
.card {
    background-color: #f64c59;
    color: white;
}

.error {
    transition: 0.3s;

    opacity: 0;

    display: none;
}

.error.error-displaying {
    display: block;
    opacity: 1;
}
</style>
