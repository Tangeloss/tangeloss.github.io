let totalCost = 0;

function addToMealPlan(place, dish, cost) {
    totalCost += cost;
    document.getElementById('total-cost').textContent = totalCost.toFixed(2);

    const newItem = document.createElement('li');
    newItem.textContent = `${dish} from ${place} - $${cost.toFixed(2)}`;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = function() {
        removeFromMealPlan(newItem, cost);
    };

    const addAnotherBtn = document.createElement('button');
    addAnotherBtn.textContent = 'Add Another Order';
    addAnotherBtn.onclick = function() {
        totalCost += cost;
        document.getElementById('total-cost').textContent = totalCost.toFixed(2);
    };

    newItem.appendChild(removeBtn);
    newItem.appendChild(addAnotherBtn);

    document.getElementById('meal-items').appendChild(newItem);
}

function removeFromMealPlan(item, cost) {
    totalCost -= cost;
    document.getElementById('total-cost').textContent = totalCost.toFixed(2);
    item.remove();
}

function emptyBasket() {
    totalCost = 0;
    document.getElementById('total-cost').textContent = totalCost.toFixed(2);
    document.getElementById('meal-items').innerHTML = '';
}
