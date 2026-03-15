import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Bell, Calendar } from "lucide-react";
import heroImg from "@/assets/hero-school.jpg";

const notices = [
  { date: "Mar 10, 2026", title: "Annual Day Celebration", content: "The Annual Day function will be held on March 25, 2026. All parents are cordially invited.", type: "event" },
  { date: "Mar 05, 2026", title: "Board Exam Schedule Released", content: "Class X and XII board examination time tables have been released. Students may collect their admit cards from the office.", type: "notice" },
  { date: "Feb 28, 2026", title: "Science Exhibition Results", content: "Congratulations to all participants and winners of the Inter-School Science Exhibition 2026.", type: "notice" },
  { date: "Feb 20, 2026", title: "Winter Vacation Homework Submission", content: "All students are reminded to submit their winter vacation homework by February 25.", type: "notice" },
  { date: "Feb 15, 2026", title: "PTM Scheduled", content: "Parent-Teacher Meeting for all classes will be held on March 15, 2026 from 10 AM to 1 PM.", type: "event" },
  { date: "Feb 10, 2026", title: "Fee Payment Reminder", content: "Parents are requested to clear pending fees by February 28, 2026.", type: "notice" },
  { date: "Feb 01, 2026", title: "Republic Day Celebration Photos", content: "Photos from the Republic Day celebrations have been uploaded to the gallery section.", type: "event" },
];

const Notices = () => (
  <Layout>
    <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }} />
      <div className="absolute inset-0 gradient-primary opacity-80" />
      <h1 className="relative z-10 font-heading text-4xl md:text-5xl font-bold text-primary-foreground">Notice Board</h1>
    </div>

    <section className="section-padding bg-card">
      <div className="container mx-auto max-w-3xl">
        <div className="space-y-4">
          {notices.map((n, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="bg-background rounded-xl p-6 border border-border card-hover">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${n.type === "event" ? "bg-gold" : "bg-primary"}`}>
                    {n.type === "event" ? <Calendar className="w-5 h-5 text-gold-foreground" /> : <Bell className="w-5 h-5 text-primary-foreground" />}
                  </div>
                  <div>
                    <p className="text-xs text-gold font-medium mb-1">{n.date}</p>
                    <h3 className="font-heading font-bold text-foreground mb-1">{n.title}</h3>
                    <p className="text-sm text-muted-foreground">{n.content}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Notices;
