


const product_array = [
    {
        product_name: "shirt",
        image: "https://images.pexels.com/photos/4210866/pexels-photo-4210866.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    },
    {
        product_name: "pant",
        image: "https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?cs=srgb&dl=pexels-monstera-5384423.jpg&fm=jpg"
    },
    {
        product_name: "t-shirt",
        image: "https://images.pexels.com/photos/6551145/pexels-photo-6551145.jpeg?cs=srgb&dl=pexels-andres-ayrton-6551145.jpg&fm=jpg"
    },
    {
        product_name: "half pant",
        image: "https://images.pexels.com/photos/6311599/pexels-photo-6311599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        product_name: "Kamiz",
        image: "https://images.pexels.com/photos/7475129/pexels-photo-7475129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        product_name: "jeanse",
        image: "https://images.pexels.com/photos/6501787/pexels-photo-6501787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        product_name: "half pant",
        image: "https://images.pexels.com/photos/6501792/pexels-photo-6501792.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        product_name: "Kamiz",
        image: "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        product_name: "jeanse",
        image: "https://images.pexels.com/photos/6776719/pexels-photo-6776719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        product_name: "half pant",
        image: "https://images.pexels.com/photos/6311599/pexels-photo-6311599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        product_name: "Kamiz",
        image: "https://images.pexels.com/photos/7475129/pexels-photo-7475129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        product_name: "jeanse",
        image: "https://images.pexels.com/photos/6501787/pexels-photo-6501787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        product_name: "half pant",
        image: "https://images.pexels.com/photos/6501792/pexels-photo-6501792.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        product_name: "Kamiz",
        image: "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },

]


let root = document.getElementById('products') //geting root

product_array.map((item, index) => {

    let childDiv = document.createElement('div');
    childDiv.classList.add("card"); //adding class
    childDiv.classList.add("items"); //adding class
    childDiv.classList.add("shadow"); //adding class
    childDiv.classList.add("p-3"); //adding class
    childDiv.classList.add("m-2"); //adding class


    let img = document.createElement('img'); //creating img
    let p = document.createElement('p'); //creating h5

    img.src = item.image
    p.innerHTML = item.product_name

    childDiv.appendChild(img);
    childDiv.appendChild(p);
    root.appendChild(childDiv);

    childDiv.addEventListener("click", function () {
        addToCart(index);
    });

})

let cart_root = document.getElementById('card_body') //geting card-body



const addToCart = (index) => {


    let parent_div = document.createElement('div')
    parent_div.classList.add("parent_div");
    parent_div.classList.add("row");
    parent_div.classList.add("card");
    parent_div.classList.add("my-3");
    parent_div.setAttribute("id", index);

    let left_row = document.createElement('div')
    left_row.classList.add("col-2");

    let middle_row = document.createElement('div')
    middle_row.classList.add("col-6");

    let right_row = document.createElement('div')
    right_row.classList.add("col-2");

    let img = document.createElement('img'); //creating img
    let p = document.createElement('p');
    let button = document.createElement('button');
    button.classList.add("btn");
    button.classList.add("btn-dark");
    button.setAttribute("data-id", index);


    img.src = product_array[index].image;
    p.innerHTML = product_array[index].product_name;
    button.innerText = 'Delete';

    left_row.appendChild(img);
    middle_row.appendChild(p);
    right_row.appendChild(button);

    parent_div.appendChild(left_row)
    parent_div.appendChild(middle_row)
    parent_div.appendChild(right_row)


    cart_root.appendChild(parent_div);


    button.addEventListener('click', (e) => {
        document.getElementById(e.target.dataset.id).remove();
    })




}







