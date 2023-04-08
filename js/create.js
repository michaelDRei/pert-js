function create() {
  let description = document.getElementById("description").value;
  let optimistic = document.getElementById("optimistic").value;
  let nominal = document.getElementById("nominal").value;
  let pessimistic = document.getElementById("pessimistic").value;
  let time = document.getElementById("time").value;
  let estimated = calculate_pert(optimistic, nominal, pessimistic);

  if (description.length > 0 && validate_pert(optimistic, nominal, pessimistic)) {
    localStorage.setItem(description.replaceAll(" ",""),
      `${description},${optimistic},${nominal},${pessimistic},${estimated.toFixed(2)} ${time}`);

    alert("Atividade cadastrada com sucesso!");
  } else {
    alert("Todos os campos são obrigatórios e devem ter um valor igual ou superior a 1.");
  }
}

function calculate_pert(optimistic, nominal, pessimistic) {
  let calculate_nominal = parseFloat(nominal) * 4;
  let calculate_optimistic = parseFloat(optimistic) + calculate_nominal;
  let result = (calculate_optimistic + parseFloat(pessimistic)) / 6;
  return result;
}

function validate_pert(optimistic, nominal, pessimistic) {
  let opt = parseInt(optimistic);
  let n = parseInt(nominal);
  let pes = parseInt(pessimistic);

  if (opt < 1 || n < 1 || pes < 1 || isNaN(opt) || isNaN(n) || isNaN(pes)) {
    return false;
  } else {
    return true;
  }
}
