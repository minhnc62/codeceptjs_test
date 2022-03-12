Feature("blog_test");

function convertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','

            line += array[i][index];
        }

        str += line + '\r\n';
    }

    return str;
}

function exportCSVFile(headers, items, fileTitle) {
    if (headers) {
        items.unshift(headers);
    }

    // Convert Object to JSON
    var jsonObject = JSON.stringify(items);

    var csv = this.convertToCSV(jsonObject);

    var exportedFilenmae = fileTitle + '.csv' || 'export.csv';

    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportedFilenmae);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}

  function download(title, description) {
    var headers = {
      title: "title".replace(/,/g, ""), // remove commas to avoid errors
      description: "description",
    };

    itemsNotFormatted = [
      {
        title: title,
        description: description,
      },
    ];

    var itemsFormatted = [];

    // format the data
    itemsNotFormatted.forEach((item) => {
      itemsFormatted.push({
        title: item.title.replace(/,/g, ""), // remove commas to avoid errors,
        description: item.description,
      });
    });
    var fileTitle = "orders"; // or 'my-unique-title'
    exportCSVFile(headers, itemsFormatted, fileTitle);
  }
  


Scenario("test blog", async ({ I }) => {
  I.amOnPage("/");
  const title = await I.grabTextFrom("h1");
  const description = await I.grabTextFrom("#post-details");
  console.log(title)

});
