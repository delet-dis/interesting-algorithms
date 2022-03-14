<template>
    <div class="sidebar" :style="{width: sidebarState.getSidebarWidth}">
        <h1 class="center">
            <span class="center" v-if="sidebarState.getIsCollapsed">I<br>A</span>
            <span class="center" v-else>Interesting<br>algorithms</span>
        </h1>
        <span class="collapseIcon"
              :class="{'rotate-180': !sidebarState.getIsCollapsed}"
              @click="sidebarState.toggleSidebar">
        <i class="fa-solid fa-arrow-right"/>
    </span>
    </div>

</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import SidebarState from './SidebarState';

@Options({
    components: {},
})
export default class Sidebar extends Vue {
    readonly sidebarState = SidebarState.getInstance()
}
</script>

<style>
:root {
    --sidebar-bg-color: #FBFBFB;
    --sidebar-item-hover: #EFEFEF;
    --sidebar-item-active: #EFEFEF;
}
</style>

<style scoped>
.sidebar {
    color: white;
    background: var(--sidebar-bg-color);

    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;

    transition: 0.3s ease-in-out;

    display: flex;
    flex-direction: column;
}

.collapseIcon {
    cursor: pointer;

    user-select: none;

    position: absolute;
    bottom: 0;
    padding: 0.75em;

    color: #000000;

    z-index: 2;

    transition: 0.2s linear;
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

</style>
