// Store user list in an array
let userList = ['Niko', 'Jay', 'Teck', 'Laxmi', 'Rev', 'Kian', 'Chon', 'Sharon'];

// Store unit list in an array
let unitList = ['KSL A1708', 'KSL A1710', 'KSL B1903'];

// Add event listener to form submit button
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form from submitting and refreshing the page
  
  // Get form values
  let user = document.querySelector('#user').value;
  let unit = document.querySelector('#unit').value;
  let issue = document.querySelector('#issue').value;
  let description = document.querySelector('#description').value;
  let priority = document.querySelector('#priority').value;
  let date = document.querySelector('#date').value;
  let status = document.querySelector('#status').value;
  
  // Validate form values
  if (!user || !unit || !issue) {
    alert('Please fill in all required fields.'); // Show error message
    return; // Stop execution
  }
  
  // Add new user to user list if not exists
  if (!userList.includes(user)) {
    userList.push(user);
  }
  
  // Add new unit to unit list if not exists
  if (!unitList.includes(unit)) {
    unitList.push(unit);
  }
  
  // Sort unit list in ascending order
  unitList.sort();
  
  // Display updated user and unit list in dropdown
  let userOptions = '';
  let unitOptions = '';
  
  userList.forEach(function(user) {
    userOptions += `<option value="${user}">${user}</option>`;
  });
  
  unitList.forEach(function(unit) {
    unitOptions += `<option value="${unit}">${unit}</option>`;
  });
  
  document.querySelector('#user').innerHTML = userOptions;
  document.querySelector('#unit').innerHTML = unitOptions;
  
  // Do something with the form data, such as sending it to a server
  console.log(`User: ${user}\nUnit Number: ${unit}\nMaintenance Issue: ${issue}\nDescription: ${description}\nPriority: ${priority}\nDate Reported: ${date}\nStatus: ${status}`);
  
  // Reset form
  document.querySelector('form').reset();
});
