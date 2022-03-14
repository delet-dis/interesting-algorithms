<template>
    <Sidebar/>

    <div class="app" :style="{marginLeft: sidebarState.getSidebarWidth}">

    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Sidebar from "@/components/sidebar/Sidebar.vue";
import SidebarState from "@/components/sidebar/SidebarState";


@Options({
  components: {
      Sidebar
  },
})
export default class App extends Vue {
    sidebarState = SidebarState.getInstance()
}
</script>

<style>

</style>
