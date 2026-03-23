// ES module exports

// named export for a shared constant
export const taxrate = 0.18;
// named export for reusable function
export function calculateTotal(subtotal) {
    return subtotal + subtotal*taxrate;
}
// default export: for the main feature module
export default function createInvoiceLabel(invoiceNumber){
    return "invoice : "+ invoiceNumber;
}