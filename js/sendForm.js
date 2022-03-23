const form = document.querySelector(".form-test-drive");

form.addEventListener("submit", (Event) => {
  Event.preventDefault();

  let data = {};

  for (let { name, value } of form.elements) {
    if (name) {
      data[name] = value;
    }
  }

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data)
  })
    .then((Response) => {
      if (Response.status === 200 || Response.status === 201) {
        return Response.json();
      } else {
        throw new Error(Response.status);
      }
    })
    .then((data) => {
      alert('Данные успешно отправлены')
      form.reset ()
    })
    .catch((error) => {
      alert("Произошла ошибка, статус " + error.message);
    })
})
