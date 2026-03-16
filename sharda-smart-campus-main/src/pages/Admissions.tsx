import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Download } from "lucide-react";
import heroImg from "@/assets/hero-school.jpg";
import { useState } from "react";
import { toast } from "sonner";

const steps = [
  "विद्यालय कार्यालय से एडमिशन फॉर्म प्राप्त करें या नीचे डाउनलोड करें।",
  "सभी आवश्यक विवरण सही जानकारी के साथ भरें।",
  "आवश्यक दस्तावेज़ों के साथ फॉर्म विद्यालय कार्यालय में जमा करें।",
  "निर्धारित तिथि पर साक्षात्कार/परीक्षा सत्र में भाग लें।",
  "प्रवेश औपचारिकताएँ और शुल्क भुगतान पूरा करें।",
];

const Admissions = () => {

  const [formData, setFormData] = useState({
    name: "",
    class: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {

      await fetch(
        "https://script.google.com/macros/s/AKfycbw5B1WBbuDuxnOipUwjACYSgZZTymVYTyfqdhnmyp8J6O6DBRegWffL97waQG8d9Piq/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData),
          mode: "no-cors"
        }
      );

      toast.success("Inquiry submitted successfully! We will contact you soon.");

      setFormData({
        name: "",
        class: "",
        phone: "",
        message: ""
      });

    } catch (error) {

      toast.error("Something went wrong. Please try again.");

    }
  };

  return (
    <Layout>

      {/* Hero Section */}

      <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        />

        <div className="absolute inset-0 gradient-primary opacity-80" />

        <div className="relative z-10 text-center">

          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
            Admissions
          </h1>

          <p className="text-primary-foreground/80 mt-2">
            Session 2025-26 Now Open
          </p>

        </div>

      </div>


      {/* Admission Process */}

      <section className="section-padding bg-card">

        <div className="container mx-auto max-w-4xl">

          <AnimatedSection>

            <p className="text-gold font-medium uppercase tracking-wider text-sm mb-2">
              How to Apply
            </p>

            <h2 className="section-title mb-6">
              Admission Process
            </h2>

            <div className="space-y-4">

              {steps.map((step, index) => (

                <div
                  key={index}
                  className="flex items-start gap-3 bg-background p-4 rounded-lg border border-border"
                >

                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                    {index + 1}
                  </div>

                  <p className="text-foreground">
                    {step}
                  </p>

                </div>

              ))}

            </div>


            {/* Download Form Button */}

            <div className="mt-8 flex flex-wrap gap-4">

              <Button
                className="gradient-gold text-navy border-0 hover:opacity-90"
                onClick={() => window.open("/admission-form.pdf")}
              >

                <Download className="w-4 h-4 mr-2" />

                Download Admission Form

              </Button>

            </div>

          </AnimatedSection>

        </div>

      </section>


      {/* Inquiry Form */}

      <section className="section-padding">

        <div className="container mx-auto max-w-2xl">

          <AnimatedSection>

            <div className="text-center mb-8">

              <p className="text-gold font-medium uppercase tracking-wider text-sm mb-2">
                Have Questions?
              </p>

              <h2 className="section-title">
                Admission Inquiry
              </h2>

            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-xl p-8 shadow-lg border border-border space-y-4"
            >

              {/* Name */}

              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />

              {/* Select Class */}

              <select
                className="w-full border border-border rounded-md p-2 bg-background"
                value={formData.class}
                onChange={(e) =>
                  setFormData({ ...formData, class: e.target.value })
                }
                required
              >
                <option value="">Select Class</option>
                <option value="1">Class 1</option>
                <option value="2">Class 2</option>
                <option value="3">Class 3</option>
                <option value="4">Class 4</option>
                <option value="5">Class 5</option>
                <option value="6">Class 6</option>
                <option value="7">Class 7</option>
                <option value="8">Class 8</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
                <option value="11">Class 11</option>
                <option value="12">Class 12</option>
              </select>

              {/* Phone */}

              <Input
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
              />

              {/* Message */}

              <Textarea
                placeholder="Your Query"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              />

              <Button
                type="submit"
                className="w-full gradient-primary border-0 hover:opacity-90"
              >
                Submit Inquiry
              </Button>

            </form>

          </AnimatedSection>

        </div>

      </section>

    </Layout>
  );
};

export default Admissions;
