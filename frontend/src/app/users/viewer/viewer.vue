<template>
  <main role="main">
    <section class="jumbotron text-center">
        <div class="container">
          <h1>Billing Management System</h1>
          <p>
            <a href="https://docs.google.com/spreadsheets/d/1HshN4AatDyksSW8gC4KVHkdzV9quyIKIVyuvYk5l_iQ/edit?usp=sharing" class="btn btn-primary my-2" target="blank" rel="noopener noreferrer">Speadsheet</a>
            <a class="btn btn-secondary my-2" v-on:click="generateTable()" >Table</a>
          </p>
          <div id="dvTable"></div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "billing-table",
  methods: {
    generateTable: function() {
      // Demo data
      const data = [{
        "status": "success",
        "message": "Found claim",
        "data": {
          "claimID": 1,
          "userID": 1,
          "datesubmitted": "2020-03-23T04:09:30.265Z",
          "product_name": "Bags",
          "amount": 300,
          "image": {
          "type": "Buffer",
          "data": []
          },
          "houseID": 1,
          "approver_userID": null,
          "status": "Pending",
          "time_updated": null,
          "createdAt": "2020-03-23T04:09:30.265Z",
          "updatedAt": "2020-03-23T04:09:30.265Z"
        }
    },
    {
        "status": "success",
        "message": "Found claim",
        "data": {
          "claimID": 1,
          "userID": 1,
          "datesubmitted": "2020-03-23T04:09:30.265Z",
          "product_name": "Bags",
          "amount": 300,
          "image": {
          "type": "Buffer",
          "data": []
          },
          "houseID": 1,
          "approver_userID": null,
          "status": "Pending",
          "time_updated": null,
          "createdAt": "2020-03-23T04:09:30.265Z",
          "updatedAt": "2020-03-23T04:09:30.265Z"
        }
    }];
    //Build an array containing Customer records.
    var customers = new Array();
    customers.push(["Customer Name", "product_name", "amount", "Date"]);
    data.forEach((item, index)=>{
      const pref = data[index].data;
      customers.push(
        [pref.userID,
        pref.product_name,
        pref.amount,
        new Date(pref.updatedAt).toLocaleDateString("ja-JP")
        ]);
    });

    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTable = document.getElementById("dvTable");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
}
  },
};
</script>

<style lang="scss" scoped>
</style>
