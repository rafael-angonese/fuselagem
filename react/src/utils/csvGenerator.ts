/* Examples
const data = [] as any;

const headers = ["ID", "E-mail", "Name", "Last Name"];

const rows = data.map((item: any) => {
  return [item.id, item.email, item.name, item.last_name];
});

csvGenerator('users.csv', [headers, ...rows]);
*/

const csvGenerator = (
  fileName: string,
  rows: Array<Array<string | number>>
) => {
  const csvContent =
    "data:text/csv;charset=utf-8," + rows.map((e) => e.join(",")).join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", fileName);
  document.body.appendChild(link);

  link.click();
};

export default csvGenerator;
