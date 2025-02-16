"use client";
import React from "react";
import { AddInvoiceForm } from "./add-invoice.form";

export const AddInvoice = () => {
  return (
    <div className="flex w-full space-x-4">
      <AddInvoiceForm
        onSubmit={(e) => {
          alert(JSON.stringify(e, null, 2));
        }}
      />
    </div>
  );
};
