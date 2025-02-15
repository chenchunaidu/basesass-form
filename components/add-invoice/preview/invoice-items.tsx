import React, { PropsWithChildren } from "react";
import {
  InvoiceItemsSchemaType,
  TaxSchemaType,
} from "../add-invoice.form.schema";
import { Text, TextProps, View } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";

interface InvoiceItemsProps {
  items: InvoiceItemsSchemaType[];
}

interface RowProps {
  children: React.ReactNode[];
  style?: Style;
  showBorder?: boolean;
}

const getItemTax = (taxItem?: TaxSchemaType) => {
  if (!taxItem?.taxPercentage) {
    return 0;
  }
  const taxPercentage = parseInt(taxItem.taxPercentage);
  return taxPercentage / 100;
};

const getTax = (taxItems?: TaxSchemaType[]) => {
  let taxPercentage = 0;
  taxItems?.forEach((taxItem) => {
    taxPercentage += getItemTax(taxItem);
  });

  return taxPercentage;
};

const getItemTotal = ({
  quantity,
  price,
  taxItems,
}: InvoiceItemsSchemaType) => {
  const priceInt = parseInt(price);
  const quantityInt = parseInt(quantity);
  const taxPercentage = getTax(taxItems);
  const totalValue = priceInt * quantityInt;
  const taxValue = totalValue * taxPercentage;
  return { total: totalValue, tax: taxValue };
};

const getInvoiceTotal = (items: InvoiceItemsSchemaType[]) => {
  let taxTotal = 0;
  let subTotal = 0;
  items.forEach((item) => {
    const { total, tax } = getItemTotal(item);
    taxTotal += tax;
    subTotal += total;
  });

  return { subTotal, taxTotal, total: taxTotal + subTotal };
};

const InvoiceItem = (props: InvoiceItemsSchemaType) => {
  const { quantity, price, name, taxItems } = props;
  const { total } = getItemTotal(props);
  return (
    <Row
      style={{
        paddingTop: "8px",
      }}
      showBorder
    >
      <View style={{ display: "flex", flexDirection: "column" }}>
        <Text>{name}</Text>
        {taxItems?.map((taxItem) => (
          <>
            <Text style={{ color: "gray" }}>
              + {taxItem.taxType} {taxItem.taxPercentage}% -{" "}
              {getItemTax(taxItem) * total}
            </Text>
          </>
        ))}
      </View>
      <Text>{quantity}</Text>
      <Text>{price}</Text>
      <Text>{total}</Text>
    </Row>
  );
};

const Row = ({ children, style, showBorder }: RowProps) => {
  const borderStyles = showBorder
    ? {
        borderBottom: "1px solid",
        borderBottomColor: "rgb(226 232 240)",
        paddingBottom: "8px",
        paddingTop: "8px",
      }
    : {};

  return (
    <View
      style={{
        display: "flex",
        ...borderStyles,
        ...style,
      }}
    >
      {children?.map((row, index) => (
        <View key={index} style={{ flex: 1 }}>
          {row}
        </View>
      ))}
    </View>
  );
};

const Header = ({ children, style }: PropsWithChildren<TextProps>) => {
  return <Text style={{ fontWeight: 600, ...style }}>{children}</Text>;
};

const InvoiceTotal = ({ items }: InvoiceItemsProps) => {
  if (!items?.length) {
    return null;
  }

  const { subTotal, taxTotal, total } = getInvoiceTotal(items);

  return (
    <>
      <Row>
        <></>
        <Row showBorder>
          <Text>Sub Total</Text>
          <Text>{subTotal}</Text>
        </Row>
      </Row>
      <Row>
        <></>
        <Row showBorder>
          <Text>Tax Total</Text>
          <Text>{taxTotal}</Text>
        </Row>
      </Row>
      <Row>
        <></>
        <Row showBorder>
          <Header>Total</Header>
          <Header>{total}</Header>
        </Row>
      </Row>
    </>
  );
};

export const InvoiceItems = ({ items }: InvoiceItemsProps) => {
  return (
    <View>
      <Row showBorder>
        <Header>Description</Header>
        <Header>Quantity</Header>
        <Header>Price</Header>
        <Header>Total</Header>
      </Row>
      {items?.map((item, index) => (
        <InvoiceItem key={index} {...item} />
      ))}
      <InvoiceTotal items={items} />
    </View>
  );
};
