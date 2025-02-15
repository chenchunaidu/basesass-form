import React from "react";

import {
  AddInvoiceFormData,
  addInvoiceDefaultDetails,
} from "./add-invoice.form.data";
import { FileText } from "lucide-react";
import { AddInvoiceSchema } from "./add-invoice.form.schema";
import { BaseForm } from "../ui/base-form/form";

// Add Title

interface AddInvoiceFormProps {
  onSubmit: (data: Record<string, string>) => void;
}

export const AddInvoiceForm = ({ onSubmit }: AddInvoiceFormProps) => {
  return (
    <div className="border px-6 py-8 rounded-sm shadow-sm bg-white flex-1 space-y-4">
      <div className="space-y-1">
        <div className="text-xl font-semibold flex items-center space-x-1">
          <FileText />
          <div>Create Invoice</div>
        </div>
        <div className="text-slate-500 text-sm">
          Yay! 🥳 congrats on new invoice
        </div>
      </div>
      <BaseForm
        schema={AddInvoiceSchema}
        fields={AddInvoiceFormData}
        onSubmit={onSubmit}
        className="w-full space-y-4"
        defaultValues={addInvoiceDefaultDetails}
        button={{ children: "Preview Invoice" }}
      />
    </div>
  );
};
