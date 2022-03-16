<template>
    <metainfo>
        <template v-slot:title="{ content }">{{ content ? `${content} | Interesting Algorithms` : `Interesting Algorithms` }}</template>
    </metainfo>

    <Sidebar/>

    <div class="app" :style="{marginLeft: sidebarState.getSidebarPadding + 'em'}">
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
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
 * {
     font-family: Montserrat, sans-serif;
 }

 .fade-enter-active,
 .fade-leave-active {
     transition: opacity 0.5s ease;
 }


 .fade-enter-from,
 .fade-leave-to {
     opacity: 0;
 }

 .app{
     transition: margin 0.7s;
 }

 .container{
     margin-top: 0.5em;
     margin-bottom: 0.5em;
 }

 .columnCentered{
     float: none;
     margin: 0 auto;
 }
</style>
