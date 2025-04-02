// // "use client";

// // import Image from "next/image";
// // import Link from "next/link";
// // import { useParams, useRouter } from "next/navigation";
// // import React, { useState } from "react";
// // import { Plus, Minus, Copy, Send } from 'lucide-react';
// // import { Button } from "@/components/ui/button";
// // import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// // import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";
// // import { Textarea } from "@/components/ui/textarea";
// // import { useToast } from "@/hooks/use-toast";
// // import { products } from "@/app/data/item";

// // const PRICE_PER_ITEM_NGN = 4500;
// // const BANK_DETAILS = {
// //   accountName: "Glow Paints Ltd.",
// //   accountNumber: "1234567890",
// //   bankName: "Access Bank",
// //   swiftCode: "EXAMPLENGXXX"
// // };
// // const WHATSAPP_NUMBER = "+2348139064450";

// // const ProductPage: React.FC = () => {
// //   const { toast } = useToast();
// //   const [quantity, setQuantity] = useState(1);
// //   const [reference, setReference] = useState('');
// //   const [proofFile, setProofFile] = useState<File | null>(null);
// //   const [transferDetails, setTransferDetails] = useState('');

// //   const params = useParams();
// //   const router = useRouter();
// //   const productId = parseInt(params.id as string);

// //   const product = products.find((p) => p.id === productId);

// //   if (!product) {
// //     return <div className="text-center mt-10">Product not found</div>;
// //   }

// //   const incrementQuantity = () => setQuantity(prev => prev + 1);
// //   const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

// //   const totalPrice = (quantity * PRICE_PER_ITEM_NGN).toLocaleString('en-NG', { style: 'currency', currency: 'NGN' });

// //   const copyToClipboard = async (text: string) => {
// //     try {
// //       await navigator.clipboard.writeText(text);
// //       toast({
// //         description: "Copied to clipboard!",
// //       });
// //     } catch (err) {
// //       toast({
// //         description: "Failed to copy to clipboard",
// //         variant: "destructive"
// //       });
// //     }
// //   };

// //   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //     if (event.target.files && event.target.files[0]) {
// //       setProofFile(event.target.files[0]);
// //     }
// //   };

// //   const sendToWhatsApp = () => {
// //     if (!proofFile) {
// //       toast({
// //         description: "Please upload proof of payment first.",
// //         variant: "destructive"
// //       });
// //       return;
// //     }

// //     // Create message with available information
// //     let message = `Hello, I've made a bank transfer of ${totalPrice}.`;
// //     if (reference) {
// //       message += `\nReference: ${reference}`;
// //     }
// //     if (transferDetails) {
// //       message += `\n\nTransfer Details:\n${transferDetails}`;
// //     }

// //     window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
// //   };

// //   return (
// //     <div className="container mx-auto px-4 py-8">
// //       <Link
// //         href="/color-sample"
// //         className="text-blue-500 hover:underline mb-4 inline-block"
// //       >
// //         ← Back to Products
// //       </Link>

// //       <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 w-11/12 mx-auto">
// //         <div className="lg:w-6/12">
// //           <div className="mb-6">
// //             <Image
// //               src={product.img}
// //               width={400}
// //               height={400}
// //               alt={product.name}
// //               className="rounded-lg w-full"
// //             />
// //           </div>
// //           <div className="space-y-4">
// //             <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
// //             <p className="text-gray-700">
// //               The {product.name} is a premium, high-quality paint meticulously crafted to enhance the elegance and sophistication of luxurious spaces, including offices and homes. Its exceptionally smooth finish provides a refined and polished aesthetic, creating an ambiance of timeless luxury. With its superior formulation, {product.name} ensures durability and long-lasting beauty, making it the ideal choice for those seeking to elevate their interiors to unparalleled levels of refinement and style.
// //             </p>
// //           </div>
// //         </div>

// //         <div className="lg:w-6/12">
// //           <Card className="w-full">
// //             <CardHeader>
// //               <CardTitle>Payment</CardTitle>
// //               <CardDescription>Complete your purchase by bank transfer</CardDescription>
// //             </CardHeader>
// //             <CardContent className="space-y-6">
// //               <div className="flex items-center justify-between">
// //                 <Label htmlFor="quantity">Quantity</Label>
// //                 <div className="flex items-center space-x-2">
// //                   <Button variant="outline" size="icon" onClick={decrementQuantity}>
// //                     <Minus className="h-4 w-4" />
// //                   </Button>
// //                   <span className="w-8 text-center">{quantity}</span>
// //                   <Button variant="outline" size="icon" onClick={incrementQuantity}>
// //                     <Plus className="h-4 w-4" />
// //                   </Button>
// //                 </div>
// //               </div>

// //               <div className="space-y-2">
// //                 <div className="flex justify-between items-center">
// //                   <span>Price per item:</span>
// //                   <span>{PRICE_PER_ITEM_NGN.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}</span>
// //                 </div>
// //                 <div className="flex justify-between items-center font-bold">
// //                   <span>Total Price:</span>
// //                   <span>{totalPrice}</span>
// //                 </div>
// //               </div>

// //               <div className="space-y-2">
// //                 <Label>Bank Account Details</Label>
// //                 <div className="bg-gray-50 p-4 rounded-md space-y-3">
// //                   {Object.entries(BANK_DETAILS).map(([key, value]) => (
// //                     <div key={key} className="flex justify-between items-center">
// //                       <span className="text-sm text-gray-600 capitalize">
// //                         {key.replace(/([A-Z])/g, ' $1').trim()}:
// //                       </span>
// //                       <div className="flex items-center space-x-2">
// //                         <span className="font-medium">{value}</span>
// //                         <Button 
// //                           variant="ghost" 
// //                           size="icon" 
// //                           onClick={() => copyToClipboard(value)}
// //                         >
// //                           <Copy className="h-4 w-4" />
// //                         </Button>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>

// //               <div className="space-y-2">
// //                 <Label htmlFor="reference">Your Bank Transfer Reference (Optional)</Label>
// //                 <Input
// //                   id="reference"
// //                   placeholder="e.g., Your Name / Order ID"
// //                   value={reference}
// //                   onChange={(e) => setReference(e.target.value)}
// //                 />
// //               </div>

// //               <div className="space-y-2">
// //                 <Label htmlFor="transferDetails">Your Bank Transfer Details (Optional)</Label>
// //                 <Textarea
// //                   id="transferDetails"
// //                   placeholder="Enter the details of your bank transfer here (e.g., transfer date, amount, your bank name)"
// //                   value={transferDetails}
// //                   onChange={(e) => setTransferDetails(e.target.value)}
// //                 />
// //               </div>

// //               <div className="space-y-2">
// //                 <Label htmlFor="proofUpload">Upload Proof of Payment</Label>
// //                 <Input
// //                   id="proofUpload"
// //                   type="file"
// //                   onChange={handleFileChange}
// //                   accept="image/*,application/pdf"
// //                   className="cursor-pointer"
// //                 />
// //               </div>

// //               <div className="space-y-3">
// //                 <Label>Send Proof to WhatsApp</Label>
// //                 <p className="text-sm text-gray-600">
// //                   After uploading your proof of payment, click the button below to send it to our WhatsApp number: {WHATSAPP_NUMBER}
// //                 </p>
// //                 <Button
// //                   className="w-full"
// //                   onClick={sendToWhatsApp}
// //                   disabled={!proofFile}
// //                 >
// //                   <Send className="mr-2 h-4 w-4" /> Send to WhatsApp
// //                 </Button>
// //               </div>
// //             </CardContent>
// //           </Card>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductPage;
// "use client"

// import Image from "next/image"
// import Link from "next/link"
// import { useParams, useRouter } from "next/navigation"
// import type React from "react"
// import { useState } from "react"
// import { Plus, Minus, Copy, Send } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { useToast } from "@/hooks/use-toast"
// import { products } from "@/app/data/item"

// const BANK_DETAILS = {
//   accountName: "Glow Paints Ltd.",
//   accountNumber: "1234567890",
//   bankName: "Access Bank",
//   swiftCode: "EXAMPLENGXXX",
// }

// const PRODUCT_VARIANTS = {
//   standard: { name: "Standard", price: 4500 },
//   premium: { name: "Premium", price: 6500 },
//   luxury: { name: "Luxury", price: 8500 },
//   custom: { name: "Custom", price: 0 },
// }

// const WHATSAPP_NUMBER = "+2348139064450"

// const ProductPage: React.FC = () => {
//   const { toast } = useToast()
//   const [quantity, setQuantity] = useState(1)
//   const [reference, setReference] = useState("")
//   const [proofFile, setProofFile] = useState<File | null>(null)
//   const [transferDetails, setTransferDetails] = useState("")
//   const [selectedVariant, setSelectedVariant] = useState("standard")
//   const [pricePerItem, setPricePerItem] = useState(4500)

//   const params = useParams()
//   const router = useRouter()
//   const productId = Number.parseInt(params.id as string)

//   const product = products.find((p) => p.id === productId)

//   if (!product) {
//     return <div className="text-center mt-10">Product not found</div>
//   }

//   const incrementQuantity = () => setQuantity((prev) => prev + 1)
//   const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1))

//   const handleVariantChange = (variant: string) => {
//     setSelectedVariant(variant)
//     if (variant === "custom") {
//       // For custom, we'll let the user input their own price
//       setPricePerItem(0)
//     } else {
//       setPricePerItem(PRODUCT_VARIANTS[variant as keyof typeof PRODUCT_VARIANTS].price)
//     }
//   }

//   const handleCustomPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = Number.parseInt(e.target.value) || 0
//     setPricePerItem(value)
//   }

//   const totalPrice = (quantity * pricePerItem).toLocaleString("en-NG", { style: "currency", currency: "NGN" })

//   const copyToClipboard = async (text: string) => {
//     try {
//       await navigator.clipboard.writeText(text)
//       toast({
//         description: "Copied to clipboard!",
//       })
//     } catch (err) {
//       toast({
//         description: "Failed to copy to clipboard",
//         variant: "destructive",
//       })
//     }
//   }

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files[0]) {
//       setProofFile(event.target.files[0])
//     }
//   }

//   const sendToWhatsApp = () => {
//     if (!proofFile) {
//       toast({
//         description: "Please upload proof of payment first.",
//         variant: "destructive",
//       })
//       return
//     }

//     // Create message with available information
//     let message = `Hello, I've made a bank transfer of ${totalPrice}.`
//     if (reference) {
//       message += `\nReference: ${reference}`
//     }
//     if (transferDetails) {
//       message += `\n\nTransfer Details:\n${transferDetails}`
//     }

//     window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank")
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <Link href="/color-sample" className="text-blue-500 hover:underline mb-4 inline-block">
//         ← Back to Products
//       </Link>

//       <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 w-11/12 mx-auto">
//         <div className="lg:w-6/12">
//           <div className="mb-6">
//             <Image
//               src={product.img || "/placeholder.svg"}
//               width={400}
//               height={400}
//               alt={product.name}
//               className="rounded-lg w-full"
//             />
//           </div>
//           <div className="space-y-4">
//             <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
//             <p className="text-gray-700">
//               The {product.name} is a premium, high-quality paint meticulously crafted to enhance the elegance and
//               sophistication of luxurious spaces, including offices and homes. Its exceptionally smooth finish provides
//               a refined and polished aesthetic, creating an ambiance of timeless luxury. With its superior formulation,{" "}
//               {product.name} ensures durability and long-lasting beauty, making it the ideal choice for those seeking to
//               elevate their interiors to unparalleled levels of refinement and style.
//             </p>
//           </div>
//         </div>

//         <div className="lg:w-6/12">
//           <Card className="w-full">
//             <CardHeader>
//               <CardTitle>Payment</CardTitle>
//               <CardDescription>Complete your purchase by bank transfer</CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-6">
//               <div className="flex items-center justify-between">
//                 <Label htmlFor="quantity">Quantity</Label>
//                 <div className="flex items-center space-x-2">
//                   <Button variant="outline" size="icon" onClick={decrementQuantity}>
//                     <Minus className="h-4 w-4" />
//                   </Button>
//                   <span className="w-8 text-center">{quantity}</span>
//                   <Button variant="outline" size="icon" onClick={incrementQuantity}>
//                     <Plus className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </div>

//               <div className="space-y-2 mt-4">
//                 <Label htmlFor="variant">Product Variant</Label>
//                 <div className="grid grid-cols-2 gap-2">
//                   {Object.entries(PRODUCT_VARIANTS).map(([key, variant]) => (
//                     <Button
//                       key={key}
//                       type="button"
//                       variant={selectedVariant === key ? "default" : "outline"}
//                       onClick={() => handleVariantChange(key)}
//                       className="justify-start"
//                     >
//                       {variant.name}
//                       {key !== "custom" && (
//                         <span className="ml-auto">
//                           {variant.price.toLocaleString("en-NG", { style: "currency", currency: "NGN" })}
//                         </span>
//                       )}
//                     </Button>
//                   ))}
//                 </div>
//               </div>

//               {selectedVariant === "custom" && (
//                 <div className="space-y-2">
//                   <Label htmlFor="customPrice">Enter Custom Price (NGN)</Label>
//                   <Input
//                     id="customPrice"
//                     type="number"
//                     placeholder="Enter price in NGN"
//                     onChange={handleCustomPriceChange}
//                     min="0"
//                   />
//                 </div>
//               )}

//               <div className="space-y-2">
//                 <div className="flex justify-between items-center">
//                   <span>Selected variant:</span>
//                   <span>{PRODUCT_VARIANTS[selectedVariant as keyof typeof PRODUCT_VARIANTS].name}</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span>Price per item:</span>
//                   <span>{pricePerItem.toLocaleString("en-NG", { style: "currency", currency: "NGN" })}</span>
//                 </div>
//                 <div className="flex justify-between items-center font-bold">
//                   <span>Total Price:</span>
//                   <span>{totalPrice}</span>
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <Label>Bank Account Details</Label>
//                 <div className="bg-gray-50 p-4 rounded-md space-y-3">
//                   {Object.entries(BANK_DETAILS).map(([key, value]) => (
//                     <div key={key} className="flex justify-between items-center">
//                       <span className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}:</span>
//                       <div className="flex items-center space-x-2">
//                         <span className="font-medium">{value}</span>
//                         <Button variant="ghost" size="icon" onClick={() => copyToClipboard(value)}>
//                           <Copy className="h-4 w-4" />
//                         </Button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="reference">Your Bank Transfer Reference (Optional)</Label>
//                 <Input
//                   id="reference"
//                   placeholder="e.g., Your Name / Order ID"
//                   value={reference}
//                   onChange={(e) => setReference(e.target.value)}
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="transferDetails">Your Bank Transfer Details (Optional)</Label>
//                 <Textarea
//                   id="transferDetails"
//                   placeholder="Enter the details of your bank transfer here (e.g., transfer date, amount, your bank name)"
//                   value={transferDetails}
//                   onChange={(e) => setTransferDetails(e.target.value)}
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="proofUpload">Upload Proof of Payment</Label>
//                 <Input
//                   id="proofUpload"
//                   type="file"
//                   onChange={handleFileChange}
//                   accept="image/*,application/pdf"
//                   className="cursor-pointer"
//                 />
//               </div>

//               <div className="space-y-3">
//                 <Label>Send Proof to WhatsApp</Label>
//                 <p className="text-sm text-gray-600">
//                   After uploading your proof of payment, click the button below to send it to our WhatsApp number:{" "}
//                   {WHATSAPP_NUMBER}
//                 </p>
//                 <Button className="w-full" onClick={sendToWhatsApp} disabled={!proofFile}>
//                   <Send className="mr-2 h-4 w-4" /> Send to WhatsApp
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductPage


"use client"

import Image from "next/image"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import type React from "react"
import { useState } from "react"
import { Plus, Minus, Copy, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { products } from "@/app/data/item"

const BANK_DETAILS = {
  accountName: "Chris Feddek Intl Ltd",
  accountNumber: "0708734606",
  bankName: "Guaranteed Trust Bank",
  // swiftCode: "EXAMPLENGXXX",
}

const WHATSAPP_NUMBER = "+2348053407227"

const ProductPage: React.FC = () => {
  const { toast } = useToast()
  const [quantity, setQuantity] = useState(1)
  const [reference, setReference] = useState("")
  const [proofFile, setProofFile] = useState<File | null>(null)
  const [transferDetails, setTransferDetails] = useState("")

  const params = useParams()
  const router = useRouter()
  const productId = Number.parseInt(params.id as string)

  const product = products.find((p) => p.id === productId)

  if (!product) {
    return <div className="text-center mt-10">Product not found</div>
  }

  const pricePerItem = product.price
  const totalPrice = (quantity * pricePerItem).toLocaleString("en-NG", { style: "currency", currency: "NGN" })

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1))

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      toast({
        description: "Copied to clipboard!",
      })
    } catch (err) {
      toast({
        description: "Failed to copy to clipboard",
        variant: "destructive",
      })
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setProofFile(event.target.files[0])
    }
  }

  const sendToWhatsApp = () => {
    if (!proofFile) {
      toast({
        description: "Please upload proof of payment first.",
        variant: "destructive",
      })
      return
    }

    // Create message with available information
    let message = `Hello, I've made a bank transfer of ${totalPrice} for ${quantity} ${quantity > 1 ? "units" : "unit"} of ${product.name}.`
    if (reference) {
      message += `\nReference: ${reference}`
    }
    if (transferDetails) {
      message += `\n\nTransfer Details:\n${transferDetails}`
    }

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/color-sample" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Products
      </Link>

      <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 w-11/12 mx-auto">
        <div className="lg:w-6/12">
          <div className="mb-6">
            <Image
              src={product.img || "/placeholder.svg"}
              width={400}
              height={400}
              alt={product.name}
              className="rounded-lg w-full"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-gray-700">
              {product.desc ||
                `The ${product.name} is a premium, high-quality paint meticulously crafted to enhance the elegance and
              sophistication of luxurious spaces, including offices and homes. Its exceptionally smooth finish provides
              a refined and polished aesthetic, creating an ambiance of timeless luxury. With its superior formulation,
              ${product.name} ensures durability and long-lasting beauty, making it the ideal choice for those seeking to
              elevate their interiors to unparalleled levels of refinement and style.`}
            </p>
          </div>
        </div>

        <div className="lg:w-6/12">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Payment</CardTitle>
              <CardDescription>Complete your purchase by bank transfer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <Label htmlFor="quantity">Quantity</Label>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" onClick={decrementQuantity}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{quantity}</span>
                  <Button variant="outline" size="icon" onClick={incrementQuantity}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>Price per item:</span>
                  <span>{pricePerItem.toLocaleString("en-NG", { style: "currency", currency: "NGN" })}</span>
                </div>
                <div className="flex justify-between items-center font-bold">
                  <span>Total Price:</span>
                  <span>{totalPrice}</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Bank Account Details</Label>
                <div className="bg-gray-50 p-4 rounded-md space-y-3">
                  {Object.entries(BANK_DETAILS).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}:</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{value}</span>
                        <Button variant="ghost" size="icon" onClick={() => copyToClipboard(value)}>
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="reference">Your Bank Transfer Reference (Optional)</Label>
                <Input
                  id="reference"
                  placeholder="e.g., Your Name / Order ID"
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="transferDetails">Your Bank Transfer Details (Optional)</Label>
                <Textarea
                  id="transferDetails"
                  placeholder="Enter the details of your bank transfer here (e.g., transfer date, amount, your bank name)"
                  value={transferDetails}
                  onChange={(e) => setTransferDetails(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="proofUpload">Upload Proof of Payment</Label>
                <Input
                  id="proofUpload"
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*,application/pdf"
                  className="cursor-pointer"
                />
              </div>

              <div className="space-y-3">
                <Label>Send Proof to WhatsApp</Label>
                <p className="text-sm text-gray-600">
                  After uploading your proof of payment, click the button below to send it to our WhatsApp number:{" "}
                  {WHATSAPP_NUMBER}
                </p>
                <Button className="w-full" onClick={sendToWhatsApp} disabled={!proofFile}>
                  <Send className="mr-2 h-4 w-4" /> Send to WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ProductPage

