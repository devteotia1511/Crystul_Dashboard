import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
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
      <AppSidebar variant="inset" />
      <SidebarInset>
        <MainHeader
          user={{ 
            name: "Dev Teotia", 
            email: "dev@business.in", 
            avatar: "/avatars/profile.jpg"
          }}
          breadcrumbs={[
            { label: "Dashboard", href: "/dashboard" }
          ]}
        />
        <div className="mx-auto bg-gray-200 h-[600px] w-[85%] mt-[30px] rounded-lg flex justify-center items-center text-center">
        <Carousel>
          <CarouselPrevious />
          <CarouselContent>
            <CarouselItem>1</CarouselItem>
            <CarouselItem>2</CarouselItem>
            <CarouselItem>3</CarouselItem>
          </CarouselContent>
          <CarouselNext />
        </Carousel>
        </div>
        
      </SidebarInset>
    </SidebarProvider>
  )
}
