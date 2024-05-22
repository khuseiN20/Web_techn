// const validateEmail = (email) => {
//     return email.match(
//       /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
//   };

//   let userList = [
//     {email: 'test@mail.ru', pass: '1234'},
//     {email: 'mymail@mail.ru', pass: 'qwerty'}
// ];

// function auth() {
//     let email = document.getElementById('exampleInputEmail1').value;
//     let pass = document.getElementById('exampleInputPassword1').value;
//     let infoText = document.getElementById('exampleCheck1');

//     if (!email || !pass) {
//         infoText.innerHTML = 'Пожалуйста, заполните все поля!';
//         return null;
//     }

//     if (!validateEmail(email)) {
//         infoText.innerHTML = 'Некорректный адрес почты!';
//         return null;
//     }
//     let is_found = false;
//     userList.forEach((user) => {
//         if (user.email == email && user.pass == pass) {
//             is_found = true;
//         }
//     })

//     if (is_found) {
//         infoText.innerHTML = 'Вы авторизованы';
//     }
//     else {
//         infoText.innerHTML = 'Пользователь не найден!';
//     }
// };


const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  
  let userList = [
    {email: 'test@mail.ru', pass: '1234'},
    {email: 'mymail@mail.ru', pass: 'qwerty'}
  ];
  
  function auth() {
    let email = document.getElementById('exampleInputEmail1').value;
    let pass = document.getElementById('exampleInputPassword1').value;
    let infoText = document.getElementById('exampleCheck1');
  
    if (!email || !pass) {
        infoText.innerHTML = 'Пожалуйста, заполните все поля!';
        return null;
    }
  
    if (!validateEmail(email)) {
        infoText.innerHTML = 'Некорректный адрес почты!';
        return null;
    }
    let is_found = false;
    userList.forEach((user) => {
        if (user.email == email && user.pass == pass) {
            is_found = true;
        }
    })
  
    if (is_found) {
        infoText.innerHTML = 'Вы авторизованы';
    }
    else {
        infoText.innerHTML = 'Пользователь не найден!';
    }
  };
  
  function ModalWindow() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button style={LoginButton} variant="primary" onClick={handleShow}>
          Log In
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Авторизация</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Адрес электронной почты</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
              <div id="emailHelp" className="form-text">Адрес электронной почты</div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1"></input>
            </div>
            <div className="mb-3 form-check text-center">
              <label className="form-check-label" id="exampleCheck1"></label>
            </div>
          </Modal.Body>
          <Modal.Footer style={Card}>
            <Button style={LoginButton} variant="secondary" onClick={handleClose}>
              Закрыть
            </Button>
            <Button style={LoginButton} variant="primary" onClick={auth}>
              Войти
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  


let assort = ["Asus Zenbook Pro Duo 15 OLED", "HyperPC CYBER", "Razer Naga Pro", "Logitech G PRO X","Dark Project HS-2","Dark Project KD87A","Logitech G815"];

function findAlbum(e) {
    let text = e.value;
    let result = document.getElementById('result');
    result.innerHTML = "";
    
    let foundElems = assort.filter(x => x.toLowerCase().indexOf(text.toLowerCase()) == 0)

    for (let elem of foundElems) {
        let link = document.createElement('a');
        link.className = "d-block";
        link.innerText = elem;
        link.href = "#";
        
        result.appendChild(link);
    }
};

let sum = 0;
const classNameInCart = "in-cart";

function sumAlbums(item) {
    let allsum = document.getElementById('sum');
    let card = item.parentNode;
    let cardSum = parseInt(card.getElementsByClassName('num')[0].innerHTML);

    if (item.classList.contains(classNameInCart)) {
        item.classList.remove(classNameInCart);
        item.innerHTML = 'В корзину';
        sum -= cardSum;

    }
    else {
        item.classList.add(classNameInCart);
        item.innerHTML = 'Убрать';
        sum += cardSum;
    }
    allsum.innerHTML = sum;
}
