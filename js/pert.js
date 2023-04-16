function show() {
  let local_storage_count = localStorage.length;
  let keys = [];

  for (var i = 0; i < local_storage_count; i++) {
    keys.push(localStorage.key(i));
  }

  let keys_count = keys.length;
  inner_value_table(keys, keys_count);
}

function delete_item(key) {
  localStorage.removeItem(key);
}

function inner_value_table(keys, count) {
  var table = document.getElementById("pert_table_values");
  var elements = "";

  var description = "<tr> <th>Descrição da atividade</th>" +
    "<th>Otimista</th><th>Nominal</th><th>Pessimista</th>"+
    "<th>Resultado</th><th>Excluir</th> </tr>";

  for (var j = 0; j < count; j++) {
    var values = localStorage.getItem(keys[j]).split(",");

    elements = elements + `<tr> <td> ${values[0]} </td> <td> ${values[1]} </td>` +
      `<td> ${values[2]} </td> <td> ${values[3]} </td>` +
      `<td> ${values[4]} </td> <td> <form id="form-table"> <button id="trash"` +
      `onClick=delete_item('${keys[j].replaceAll(" ","")}')> <i class="ph ph-trash"></i>` +
      `</button> </form> </td> </tr>`;
  }

  table.innerHTML = description + elements;
}

show();
