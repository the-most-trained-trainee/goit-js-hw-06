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

for (let image of images) {
  imageInclusion.push(`<li><img src="${image.url}" alt="${image.alt}" width ="350" height="200" style="box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px"></li>`);
};

const imageList = document.querySelector(".gallery");

imageList.insertAdjacentHTML("beforeend", imageInclusion.join(""));
imageList.style.listStyle = "none";
imageList.style.display = "flex";
imageList.style.gap = "20px";