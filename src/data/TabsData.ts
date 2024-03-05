export interface TabData {
    tabIcon: string;
    root: React.FC;
    tabBadge?: number;
    class?: string;
}

const tabData: TabData[] = [
    { tabIcon: "md-flame", root: Tab1 },
    { tabIcon: "md-search", root: Tab2 },
    { tabIcon: "md-add", root: Tab3, class: "custom-tab" },
    { tabIcon: "md-notifications-outline", root: Tab4, tabBadge: 3 },
    { tabIcon: "custom-profile", root: Tab5 },
];

export default tabData;