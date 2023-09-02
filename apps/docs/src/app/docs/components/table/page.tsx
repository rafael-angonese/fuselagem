import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import { Table } from "@/registry/ui/Table";
import { Text } from "@/registry/ui/text";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export default async function TablePage() {
  return (
    <PageComponentLayout>
      <ComponentLayout>
        <Text variant="h1">Default</Text>

        <Table.Root>
          <Table.Head>
            <Table.Row>
              <Table.Column>Invoice</Table.Column>
              <Table.Column>Status</Table.Column>
              <Table.Column>Method</Table.Column>
              <Table.Column>Amount</Table.Column>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {invoices.map((invoice) => (
              <Table.Row key={invoice.invoice}>
                <Table.Cell>{invoice.invoice}</Table.Cell>
                <Table.Cell>{invoice.paymentStatus}</Table.Cell>
                <Table.Cell>{invoice.paymentMethod}</Table.Cell>
                <Table.Cell>{invoice.totalAmount}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </ComponentLayout>
    </PageComponentLayout>
  );
}
