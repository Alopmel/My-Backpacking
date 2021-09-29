let commentsContainer = document.getElementById('containerText')
let user = document.getElementById('nameUser')
let comment = document.getElementById('textComment')
let button = document.getElementById('buttonSend')


let listUserComment = [
  {
    user: 'Thomas',
    comment: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.'
  },
  {
    user: 'George',
    comment: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.'
  },
  {
    user: 'Anne',
    comment: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.'
  },
];


const newArray = (array) => {
    let arraycomment = '';
    array.forEach(element => arraycomment += `
        <br>
        <h4>${element.user} said:</h4></br>
        <p>${element.comment}</p>
        <hr>
        <br>
      `
    )
    return arraycomment;
  }
  
  button.addEventListener('click', () => {
    let userValue = user.value
    let commentValue = comment.value
  
    let newComment = {
      user: userValue,
      comment: commentValue
    }
  
    listUserComment.push(newComment);
  
    user.value = ''
    comment.value = ''
  
    commentsContainer.innerHTML = newArray(listUserComment)
  
  })
  
  
  
  commentsContainer.innerHTML = newArray(listUserComment)