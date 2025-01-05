import { NavLink } from "react-router-dom";
import { __ } from "@wordpress/i18n";

import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar, SidebarHeader } from "@/components/ui/sidebar";

// import { items } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

declare const wpstorm_panel_object: { src_assets_url: string };

export function AppSidebar() {
  const assetsUrl = wpstorm_panel_object.src_assets_url;
  const logoUrl = `${assetsUrl}/images/logo.png`;
  const isMobile = useIsMobile();
  const { toggleSidebar } = useSidebar();

  const items = [
    {
      title: __("Dashboard", "wpstorm-panel"),
      url: "/",
      isVisiable: true,
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M2 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z"></path>
        </svg>
      )
    },
    {
      title: __("Settings", "wpstorm-panel"),
      url: "/settings",
      isVisiable: true,
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M2 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z"></path>
        </svg>
      )
    }
  ];

  return (
    <Sidebar side="right" className="w-64 bg-payamito-600">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex items-start justify-center rounded-lg">
                  <img className="block h-8 bg-payamito-50 rounded-md py-1 px-2" src={logoUrl} alt={__("Payamito", "wpstorm-panel")} />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{__("Payamito Plus", "wpstorm-panel")}</span>
                  <span className="truncate text-xs">{__("Best SMS Plugin", "wpstorm-panel")}</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items
                .filter(item => item.isVisiable)
                .map(item => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink onClick={isMobile ? toggleSidebar : undefined} to={item.url}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
