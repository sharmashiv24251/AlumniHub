import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  FaBriefcase,
  FaUsers,
  FaTrophy,
  FaCalendarAlt,
  FaComments,
} from "react-icons/fa";

export default function Component() {
  const cards = [
    {
      icon: FaBriefcase,
      title: "Browse Jobs",
      description: "Explore job opportunities from fellow alumni.",
      to: "/jobs",
    },
    {
      icon: FaUsers,
      title: "Alumni",
      description: "Connect with alumni from your alma mater.",
      to: "/alumni",
    },
    {
      icon: FaTrophy,
      title: "Success Stories",
      description: "Get inspired by the achievements of your peers.",
      to: "/success-stories",
    },
    {
      icon: FaCalendarAlt,
      title: "Events",
      description: "Stay up-to-date with upcoming alumni events.",
      to: "/events",
    },
    {
      icon: FaComments,
      title: "Feedback",
      description: "Share your thoughts and ideas with us.",
      to: "/feedback",
    },
  ];

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-10 xl:space-y-16">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Alumni Hub
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Connect with fellow alumni, find job opportunities, and
                  support your alma mater.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  to="/donation"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Donations
                </Link>
                <Link
                  to="/networking"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Networking
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {cards.map((card, index) => (
              <Link key={index} to={card.to}>
                <Card>
                  <CardHeader className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-background p-6 text-center">
                    <card.icon className="h-8 w-8 text-primary" />
                    <CardTitle className="text-lg font-bold">
                      {card.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {card.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Alumni Hub. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            to="/terms"
            className="text-xs hover:underline underline-offset-4"
          >
            Terms of Service
          </Link>
          <Link
            to="/privacy"
            className="text-xs hover:underline underline-offset-4"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
