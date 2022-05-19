let  params =(new URL(document.location)).searchParams;
let name=params.get('dataId')
console.log(params);

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((resp) => resp.json())
  .then((datas) => {
    let container = document.querySelector(".conatiner");
    let row = document.createElement("div");
    row.className = "row justify-content-between w-100 ms-2 text-center";

    for (let i = 0; i < datas.length - 4900; i++) {
      let card = document.createElement("div");
      let img = document.createElement("img");
      let img1 = document.createElement("img");
      let card_body = document.createElement("div");
      let h4 = document.createElement("h4");
      let p = document.createElement("p");
      var a = document.createElement("a");


      var linkText = document.createTextNode("Info");
      a.appendChild(linkText);
      a.title = "Info";
      a.href = `details.html?dataId=${datas[i].id}`;
     

      card.className = "card w-50";
      card_body.className = "card_body";
      h4.className = "card-title mt-2";
      p.className = "card-text";

      img.className = "img";
      p.className = "p";
      a.className = "a";

      img.src = datas[i].url;
      img1.src = datas[i].thumbnailUrl;
      p.innerText = datas[i].id;
      h4.innerText = datas[i].title;

      card_body.append(p);
      card_body.appendChild(a);
      card_body.append(h4);
      card_body.append(img);
      card_body.append(img1);

      card.append(card_body);
      row.append(card);

        
      }    
    container.append(row);

  });
