class SidebarState {
    private static instance: SidebarState;

    public static getInstance(): SidebarState {
        if (!SidebarState.instance) {
            SidebarState.instance = new SidebarState();
        }

        return SidebarState.instance;
    }

    private isCollapsed = true
    private sidebarWidth = 2.6
    private sidebarPadding = this.getSidebarWidth + 2

    public toggleSidebar() {
        this.isCollapsed = !this.isCollapsed
        this.sidebarWidth = this.isCollapsed ?  2.6 : 11.8
        this.sidebarPadding = this.sidebarWidth + 2
    }

    get getSidebarWidth(){
        return this.sidebarWidth
    }

    get getIsCollapsed(){
        return this.isCollapsed
    }

    get getSidebarPadding(){
        return this.sidebarPadding
    }
}

export default SidebarState
