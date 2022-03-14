class SidebarState {
    private static instance: SidebarState;

    public static getInstance(): SidebarState {
        if (!SidebarState.instance) {
            SidebarState.instance = new SidebarState();
        }

        return SidebarState.instance;
    }

    private isCollapsed = true
    private sidebarWidth = '2%'

    public toggleSidebar() {
        this.isCollapsed = !this.isCollapsed
        this.sidebarWidth = this.isCollapsed ?  '2%' : '10%'
    }

    get getSidebarWidth(){
        return this.sidebarWidth
    }

    get getIsCollapsed(){
        return this.isCollapsed
    }
}

export default SidebarState
