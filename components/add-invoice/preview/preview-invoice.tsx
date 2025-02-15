import React from "react";
import dayjs from "dayjs";

import { Page, Text, View, Document } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";
import { AddInvoiceSchemaType } from "../add-invoice.form.schema";
import { getClientDataByValue } from "../add-invoice.form.options";
import { InvoiceItems } from "./invoice-items";

interface LabelItemProps {
  label: string;
  children: React.ReactNode;
  style?: Style;
}

const LabelItem = ({ label, children, style = {} }: LabelItemProps) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        marginRight: "4rem",
        ...style,
      }}
    >
      <Text style={{ fontWeight: 600 }}>{label}</Text>
      <View>{children}</View>
    </View>
  );
};

interface PreviewInvoiceProps extends AddInvoiceSchemaType {
  fromAddress: string;
}

export const PreviewInvoice = ({
  no,
  date,
  dueDate,
  fromAddress,
  client,
  invoiceItems,
  note,
}: PreviewInvoiceProps) => {
  const clientInfo = getClientDataByValue(client) || {};

  return (
    <Document>
      <Page size="A4" style={{ fontSize: "14px" }}>
        <Text style={{ fontSize: "2rem" }}>Invoice</Text>
        <View
          style={{
            display: "flex",
            marginBottom: "1rem",
            marginTop: "1rem",
          }}
        >
          <LabelItem label="Invoice no">{no}</LabelItem>
          <LabelItem label="Date">
            {dayjs(date).format("MMM D, YYYY")}
          </LabelItem>
          <LabelItem label="Invoice Due">
            {dayjs(dueDate).format("MMM D, YYYY")}
          </LabelItem>
        </View>
        <View>
          <LabelItem
            label="From"
            style={{ marginBottom: "2rem", maxWidth: "15rem" }}
          >
            {fromAddress}
          </LabelItem>
          <LabelItem
            label="To"
            style={{ marginBottom: "2rem", maxWidth: "15rem" }}
          >
            <Text>{clientInfo.name}</Text>
            <Text>{clientInfo?.description}</Text>
          </LabelItem>
          <InvoiceItems items={invoiceItems || []} />
        </View>
        {note ? (
          <LabelItem label="Note" style={{ paddingTop: "96px" }}>
            <View style={{ display: "flex", flexDirection: "column" }}>
              {note.split("\n").map((noteLine) => (
                <Text key={noteLine}>{noteLine}</Text>
              ))}
            </View>
          </LabelItem>
        ) : null}
      </Page>
    </Document>
  );
};
