let sectionCount=2

function addEducation(){
    sectionCount++
    let value = sectionCount

    const element = `
    <td><input type="text" id="degree-board"  name="degree-board" value="C.B.S.E"></td>
    <td><input type="text" id="school-college"  name="school-college" value="O.D.M Public School"></td>
    <td><input type="date" id="start-date"  name="start-date" value="2017-06-08"></td>
    <td><input type="month" id="passout-year"  name="passout-year" value="2019-05"></td>
    <td><input type="number" id="percentage" name="percentage" value="76.2"></td>
    <td><input type="number" id="backlog" name="backlog" value="0"></td>
    <td><button type="button" class="btn-common" onclick="removeEducation(this)"><i class="fa-regular fa-square-minus fa-xl" style="color: #535c91;"></i></button></td>
    `   
    let newRow = document.createElement('tr')
    newRow.id = "education-"+value
    newRow.innerHTML = element
    document.getElementById('tbody').appendChild(newRow)
    // console.log(newRow)
}

function removeEducation(button){
    let parentElement = button.parentNode.parentNode;

    if(parentElement){
        parentElement.parentNode.removeChild(parentElement)
    }
}

// json 



function getEducationData(){

    let firstName = document.getElementById('fname').value
    let lastName = document.getElementById('lname').value
    let dob = document.getElementById('dob').value
    let email = document.getElementById('Email').value
    let address = document.getElementById('address').value
    let graduationYear = document.getElementById('graduation-year').value
    
    let educationInfo = []
    let tableBody= document.querySelector('#tbody')
    let allEducation = tableBody.querySelectorAll('tr')

    allEducation.forEach(child => {

        let currentEducation = {
            degree_board: child.querySelector('#degree-board').value,
            school_college: child.querySelector('#school-college').value,
            start_date: child.querySelector('#start-date').value,
            passout_year: child.querySelector('#passout-year').value,
            percentage: child.querySelector('#percentage').value,
            backlog: child.querySelector('#backlog').value
        }
        educationInfo.push(currentEducation)    
    })

    let info = {
        firstName: firstName,
        lastName: lastName,
        dob: dob,
        email: email,
        address: address,
        graduationYear: graduationYear,
        educationInfo: educationInfo
    }

    const jsonData = JSON.stringify(info);
    console.log(jsonData);

    localStorage.setItem('user', jsonData);
}


function clearForm(){
    document.getElementById('form').reset();
}


function validate(){
    let firstName = document.getElementById('fname').value
    let dob = document.getElementById('dob').value
    let email = document.getElementById('Email').value
    let address = document.getElementById('address').value
    let graduationYear = document.getElementById('graduation-year').value

    let fnameError = document.getElementById('fnameError')
    let dobError = document.getElementById('dobError')
    let emailError = document.getElementById('emailError')
    let addressError = document.getElementById('addressError')
    let graduationError = document.getElementById('graduationError')
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let givenDob = new Date(dob);
    let current = new Date()

    if(firstName.trim()==''){
        fnameError.innerHTML="First name is required!"
        return false;
    }

    let yearDiff = current.getFullYear()- givenDob.getFullYear() 

    if(dob=="" || yearDiff<18){
        dobError.innerHTML="Minimum age requirement is 18!";
        return false;
    }

    if(!emailRegex.test(email)){
        emailError.innerHTML="Invalid email address!";
        return false;
    }

    if(address.trim()==''){
        addressError.innerHTML="Address is required!"
        return false;
    }
    

    let gradYear = new Date(graduationYear).getFullYear()

    if(graduationYear=="" || gradYear>=current.getFullYear()){
        graduationError.innerHTML="Invalid graduation year";
        return false;
    }

    alert('form submitted successfully!')
    return true
}


