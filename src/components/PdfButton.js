// import React, { useRef, useState } from 'react';
// import { jsPDF } from 'jspdf';
// import html2canvas from 'html2canvas';
// const PdfButton = ({ children, filename }) => {
//   const contentRef = useRef();
//   const [pdfUrl, setPdfUrl] = useState(null);

//   const generatePDF = async () => {
//     const content = contentRef.current;
//     const canvas = await html2canvas(content, {
//       scale: 3,
//       useCORS: true,
//     });

//     const imgData = canvas.toDataURL('image/png');
//     const pdf = new jsPDF('p', 'mm', 'a4');
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = pdf.internal.pageSize.getHeight();

//     const imgWidth = pdfWidth;
//     const imgHeight = (canvas.height * pdfWidth) / canvas.width;

//     if (imgHeight <= pdfHeight) {
//       pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
//     } else {
//       let heightLeft = imgHeight;
//       let position = 0;

//       pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//       heightLeft -= pdfHeight;

//       while (heightLeft > 0) {
//         position = heightLeft - imgHeight;
//         pdf.addPage();
//         pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//         heightLeft -= pdfHeight;
//       }
//     }

//     const pdfBlob = pdf.output('blob');
//     const pdfUrl = URL.createObjectURL(pdfBlob);

//     // Open the PDF in a new tab
//     window.open(pdfUrl, '_blank');

//     // Revoke the object URL to release memory
//     URL.revokeObjectURL(pdfUrl);
//   };
//   return (
//     <div>
//       <div ref={contentRef} style={{ padding: 20, backgroundColor: 'white', width: '210mm', margin: 'auto' }}>
//         {children}
//       </div>
//       <div className='flex justify-center mb-10'>
//         <button onClick={generatePDF}>Generate PDF</button>
//       </div>
//     </div>
//   );
// };
//   export default PdfButton;

import React, { useRef, useState } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const PdfButton = ({ children, filename }) => {
  const contentRef = useRef();
  const [previewWindow, setPreviewWindow] = useState(null);

  const openPreviewWindow = () => {
    generatePDF(pdfUrl => {
      const newWindow = window.open(pdfUrl);
      setPreviewWindow(newWindow);
    });
  };

  const generatePDF = (callback) => {
    const content = contentRef.current;
    html2canvas(content, {
      scale: 3,
      useCORS: true,
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

      if (imgHeight <= pdfHeight) {
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      } else {
        let heightLeft = imgHeight;
        let position = 0;
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
        while (heightLeft > 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pdfHeight;
        }
      }
      const pdfBlob = pdf.output('blob');
      const pdfUrl = URL.createObjectURL(pdfBlob);
      callback(pdfUrl);
    });
  };

  return (
    <div>
      <div ref={contentRef} style={{ padding: 20, backgroundColor: 'white', width: '210mm', margin: 'auto' }}>
        {children}
      </div>
      <div className='flex justify-center mb-10'>
        <button onClick={openPreviewWindow}>Generate PDF</button>
      </div>
    </div>
  );
};

export default PdfButton;

