import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Printer, Download } from "lucide-react";
import { useState } from "react";
import banner from "@/assets/banner.jpg";
import sign from "@/assets/signature.jpg";
import qr from "@/assets/qr.png";

const Results = () => {

const [rollNo,setRollNo] = useState("");
const [result,setResult] = useState<any>(null);
const [error,setError] = useState("");

const handleSearch = async (e:React.FormEvent) => {

e.preventDefault();

setError("");
setResult(null);

try{

const res = await fetch(
"https://script.google.com/macros/s/AKfycbzGxYbh-Obo7Z9VJPGletWTu1FUgYmBpHr4hdJYcT6avMJKI1X1z8jaeeI13KbBKnrWoA/exec?roll="+rollNo
);

const data = await res.json();

if(!data || !data.rollNo){

setError("Result not found. Check roll number.");
return;

}

setResult(data);

}catch{

setError("Error loading result.");

}

};

const printMarksheet = ()=>{

const element = document.getElementById("marksheet");

if(!element) return;

const win = window.open("", "", "width=900,height=700");

win?.document.write(`

<html>
<head>
<title>Marksheet</title>

<style>

body{
font-family:Arial;
padding:20px;
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
height:130px;
object-fit:contain;
}

</style>

</head>

<body>

${element.innerHTML}

</body>

</html>
`);

win?.document.close();
win?.print();

};

const downloadPDF = ()=>{

// Browser print dialog open hoga
// User "Save as PDF" select kar sakta hai

printMarksheet();

};

return(

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
className="bg-white shadow-xl border rounded-lg overflow-hidden"
>

<img
src={banner}
className="w-full h-36 object-contain border-b"
/>

<div className="text-center py-4">

<h2 className="text-2xl font-bold">
Sharda Bal Niketan Sr. Sec. School
</h2>

<p>Seekwara, Jalore (Rajasthan)</p>

<p className="text-sm">
Academic Result
</p>

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
<p><b>Attendance :</b> {result.attendance}</p>

</div>

<div className="px-8 py-6">

<table className="w-full border border-gray-400 border-collapse text-center">

<thead className="bg-gray-100">

<tr>

<th className="border border-gray-400 px-4 py-3">Total Marks</th>
<th className="border border-gray-400 px-4 py-3">Percentage</th>
<th className="border border-gray-400 px-4 py-3">Division</th>
<th className="border border-gray-400 px-4 py-3">Position</th>

</tr>

</thead>

<tbody>

<tr>

<td className="border border-gray-400 px-4 py-3">{result.marks}</td>
<td className="border border-gray-400 px-4 py-3">{result.percentage}</td>
<td className="border border-gray-400 px-4 py-3">{result.division}</td>
<td className="border border-gray-400 px-4 py-3">{result.position}</td>

</tr>

</tbody>

</table>

</div>

<div className="text-center pb-6">

<div className={`inline-block px-10 py-3 text-lg font-bold rounded-md

${result.resultStatus==="PASS"
?"bg-green-100 text-green-700 border border-green-400"
:"bg-red-100 text-red-700 border border-red-400"
}`}>

RESULT : {result.resultStatus}

</div>

</div>

<div className="flex justify-between px-8 pb-6">

<div className="text-center">

<img
src={sign}
className="h-16 mx-auto"
/>

<p className="text-sm">
Principal Signature
</p>

</div>

<div className="text-center">

<img
src={qr}
className="h-16 mx-auto"
/>

<p className="text-sm">
Verify Result
</p>

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
