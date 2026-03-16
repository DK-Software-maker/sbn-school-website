import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Printer, Download } from "lucide-react";
import { useState } from "react";
import banner from "@/assets/banner.jpg";
import logo from "@/assets/logo.png";
import signature from "@/assets/signature.jpg";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Results = () => {

const [rollNo, setRollNo] = useState("");
const [result, setResult] = useState<any>(null);
const [error, setError] = useState("");

const handleSearch = async (e: React.FormEvent) => {

e.preventDefault();
setError("");
setResult(null);

try {

const res = await fetch(
"https://script.google.com/macros/s/AKfycbzGxYbh-Obo7Z9VJPGletWTu1FUgYmBpHr4hdJYcT6avMJKI1X1z8jaeeI13KbBKnrWoA/exec?roll=" + rollNo
);

const data = await res.json();

if (!data || !data.rollNo) {
setError("No result found. Check roll number.");
return;
}

setResult(data);

} catch {
setError("Error loading result.");
}

};

const printMarksheet = () => {

const content = document.getElementById("marksheet")?.innerHTML;

const win = window.open("", "", "width=900,height=700");

win?.document.write(`

<html>
<head>
<title>Marksheet</title>

<style>

body{
font-family:Arial;
padding:30px;
}

table{
width:100%;
border-collapse:collapse;
text-align:center;
}

table,th,td{
border:1px solid #000;
padding:8px;
}

.banner{
width:100%;
height:120px;
object-fit:contain;
}

.watermark{
position:absolute;
top:40%;
left:50%;
transform:translate(-50%,-50%);
opacity:0.08;
width:300px;
z-index:0;
}

.content{
position:relative;
z-index:1;
}

.signature{
width:120px;
margin-top:10px;
}

</style>

</head>

<body>

${content}

</body>

</html>
`);

win?.document.close();
win?.print();

};

const downloadPDF = async () => {

const element = document.getElementById("marksheet");

if (!element) return;

const canvas = await html2canvas(element);

const imgData = canvas.toDataURL("image/png");

const pdf = new jsPDF("p","mm","a4");

pdf.addImage(imgData,"PNG",10,10,190,0);

pdf.save("marksheet.pdf");

};

return (

<Layout>

<section className="py-12 bg-gray-100">

<div className="max-w-xl mx-auto bg-white shadow-lg p-6 rounded-lg">

<h2 className="text-center text-2xl font-bold mb-6">
Check Examination Result
</h2>

<form onSubmit={handleSearch} className="space-y-4">

<Input
placeholder="Enter Roll Number"
value={rollNo}
onChange={(e)=>setRollNo(e.target.value)}
className="text-center"
/>

<Button className="w-full">
<Search className="w-4 h-4 mr-2"/>
Search Result
</Button>

</form>

{error && (

<p className="text-red-500 text-center mt-4">
{error}
</p>
)}

</div>

{result && (

<div className="max-w-4xl mx-auto mt-10">

<div
id="marksheet"
className="bg-white shadow-xl border rounded-lg overflow-hidden relative"
>

<img
src={banner}
alt="School Banner"
className="w-full h-32 object-contain border-b"
/>

{/* Watermark Logo */}

<img
src={logo}
alt="Watermark"
className="absolute top-1/2 left-1/2 w-72 opacity-10 -translate-x-1/2 -translate-y-1/2"
/>

<div className="relative z-10">

<div className="text-center py-4">

<h2 className="text-2xl font-bold">
Sharda Bal Niketan Sr. Sec. School
</h2>

<p>Seekwara, Jalore (Rajasthan)</p>

<p className="text-sm">Academic Result</p>

</div>

<div className="grid grid-cols-2 gap-4 px-8 py-4 border-t border-b text-sm">

<p><b>Student Name :</b> {result.studentName}</p>
<p><b>Roll No :</b> {result.rollNo}</p>

<p><b>Class :</b> {result.class}</p>
<p><b>Sr No :</b> {result.srNo}</p>

<p><b>Date of Birth :</b> {result.dob}</p>

<p><b>Category :</b> {result.category}</p>

<p><b>Father Name :</b> {result.fatherName}</p>
<p><b>Mother Name :</b> {result.motherName}</p>

<p><b>Gender :</b> {result.sex}</p>

</div>

<div className="px-8 py-6">

<table>

<thead style={{background:"#eee"}}>

<tr>

<th>Total Marks</th>
<th>Percentage</th>
<th>Division</th>
<th>Position</th>
<th>Attendance</th>

</tr>

</thead>

<tbody>

<tr>

<td>{result.marks}</td>

<td>{result.percentage}</td>

<td>{result.division}</td>

<td>{result.position}</td>

<td>{result.attendance}</td>

</tr>

</tbody>

</table>

</div>

<div className="text-center pb-6">

<div className={`inline-block px-10 py-3 text-lg font-bold rounded-md

${result.resultStatus === "PASS"
? "bg-green-100 text-green-700 border border-green-400"
: "bg-red-100 text-red-700 border border-red-400"
}`}>

RESULT : {result.resultStatus}

</div>

</div>

<div className="flex justify-between items-center px-8 pb-8">

<div className="text-center">

<img
src={signature}
alt="Principal Signature"
className="w-28 mx-auto"
/>

<p className="text-sm mt-1">
Principal Signature
</p>

</div>

<div className="text-center">

<QRCode value={window.location.href} size={80}/>

<p className="text-xs mt-1">
Verify Result
</p>

</div>

</div>

</div>

</div>

<div className="flex justify-center gap-4 mt-6">

<Button variant="outline" onClick={printMarksheet}>
<Printer className="w-4 h-4 mr-2"/>
Print Marksheet
</Button>

<Button variant="outline" onClick={downloadPDF}>
<Download className="w-4 h-4 mr-2"/>
Download PDF
</Button>

</div>

</div>

)}

</section>

</Layout>

);

};

export default Results;
