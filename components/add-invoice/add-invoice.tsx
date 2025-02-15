"use client";
import React, { useState } from "react";
import { AddInvoiceForm } from "./add-invoice.form";
import { PreviewInvoice } from "./preview/preview-invoice";
import { fromAddress } from "./add-invoice.form.data";
import { AddInvoiceSchemaType } from "./add-invoice.form.schema";

export const AddInvoice = () => {
  const [data, setData] = useState<Record<string, any>>();

  return (
    <div className="flex w-full space-x-4">
      <AddInvoiceForm
        onSubmit={(e) => {
          setData(e);
        }}
      />
      <div className="flex-1 border p-8">
        <PreviewInvoice
          {...(data as AddInvoiceSchemaType)}
          fromAddress={fromAddress}
        />
      </div>
    </div>
  );
};
