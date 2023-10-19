function generateReport() {
  const table = document.querySelector("table");
  const headers = table.querySelectorAll("thead input[type=checkbox]");
  const rows = table.querySelectorAll("tbody tr");

  const selectedColumns = Array.from(headers)
    .map((checkbox, index) => ({
      index,
      name: checkbox.name,
      checked: checkbox.checked,
    }))
    .filter((column) => column.checked);

  const reportData = Array.from(rows).map((row) => {
    const rowData = selectedColumns.reduce((result, column) => {
      const cellText = row.querySelector(
        `td:nth-child(${column.index + 1})`
      ).textContent;
      result[column.name] = cellText;
      return result;
    }, {});

    return rowData;
  });

  const outputTextarea = document.getElementById("output");
  outputTextarea.value = JSON.stringify(reportData, null, 2);
}
