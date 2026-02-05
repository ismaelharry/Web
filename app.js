const quantityInputs = document.querySelectorAll("input[type='number']");
const buttons = document.querySelectorAll(".qty-btn");

const clampQuantity = (value) => {
  if (Number.isNaN(value) || value < 1) return 1;
  return value;
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const container = button.closest(".quantity-controls") || button.closest(".cart-quantity");
    if (!container) return;
    const input = container.querySelector("input[type='number']");
    const action = button.dataset.action;
    const current = Number.parseInt(input.value, 10) || 1;
    const next = action === "increase" ? current + 1 : current - 1;
    input.value = clampQuantity(next);
  });
});

quantityInputs.forEach((input) => {
  input.addEventListener("change", (event) => {
    const value = Number.parseInt(event.target.value, 10);
    event.target.value = clampQuantity(value);
  });
});
