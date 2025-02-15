import { BaseAvatar } from "../ui/base-avatar";

export const clientSelectData = [
  {
    name: "Google",
    icon: "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg",
    description:
      "Block 1, DivyaSree Omega Survey No 13, Kothaguda, Telangana 500084",
    value: "google",
  },
  {
    name: "Meta",
    icon: "https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg",
    description:
      "6-3-352/2/5A, Astral heights, Near: Panjagutta X-Roads, Banjara Hills, Road No:1, Hyderabad, Telangana 500034",
    value: "meta",
  },
  {
    name: "Pinterest",
    icon: "https://i.pinimg.com/280x280_RS/f6/e9/3a/f6e93a06b500b2d87ffd32e1f56f7c6f.jpg",
    description:
      "Block 1, DivyaSree Omega Survey No 13, Kothaguda, Telangana 500084",
    value: "pinterest",
  },
];

export const clientOptions = clientSelectData?.map(
  ({ value, description, name, icon }) => ({
    label: (
      <div className="flex justify-center items-center space-x-4">
        <BaseAvatar src={icon} alt={name} className="w-6 h-6" />
        <div className="text-left max-w-xs">
          <div>{name}</div>
          <div className="text-xs text-slate-500 line-clamp-2">
            {description}
          </div>
        </div>
      </div>
    ),
    value: value,
  })
);

export const getClientDataByValue = (clientValue: string) => {
  return clientSelectData.filter((client) => client.value === clientValue)[0];
};

export const taxTypes = [
  {
    label: "SGST",
    value: "SGST",
  },
  {
    label: "CGST",
    value: "CGST",
  },
  {
    label: "IGST",
    value: "IGST",
  },
];

export const taxPercentage = [
  {
    label: "0%",
    value: "0",
  },
  {
    label: "0.1%",
    value: "0.1",
  },
  {
    label: "0.25%",
    value: "0.25",
  },
  {
    label: "1%",
    value: "1",
  },
  {
    label: "1.5%",
    value: "1.5",
  },
  {
    label: "3%",
    value: "3",
  },
  {
    label: "5%",
    value: "5",
  },
  {
    label: "6%",
    value: "6",
  },
  {
    label: "7.5%",
    value: "7.5",
  },
  {
    label: "12%",
    value: "12",
  },
  {
    label: "18%",
    value: "18",
  },
  {
    label: "28%",
    value: "28",
  },
];
