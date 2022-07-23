const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// My code below 

let imageInclusion = [];

for (let i of images) {

  const image = document.createElement("img");
  image.src = i.url;
  image.alt = i.alt;
  image.width = "125";
  image.height = "83";
  image.style.display = "block"
  
  const listItem = document.createElement("li");

  listItem.style.border = "double #AFB1B8 1px"
  listItem.style.padding = "4px"
  listItem.style.boxShadow = "rgb(38, 57, 77) 0px 20px 30px -10px"
  listItem.insertAdjacentHTML("beforeend", `<h1 style="font-size: 8px;color:#757575;text-align:center;">Picture</р>`);

  listItem.appendChild(image);
  imageInclusion.push(listItem);

}

const imageList = document.querySelector(".gallery");
 
imageList.style.listStyle = "none";
imageList.style.display = "flex";
imageList.style.gap = "20px";

imageList.append(...imageInclusion);