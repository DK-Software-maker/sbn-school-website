import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Printer, Download } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-school.jpg";

// Demo result data
const demoResults: Record<string, any> = {
  "1001": {
    name: "Dinesh Patel", class: "X", rollNo: "1001", session: "2025-26",
    subjects: [
      { name: "Hindi", marks: 82, total: 100 },
      { name: "English", marks: 75, total: 100 },
      { name: "Mathematics", marks: 90, total: 100 },
      { name: "Science", marks: 85, total: 100 },
      { name: "Social Science", marks: 78, total: 100 },
    ],
  },
  "1002": {
    name: "Priya Kumari", class: "X", rollNo: "1002", session: "2025-26",
    subjects: [
      { name: "Hindi", marks: 88, total: 100 },
      { name: "English", marks: 92, total: 100 },
      { name: "Mathematics", marks: 76, total: 100 },
      { name: "Science", marks: 89, total: 100 },
      { name: "Social Science", marks: 84, total: 100 },
    ],
  },
  "2001": {
    name: "Amit Kumar", class: "XII", rollNo: "2001", session: "2025-26",
    subjects: [
      { name: "Hindi", marks: 78, total: 100 },
      { name: "English", marks: 72, total: 100 },
      { name: "Physics", marks: 85, total: 100 },
      { name: "Chemistry", marks: 80, total: 100 },
      { name: "Mathematics", marks: 92, total: 100 },
    ],
  },
};

const getGrade = (pct: number) => {
  if (pct >= 90) return "A+";
  if (pct >= 80) return "A";
  if (pct >= 70) return "B+";
  if (pct >= 60) return "B";
  if (pct >= 50) return "C";
  if (pct >= 33) return "D";
  return "F";
};

const Results = () => {
  const [rollNo, setRollNo] = useState("");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);
    const found = demoResults[rollNo.trim()];
    if (found) {
      setResult(found);
    } else {
      setError("No result found. Please check your roll number. (Demo: Try 1001, 1002, or 2001)");
    }
  };

  const totalMarks = result?.subjects.reduce((a: number, s: any) => a + s.marks, 0) || 0;
  const totalMax = result?.subjects.reduce((a: number, s: any) => a + s.total, 0) || 0;
  const percentage = totalMax > 0 ? ((totalMarks / totalMax) * 100).toFixed(1) : 0;

  return (
    <Layout>
      <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }} />
        <div className="absolute inset-0 gradient-primary opacity-80" />
        <div className="relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">Exam Results</h1>
          <p className="text-primary-foreground/80 mt-2">Check your examination results online</p>
        </div>
      </div>

      <section className="section-padding bg-card">
        <div className="container mx-auto max-w-2xl">
          <AnimatedSection>
            <div className="bg-background rounded-xl p-8 shadow-lg border border-border">
              <h2 className="section-title text-center mb-6">Search Your Result</h2>
              <form onSubmit={handleSearch} className="space-y-4">
                <Input
                  placeholder="Enter Roll Number (e.g., 1001)"
                  value={rollNo}
                  onChange={(e) => setRollNo(e.target.value)}
                  required
                  className="text-center text-lg"
                />
                <Button type="submit" className="w-full gradient-primary border-0 hover:opacity-90">
                  <Search className="w-4 h-4 mr-2" />
                  Search Result
                </Button>
              </form>
              {error && (
                <p className="text-destructive text-center mt-4 text-sm">{error}</p>
              )}
            </div>
          </AnimatedSection>

          {result && (
            <AnimatedSection className="mt-8">
              <div className="bg-background rounded-xl shadow-lg border border-border overflow-hidden" id="result-card">
                {/* Header */}
                <div className="gradient-primary text-primary-foreground p-6 text-center">
                  <h3 className="font-heading text-xl font-bold">Sharda Bal Niketan Sr. Sec. School</h3>
                  <p className="text-sm opacity-80">Seekwara, Jalore, Rajasthan</p>
                  <p className="text-sm mt-1">Examination Result — Session {result.session}</p>
                </div>

                <div className="p-6">
                  {/* Student info */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div><span className="text-muted-foreground">Student Name:</span> <strong className="text-foreground">{result.name}</strong></div>
                    <div><span className="text-muted-foreground">Class:</span> <strong className="text-foreground">{result.class}</strong></div>
                    <div><span className="text-muted-foreground">Roll No:</span> <strong className="text-foreground">{result.rollNo}</strong></div>
                    <div><span className="text-muted-foreground">Session:</span> <strong className="text-foreground">{result.session}</strong></div>
                  </div>

                  {/* Marks table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-accent">
                          <th className="text-left p-3 font-heading font-bold text-accent-foreground">Subject</th>
                          <th className="text-center p-3 font-heading font-bold text-accent-foreground">Marks</th>
                          <th className="text-center p-3 font-heading font-bold text-accent-foreground">Total</th>
                          <th className="text-center p-3 font-heading font-bold text-accent-foreground">Grade</th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.subjects.map((s: any, i: number) => (
                          <tr key={i} className="border-b border-border">
                            <td className="p-3 text-foreground">{s.name}</td>
                            <td className="p-3 text-center font-bold text-foreground">{s.marks}</td>
                            <td className="p-3 text-center text-muted-foreground">{s.total}</td>
                            <td className="p-3 text-center font-bold text-primary">{getGrade(s.marks)}</td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="bg-accent font-bold">
                          <td className="p-3 text-accent-foreground">Total</td>
                          <td className="p-3 text-center text-accent-foreground">{totalMarks}</td>
                          <td className="p-3 text-center text-accent-foreground">{totalMax}</td>
                          <td className="p-3 text-center text-primary">{getGrade(Number(percentage))}</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  {/* Summary */}
                  <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                    <div className="bg-accent rounded-lg p-4">
                      <p className="text-2xl font-bold font-heading text-primary">{percentage}%</p>
                      <p className="text-xs text-muted-foreground">Percentage</p>
                    </div>
                    <div className="bg-accent rounded-lg p-4">
                      <p className="text-2xl font-bold font-heading text-primary">{getGrade(Number(percentage))}</p>
                      <p className="text-xs text-muted-foreground">Overall Grade</p>
                    </div>
                    <div className="bg-accent rounded-lg p-4">
                      <p className="text-2xl font-bold font-heading text-primary">{Number(percentage) >= 33 ? "PASS" : "FAIL"}</p>
                      <p className="text-xs text-muted-foreground">Status</p>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-center gap-4">
                    <Button variant="outline" onClick={() => window.print()} className="border-primary text-primary">
                      <Printer className="w-4 h-4 mr-2" /> Print Result
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Results;
