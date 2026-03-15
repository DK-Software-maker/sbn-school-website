import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroImg from "@/assets/hero-school.jpg";
import heroImg1 from "@/assets/h1.jpg";
import heroImg2 from "@/assets/h2.jpg";
import heroImg3 from "@/assets/h3.jpg";

const HeroSection = () => {

const images = [heroImg, heroImg1, heroImg2, heroImg3];
const [current, setCurrent] = useState(0);

useEffect(() => {

const interval = setInterval(() => {
setCurrent((prev) => (prev + 1) % images.length);
}, 4000);

return () => clearInterval(interval);

}, []);

return (
<section className="relative h-[85vh] min-h-[500px] flex items-center overflow-hidden">

{/* Background Image Slider */}
<div className="absolute inset-0">

{images.map((img, index) => (

<div
key={index}
className={`absolute inset-0 transition-opacity duration-1000 
${index === current ? "opacity-100" : "opacity-0"}`}
style={{
backgroundImage: `url(${img})`,
backgroundSize: "cover",
backgroundPosition: "center 30%",
backgroundRepeat: "no-repeat"
}}
/>

))}

</div>

{/* Dark overlay */}
<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

{/* Hero Content */}
<div className="relative z-10 container mx-auto px-4">

<motion.div
initial={{ opacity: 0, x: -40 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}
className="max-w-2xl"
>

<p className="text-yellow-400 font-medium mb-2 tracking-wider uppercase text-sm">
Excellence in Education
</p>

<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
Sharda Bal Niketan
<span className="block text-2xl md:text-3xl lg:text-4xl mt-2 font-normal opacity-90">
Sr. Sec. School
</span>
</h1>

<p className="text-white/80 text-lg mb-2">
Mudtrasili Road Golua, Seekwara, Jalore
</p>

<p className="text-white/70 text-base mb-8 max-w-lg">
Nurturing young minds with values, knowledge, and skills for a brighter tomorrow.
</p>

<div className="flex flex-wrap gap-4">

<Button asChild size="lg" className="bg-yellow-400 text-black font-semibold hover:opacity-90">
<Link to="/admissions">
<GraduationCap className="w-5 h-5 mr-2" />
Admissions Open
</Link>
</Button>

<Button
asChild
size="lg"
variant="outline"
className="border-white/40 text-white bg-white/10 hover:bg-white/20"
>
<Link to="/results">
<ClipboardList className="w-5 h-5 mr-2" />
Check Results
</Link>
</Button>

</div>

</motion.div>

</div>

</section>
);
};

export default HeroSection;