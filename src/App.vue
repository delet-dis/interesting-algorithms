<template>
    <metainfo>
        <template v-slot:title="{ content }">{{ content ? `${content} | Interesting Algorithms` : `Interesting Algorithms` }}</template>
    </metainfo>

    <Sidebar/>

    <div class="app" :style="{marginLeft: sidebarState.getSidebarPadding + 'em'}">
        <router-view/>
    </div>
</template>

<script lang="ts">
import {Options, setup, Vue} from 'vue-class-component';
import Sidebar from "@/ui/components/sidebar/Sidebar.vue";
import SidebarState from "@/ui/components/sidebar/SidebarState";
import {useMeta} from "vue-meta";


@Options({
    components: {
        Sidebar
    },
})
export default class App extends Vue {
    sidebarState = SidebarState.getInstance()
    meta = setup(() => useMeta({
        title: '🏠',
        htmlAttrs: { lang: 'ru', amp: true }
    }))
}
</script>

<style>

</style>
