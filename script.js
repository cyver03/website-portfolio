function setCertificateStatus(id, completed) {
  const card = document.querySelector(`[data-cert="${id}"]`);
  if (!card) return;
  card.classList.toggle("completed", completed);
  const label = card.querySelector(".cert-status span");
  if (label) label.textContent = completed ? "Completed" : "Planned";
}
