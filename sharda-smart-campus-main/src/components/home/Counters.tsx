import { Users, BookOpen, Award, Calendar } from "lucide-react";
import CounterCard from "@/components/ui/CounterCard";

const Counters = () => (
  <section className="gradient-primary py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <CounterCard icon={Users} target={500} suffix="+" label="Students Enrolled" />
        <CounterCard icon={BookOpen} target={20} suffix="+" label="Expert Teachers" />
        <CounterCard icon={Calendar} target={28} suffix="+" label="Years of Excellence" />
        <CounterCard icon={Award} target={100} suffix="%" label="Result Rate" />
      </div>
    </div>
  </section>
);

export default Counters;
