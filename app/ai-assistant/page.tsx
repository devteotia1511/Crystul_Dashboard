import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import { MainHeader } from "@/components/main-header"

export default function Home() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar  variant="inset"/>
      <SidebarInset>
        <MainHeader
          user={{ 
            name: "Dev Teotia", 
            email: "dev@business.in", 
            avatar: "/avatars/profile.jpg"
          }}
          breadcrumbs={[
            { label: "AI-Assistant", href: "/ai-assistant" }
          ]}
        />
        
        
      </SidebarInset>
    </SidebarProvider>
  )
}
