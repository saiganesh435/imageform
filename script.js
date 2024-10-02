document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const gender=document.getElementById('gender').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const state=document.getElementById('state').value;
    const district=document.getElementById('district').value;
    const image = document.getElementById('image').files[0];
    
    const reader = new FileReader();
    reader.onload = function(e) {
      const imageData = e.target.result;
      
      const userData = {
        name: name,
        gender: gender,
        email: email,
        mobile: mobile,
        state:state,
        district:district,
        image: imageData
      };
      
      let users = JSON.parse(localStorage.getItem('users')) || [];
      users.push(userData);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Data saved successfully!');
      
      // Refresh the page after data is saved
      location.reload();
      // window.location.href = "showdetails.html";
    };
    
    reader.readAsDataURL(image);
  });
