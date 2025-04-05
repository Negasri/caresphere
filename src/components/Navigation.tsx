
import React from "react";
import { Link } from "react-router-dom";
import { Heart, CalendarCheck, Bell, UserRound, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const links = [
    { name: "Home", path: "/", Icon: Heart },
    { name: "Calendar", path: "/calendar", Icon: CalendarCheck },
    { name: "Alerts", path: "/alerts", Icon: Bell },
    { name: "Profile", path: "/profile", Icon: UserRound },
  ];

  return (
    <>
      {isMobile ? (
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t z-10">
          <nav className="flex justify-around items-center py-3">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <link.Icon className="h-6 w-6" />
                <span className="text-xs mt-1">{link.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      ) : (
        <>
          <Button
            variant="outline"
            size="icon"
            className="fixed top-4 left-4 z-50 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          <div
            className={cn(
              "fixed inset-y-0 left-0 z-40 w-64 bg-background border-r transform transition-transform duration-300 ease-in-out lg:translate-x-0",
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            <div className="p-6">
              <div className="flex items-center gap-2 mb-10">
                <Heart className="h-6 w-6 text-care-600" />
                <span className="text-2xl font-semibold">CareSphere</span>
              </div>
              <nav className="space-y-6">
                {links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary py-2 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <link.Icon className="h-5 w-5" />
                    <span>{link.name}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navigation;
