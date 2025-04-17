import * as React from "react"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const Breadcrumb = ({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <nav
    className={cn("w-full flex", className)}
    aria-label="breadcrumb"
    {...props}
  >
    {children}
  </nav>
)
Breadcrumb.displayName = "Breadcrumb"

// const BreadcrumbList = ({ children, className, ...props }: React.HTMLAttributes<OL>) => (
    const BreadcrumbList = ({ children, className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (

  <ol className={cn("flex items-center gap-1", className)} {...props}>
    {children}
  </ol>
)
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = ({ children, className, ...props }: React.LiHTMLAttributes<HTMLLIElement>) => (
  <li className={cn("inline-flex items-center gap-1", className)} {...props}>
    {children}
  </li>
)
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbSeparator = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("mx-1", className)}
    {...props}
  >
    <ChevronRight className="h-4 w-4 text-muted-foreground" />
  </span>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbPage = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    aria-current="page"
    className={cn("text-sm font-medium text-muted-foreground", className)}
    {...props}
  />
)
BreadcrumbPage.displayName = "BreadcrumbPage"

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
  <a
    ref={ref}
    className={cn("text-sm font-medium transition-colors hover:text-primary", className)}
    {...props}
  />
))
BreadcrumbLink.displayName = "BreadcrumbLink"

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
}
