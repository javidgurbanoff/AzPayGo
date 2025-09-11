// "use client";

// import { Accordion } from "@chakra-ui/react";

// const faqItems = [
//   {
//     question: "AzPayGo nədir?",
//     answer:
//       "AzPayGo mobil tətbiqi ödənişlərinizi asan və təhlükəsiz şəkildə etməyiniz üçün hazırlanmışdır.",
//   },
//   {
//     question: "Necə qeydiyyatdan keçə bilərəm?",
//     answer:
//       "Tətbiqi yükləyin, mobil nömrənizi daxil edin və SMS vasitəsilə təsdiqləyin.",
//   },
//   {
//     question: "Ödənişlərim təhlükəsizdirmi?",
//     answer:
//       "Bəli, bütün ödənişlər beynəlxalq təhlükəsizlik standartlarına uyğun qorunur.",
//   },
// ];

// export default function BasicDemo() {
//   return (
//     <Accordion.Root
//       multiple
//       collapsible
//       className="w-full max-w-3xl rounded-xl shadow bg-white"
//     >
//       {faqItems.map((item, idx) => (
//         <Accordion.Item key={idx} value={item.question} className="border-b">
//           <Accordion.ItemTrigger className="px-4 py-3 text-left font-semibold text-gray-800 hover:bg-gray-50 flex justify-between items-center">
//             {item.question}
//             <span className="transition-transform ui-state-open:rotate-180">
//               ▼
//             </span>
//           </Accordion.ItemTrigger>
//           <Accordion.ItemContent className="px-4 py-2 text-gray-600">
//             {item.answer}
//           </Accordion.ItemContent>
//         </Accordion.Item>
//       ))}
//     </Accordion.Root>
//   );
// }
