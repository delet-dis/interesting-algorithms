<template>
    <div class="sidebar" :style="{width: sidebarState.getSidebarWidth + 'em'}">
        <h1 class="center">
            <transition name="fade" mode="out-in">
                <span class="center" v-if="sidebarState.getIsCollapsed">I<br>A</span>
                <span class="center" v-else>Interesting<br>algorithms</span>
            </transition>
        </h1>

        <div v-for="destination in sidebarDestinations" :key="destination.id" class="router-link">
            <SidebarLink :sidebarLinkEntity="destination">{{ destination.name }}</SidebarLink>
        </div>

        <span class="collapseIcon"
              :class="{'rotate-180': !sidebarState.getIsCollapsed}"
              @click="sidebarState.toggleSidebar">
        <i class="fa-solid fa-arrow-right collapseInnerIcon"/>
    </span>
    </div>

</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import SidebarState from './SidebarState';
import Destinations from "@/router/Destinations";
import SidebarLink from "@/ui/components/sidebar/SidebarLink.vue";

@Options({
    components: {SidebarLink},
})
export default class Sidebar extends Vue {
    readonly sidebarState = SidebarState.getInstance()
    readonly sidebarDestinations = Destinations.destinationsList
}
</script>

<style>
:root {
    --sidebar-bg-color: #FBFBFB;
    --sidebarItemHover: #EFEFEF;
    --sidebarItemActive: #EFEFEF;
}
</style>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease-out;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
}

.sidebar {
    color: white;
    background: var(--sidebar-bg-color);

    float: left;
    position: fixed;
    z-index: 1;
    top: 0.5em;
    left: 0.5em;
    bottom: 0.5em;
    padding: 0.5em;

    border-radius: 0.5em;

    box-shadow: 0 1px 2px rgba(0,0,0,0.07),
    0 2px 4px rgba(0,0,0,0.07),
    0 4px 8px rgba(0,0,0,0.07),
    0 8px 16px rgba(0,0,0,0.07),
    0 16px 32px rgba(0,0,0,0.07),
    0 32px 64px rgba(0,0,0,0.07);

    transition: 0.3s ease-in-out;

    display: flex;
    flex-direction: column;
}

.collapseIcon {
    font-size: 20px;

    text-align: center;
    width: 100%;
    height: fit-content;

    padding: 0;
    margin: 0;

    cursor: pointer;
    user-select: none;

    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    color: #000000;

    z-index: 2;

    transition: 0.2s linear;

    display: flex;
    justify-content: center;
}

.collapseInnerIcon {
    vertical-align: middle;
    horiz-align: center;
    text-align: center;
    padding: 0.5em;
}

.rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
}

h1 {
    font-family: Montserrat, sans-serif;
    color: #000000;
}

.center {
    text-align: center;
    display: flex;
    justify-content: center;
}

.router-link {
    padding-bottom: 10px;
}

</style>
