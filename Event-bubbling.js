// EVENT BUBBLING

// document.querySelector('.card-title').addEventListener('click', function(){
//     console.log('Card Title');
// });


// document.querySelector('.card-content').addEventListener('click', function(){
//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//     console.log('col');
// });

// document.querySelector('.row').addEventListener('click', function(){
//     console.log('row');
// });

// document.querySelector('.container').addEventListener('click', function(){
//     console.log('container');
// });

// END OF EVENT BUBBLING






// EVENT DELEGATION

document.body.addEventListener('click', deleteItem);

function deleteItem(e){
//    if(e.target.className === 'fa fa-remove'){
//        console.log(e.target);
//    };

// BEST WAY IS TO TARGET THE LINK WITH THE CLASSNAME USING CLASSLIST

if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');
e.target.parentElement.parentElement.remove();
    e.preventdefault;
}
};



// END OF EVENT DELEGATION