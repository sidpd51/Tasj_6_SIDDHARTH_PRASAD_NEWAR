    let currentUser = localStorage.getItem('user')
    const user = JSON.parse(currentUser)

    // console.log(user)

    const tBody = document.getElementById('table-body')
    const profileInfo = document.querySelector('.profile-info')

    profileInfo.innerHTML= `
    <p class="username">first Name  : ${user.firstName}</p>
    <p class="username">Last Name   :${user.lastName}</p>
    <p class="username">D.O.B   : ${user.dob}</p>
    <p class="username">Email   : ${user.email}</p>
    <p class="username">Address : ${user.address}</p>
    <p class="username">Graduation Year : ${user.graduationYear}</p>
    `

    tBody.innerHTML = `
    ${
      Object.keys(user.educationInfo).map(key => {
        const value = user.educationInfo[key];
        return `
          <tr>
            <td>${value.degree_board}</td>
            <td>${value.school_college}</td>
            <td>${value.start_date}</td>
            <td>${value.passout_year}</td>
            <td>${value.percentage}</td>
            <td>${value.backlog}</td>
          </tr>
        `;
      }).join('')
    }
  `;
  

function printInfo() {
    window.print()
}



