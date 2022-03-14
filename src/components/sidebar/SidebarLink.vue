<template>
    <router-link to="{{getSidebarLinkEntity.path}}" class="sidebarLink" :class="{'active': getIsActive}">
        <i class="icon" :class="getSidebarLinkEntity.icon"/>
        <span v-if="!sidebarState.getIsCollapsed">
            <slot/>
        </span>
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
.sidebarLink{
    display: flex;
    align-items: center;

    cursor: pointer;
    position: relative;
    font-weight: 400;
    user-select: none;

    margin:0.1em 0;
    padding: 0.4em;
    border-radius: 0.25em;
    height: 1.5em;

    color: #707070;
    text-decoration: none;
}
</style>
