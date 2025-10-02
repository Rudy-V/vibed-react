'use client'

import Link from 'next/link'
import { Compass } from 'lucide-react'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu'

export function Navigation() {
  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Compass className="h-8 w-8" />
            <span className="text-xl font-semibold">Luxury Safari</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex space-x-8">
              <NavigationMenuItem>
                <Link href="/destinations" legacyBehavior passHref>
                  <NavigationMenuLink className="text-sm font-medium">
                    Destinations
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/experiences" legacyBehavior passHref>
                  <NavigationMenuLink className="text-sm font-medium">
                    Experiences
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="text-sm font-medium">
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="text-sm font-medium">
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </div>
    </header>
  )
}
