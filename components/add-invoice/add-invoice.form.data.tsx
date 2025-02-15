import { FromInputGroupType } from "../ui/base-form/form-field-group";
import { FormInputType } from "../ui/base-form/form-input";
import { BaseFormFieldsType } from "../ui/base-form/types";
import {
  clientOptions,
  clientSelectData,
  taxPercentage,
  taxTypes,
} from "./add-invoice.form.options";

export const defaultTaxItemData = { taxType: "IGST", taxPercentage: 18 };

export const defaultInvoiceItemData = {
  id: "1",
  name: "",
  quantity: "1",
  price: "",
  taxItems: [defaultTaxItemData],
};

const getDefaultDates = () => {
  const todayDate = new Date();
  const nextMonth = todayDate.getMonth() + 2;
  const nextMonthString = nextMonth < 9 ? `0${nextMonth}` : nextMonth;
  const year = todayDate.getFullYear() + 1;
  const date = `${year}-${nextMonthString}-01`;
  const dueDate = `${year}-${nextMonthString}-08`;
  return { date, dueDate };
};

export const addInvoiceDefaultDetails = {
  invoiceItems: [defaultInvoiceItemData],
  client: clientSelectData[0].value,
  date: getDefaultDates().date,
  dueDate: getDefaultDates().dueDate,
};

export const AddInvoiceFormData: BaseFormFieldsType[] = [
  {
    group: true,
    className:
      "space-x-0 gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ",
    fields: [
      {
        name: "no",
        label: "Invoice #",
      },
      {
        name: "invoiceName",
        label: "Invoice name",
      },
      {
        name: "date",
        label: "Date",
        inputProps: {
          type: "date",
        },
      },
      {
        name: "dueDate",
        label: "Due date",
        inputProps: {
          type: "date",
        },
      },
    ],
  },

  {
    name: "client",
    label: "Client",
    inputProps: {
      fieldType: FormInputType.Select,
      options: clientOptions,
      triggerClassName: "h-full min-h-10",
    },
  },
  {
    name: "description",
    label: "Description",
    inputProps: {
      fieldType: FormInputType.Textarea,
    },
  },
  {
    group: true,
    groupType: FromInputGroupType.Repeated,
    groupName: "invoiceItems",
    label: "Invoice Item",
    defaultValue: defaultInvoiceItemData,
    className: "shadow-sm border p-4",
    fields: [
      {
        group: true,
        groupType: FromInputGroupType.Horizontal,
        className:
          "space-x-0 gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        fields: [
          {
            name: "name",
            label: "Item name",
          },
          {
            name: "quantity",
            label: "Quantity",
          },
          {
            name: "price",
            label: "Price",
          },
        ],
      },
      {
        group: true,
        groupType: FromInputGroupType.Repeated,
        className: "w-full border p-4 rounded-sm border-dashed flex",
        groupName: "taxItems",
        label: "Tax Item",
        defaultValue: defaultTaxItemData,
        fields: [
          {
            group: true,
            groupType: FromInputGroupType.Horizontal,
            className: "gap-2 grid grid-cols-3",
            fields: [
              {
                name: "taxType",
                label: "Tax type",
                inputProps: {
                  fieldType: FormInputType.Select,
                  options: taxTypes,
                },
              },
              {
                name: "taxPercentage",
                label: "Tax Percentage %",
                inputProps: {
                  type: "number",
                  options: taxPercentage,
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "note",
    label: "Note",
    inputProps: {
      fieldType: FormInputType.Textarea,
      placeholder:
        "Bank Account Number:\nBANK IFSC CODE\nPAN No#:\nGST No#:\nEmail:",
    },
  },
];

export const fromAddress = `chenchunaidu maddineni
6-126, unnam vari palem, palukuru(post),
kandukuru(mond)
Kandukur, Andhra pradesh, 523101
India`;
