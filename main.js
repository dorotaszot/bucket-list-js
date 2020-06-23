'use strict';

class Place {
  constructor(place, country, when) {
    this.place = place,
      this.country = country,
      this.when = when
  }
}

class UI {
  constructor() {

  }
  addDestination(destination) {
    // this.destination = destination;
    // console.log(destination);
    const list = document.querySelector('.results-table');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${destination.place}</td>
      <td>${destination.country}</td>
      <td>${destination.when}</td>
      <td><a><i class="fas fa-trash-alt"></i></a></td>
      <td><form><input type="checkbox" id="done-checkbox">done</form></td>
    `;
    list.appendChild(row);
  }

  clearFields() {
    document.getElementById('place').value = '';
    document.getElementById('country').value = '';
    document.getElementById('when').value = '';
  }
}

document.querySelector('.main-form').addEventListener('submit', addPlace);

function addPlace(e) {
  const place = document.getElementById('place').value,
    country = document.getElementById('country').value,
    when = document.getElementById('when').value

  // console.log(place, country, when);
  const destination = new Place(place, country, when);
  const ui = new UI();
  ui.addDestination(destination);
  ui.clearFields();
  e.preventDefault();
}


