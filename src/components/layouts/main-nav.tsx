"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn, handleScroll } from "@/lib/utils"

import { Icons } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"
import { navButtons } from "@/config/docs"

interface Props {
  isOffset?: boolean
  activeSection: string | null
}

export function MainNav({ isOffset, activeSection }: Props) {
  const secNavButtons = navButtons.map((item, index) => {
    const isActive = item.sectionId === activeSection
    if (item.isHidden) {
      return
    }
    const href = item.href ?? "#" + item.sectionId

    return (
      <Link
        key={index}
        className={cn(
          "pointer-events-auto uppercase",
          buttonVariants({
            variant: isActive ? "default" : isOffset ? "link" : "outline",
            size: "sm",
          }),
          isOffset ? "" : "bg-background text-foreground",
        )}
        href={href}
        onClick={!item.href ? handleScroll : undefined}
      >
        {item.label}
      </Link>
    )
  })

  return (
    <div className="hidden w-full items-center justify-between md:flex">
      <div>
        <Link
          className={cn(
            "pointer-events-auto flex items-center space-x-2",
            !isOffset ? "hidden" : "visible",
          )}
          href="#section-hero"
          onClick={handleScroll}
        >
          <Icons.mainLogo className={cn("h-10 w-10")} />
          <span className="hidden break-normal font-bold sm:inline-block">
            {siteConfig.name}
          </span>
        </Link>
      </div>
      <div className="space-x-2">{secNavButtons}</div>
    </div>
  )
}
