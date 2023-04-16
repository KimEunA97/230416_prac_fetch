const APIKey = "asd"

async function getData() {

  const url = "asd"
  const res = await fetch(url);
  const data = await res.json();

  console.log(data);

}

getData();