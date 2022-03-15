<template>
    <router-link :to="getSidebarLinkEntity.path" class="link"
                 :class="{'active': getIsActive, 'growCollapsed': sidebarState.getIsCollapsed, 'grow':!sidebarState.getIsCollapsed}">
        <i class="icon" :class="getSidebarLinkEntity.icon"/>
        <transition name="fade" mode="in-out">
            <span v-if="!sidebarState.getIsCollapsed">
                <slot/>
            </span>
        </transition>
    </router-link>
</template>

<script lang="ts">
import {Options, prop, Vue} from 'vue-class-component';
import {useRoute} from "vue-router";
import SidebarLinkEntity from "@/data/models/SidebarLinkEntity";
import SidebarState from "@/components/sidebar/SidebarState";

class Props {
    sidebarLinkEntity: SidebarLinkEntity = prop({
        required: true,
    })
}

@Options({
    components: {},
})
export default class SidebarLink extends Vue.with(Props) {
    readonly route = useRoute()
    readonly sidebarState = SidebarState.getInstance()

    isActive = this.route.path === this.sidebarLinkEntity.path

    get getIsActive() {
        return this.isActive
    }

    get getSidebarLinkEntity() {
        return this.sidebarLinkEntity
    }
}
</script>

<style scoped>

.growCollapsed {
    transition: all .2s ease-in-out;
}

.growCollapsed:hover {
    transform: scale(1.1);
}

.grow {
    transition: all .2s ease-in-out;
}

.grow:hover {
    transform: scale(1.06);
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
}

.link {
    display: flex;
    align-items: center;

    cursor: pointer;
    position: relative;
    font-weight: 400;
    user-select: none;

    margin: 0.1em 0;
    padding: 0.6em;
    border-radius: 0.25em;
    height: 1.5em;

    color: #707070;
    text-decoration: none;
}

.link:hover {
    background-color: var(--sidebarItemHover);
}

.link:active {
    background-color: var(--sidebarItemActive);
}

.link .icon {
    flex-shrink: 0;
    width: 25px;
    margin-right: 10px;
}

span {
    font-family: Montserrat, sans-serif;
    padding-top: 0.1em;
}
</style>
