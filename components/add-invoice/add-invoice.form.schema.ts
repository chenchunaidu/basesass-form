import * as yup from "yup";

export const TaxSchema = yup.object({
  taxType: yup.string(),
  taxPercentage: yup.string().required("Tax percentage is required"),
});

export const InvoiceItemsSchema = yup.object({
  name: yup.string().required("Item name is required"),
  quantity: yup.string().required("Quantity is required"),
  price: yup.string().required("Price is required"),
  taxItems: yup.array(TaxSchema),
  description: yup.string(),
});

export const AddInvoiceSchema = yup.object({
  no: yup.string().required("Invoice no is required"),
  name: yup.string(),
  client: yup.string().required("Please select client"),
  description: yup.string(),
  date: yup.string(),
  dueDate: yup.string(),
  invoiceItems: yup.array(InvoiceItemsSchema),
  note: yup.string(),
});

export type AddInvoiceSchemaType = yup.InferType<typeof AddInvoiceSchema>;
export type InvoiceItemsSchemaType = yup.InferType<typeof InvoiceItemsSchema>;
export type TaxSchemaType = yup.InferType<typeof TaxSchema>;
