import { Link } from "react-router-dom";
import { CalendarDays, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";

const news = [
  { date: "Mar 10, 2026", title: "Annual Day Celebration", desc: "Join us for the grand Annual Day function with cultural programs and prize distribution." },
  { date: "Mar 05, 2026", title: "Board Exam Time Table Released", desc: "Class X and XII board exam schedules have been released. Students may collect from the office." },
  { date: "Feb 28, 2026", title: "Science Exhibition Winners", desc: "Congratulations to all winners of the Inter-School Science Exhibition 2026." },
];

const events = [
  { date: "Mar 15", title: "Parent-Teacher Meeting", time: "10:00 AM" },
  { date: "Mar 20", title: "Sports Day", time: "8:00 AM" },
  { date: "Apr 01", title: "New Session Begins", time: "8:00 AM" },
  { date: "Apr 14", title: "Ambedkar Jayanti", time: "Holiday" },
];

const NewsEvents = () => (
  <section className="section-padding bg-card">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* News */}
        <AnimatedSection>
          <p className="text-gold font-medium uppercase tracking-wider text-sm mb-2">Stay Updated</p>
          <h2 className="section-title mb-6">Latest News</h2>
          <div className="space-y-4">
            {news.map((n, i) => (
              <div key={i} className="bg-background rounded-lg p-4 card-hover border border-border">
                <p className="text-xs text-gold font-medium mb-1">{n.date}</p>
                <h4 className="font-heading font-bold text-card-foreground mb-1">{n.title}</h4>
                <p className="text-sm text-muted-foreground">{n.desc}</p>
              </div>
            ))}
          </div>
          <Button asChild variant="link" className="mt-4 text-primary p-0">
            <Link to="/notices">View All Announcements <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </AnimatedSection>

        {/* Events */}
        <AnimatedSection delay={0.2}>
          <p className="text-gold font-medium uppercase tracking-wider text-sm mb-2">Mark Your Calendar</p>
          <h2 className="section-title mb-6">Upcoming Events</h2>
          <div className="space-y-3">
            {events.map((e, i) => (
              <div key={i} className="flex items-center gap-4 bg-background rounded-lg p-4 border border-border card-hover">
                <div className="gradient-primary text-primary-foreground rounded-lg p-3 text-center min-w-[60px]">
                  <div className="text-lg font-bold leading-none">{e.date.split(" ")[0]}</div>
                  <div className="text-xs mt-0.5">{e.date.split(" ")[1]}</div>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-card-foreground">{e.title}</h4>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <CalendarDays className="w-3 h-3" /> {e.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default NewsEvents;
