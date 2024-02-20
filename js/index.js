let sectionCount=2



function addEducation(){
    sectionCount++
    let value = sectionCount

    const element = `
    <td><input type="text" id="degree-board-${value}"  name="degree-board" value="C.B.S.E"></td>
    <td><input type="text" id="school-college-${value}"  name="school-college" value="O.D.M Public School"></td>
    <td><input type="date" id="start-date-${value}"  name="start-date" value="2017-06-08"></td>
    <td><input type="month" id="passout-year-${value}"  name="passout-year" value="2019-05"></td>
    <td><input type="number" id="percentage-${value}" name="percentage" value="76.2"></td>
    <td><input type="number" id="backlog-${value}" name="backlog" value="0"></td>
    <td><button type="button" class="btn-common" onclick="removeEducation(this)"><i class="fa-regular fa-square-minus fa-xl" style="color: #535c91;"></i></button><td>
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

let firstName = document.getElementById('fname')
let lastName = document.getElementById('lname')
let dob = document.getElementById('dob')
let email = document.getElementById('Email')
let address = document.getElementById('address')
let graduationYear = document.getElementById('graduation-year')

// console.log(document.querySelectorAll('tr'))

let educationInfo = []
function getEducationData(){
    let allEducation = document.querySelectorAll('tr')
    // allEducation.forEach(child => {
    //     console.log( child.querySelector('#degree-board').value)
    //     let currentEducation = {
    //         degree_board: child.querySelector('#degree-board').value,
    //         school_college: child.querySelector('#school-college').value,
    //         start_date: child.querySelector('#start-date').value,
    //         passout_year: child.querySelector('#passout-year').value,
    //         percentage: child.querySelector('#percentage').value,
    //         backlog: child.querySelector('#backlog').value
    //     }
    //     educationInfo.push(currentEducation)    
    // })

    for(let i=1; i<=sectionCount; i++){
        let currentEducation = {
            degree_board_: document.getElementById(`degree-board-${i}`),
            school_college: document.querySelector(`#school-college-${i}`).value,
            start_date: document.querySelector(`#start-date-${i}`).value,
            passout_year: document.querySelector(`#passout-year-${i}`).value,
            percentage: document.querySelector(`#percentage-${i}`).value,
            backlog: document.querySelector(`#backlog-${i}`).value
        }
        educationInfo.push(currentEducation)    
    }

    let info = {
        firstName: firstName.value,
        lastName: lastName.value,
        dob: dob.value,
        email: email.value,
        address: address.value,
        graduationYear: graduationYear.value,
        educationInfo: educationInfo
    }

    const jsonData = JSON.stringify(info)
    console.log(jsonData)
    
}





