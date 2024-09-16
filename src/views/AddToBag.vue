<template>
    <base-layout>
        <template  #content>
            <section clas="mb-5">
                <div class="row row-cols-3 mt-2 d-flex pt-2">
                <div class="col-1 p-0 ms-4 d-flex align-items-center">
                    <a href="/ordernow">
                        <button type="button" class="btn d-flex align-items-center backButton">
                        <ion-icon :src="chevBack"></ion-icon>
                    </button>
                    </a>
                </div>
                <slot name="header-content"/>
                <div class="col-7 ms-1 d-flex align-items-center">
                    <ion-label class="our-foods mulish">Meat</ion-label>
                </div>
                <div class="col-2 d-flex align-items-center justify-content-end ms-4">
                    <span class="bag"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 5 256 256"><path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-88 96a48.05 48.05 0 0 1-48-48a8 8 0 0 1 16 0a32 32 0 0 0 64 0a8 8 0 0 1 16 0a48.05 48.05 0 0 1-48 48"></path></svg></span>
                </div>
            </div>
            </section>
            <section class="pt-3">
                <div class="cardwithLike">
                    <div class="card mx-3 picture">
                        <img class="productImage" src="../../resources/steakveggiefries.png" alt="">
                    </div>
                    <div class = "b">
                        <button class="btn btn-danger d-flex align-items-center heartButton p-0">
                            <ion-icon style class="hearticon" :src="heart"></ion-icon>
                        </button>
                    </div>
                </div>
            </section>
            <section>
                <div class="m-3">
                    <p class=" title mulish">Steak Fries Veggies</p>
                    <div class="star-rating">
                        <ion-icon :src="fullStar"></ion-icon>
                        <ion-icon :src="fullStar"></ion-icon>
                        <ion-icon :src="fullStar"></ion-icon>
                        <ion-icon :src="fullStar"></ion-icon>
                        <ion-icon class = "star" :src="halfStar"></ion-icon>
                    </div>
                    <p class="description mt-3">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumusan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.</p>
                    <div class="row row-cols-4 gx-1 my-4 container-fluid">
                        <div class="col-8 p-0 d-flex align-items-center ">
                            <div>
                                <p class = "price1 m-0 mulish text-center">P 172</p>
                            </div>
                        </div>
                        <div class="col-1 d-flex align-items-center justify-content-center">
                            <button class="btn btn-secondary iterationbuttons d-flex align-items-center justify-content-center">
                                <ion-icon :src = "removeProduct"></ion-icon>
                            </button>
                        </div>
                        <div class="col-1 p-0 d-flex align-items-center justify-content-center mx-2">
                            <p class="m-0 mt-1">1</p>
                        </div>
                        <div class="col-1 p-0 d-flex align-items-center justify-content-center ">
                            <button class="btn btn-secondary iterationbuttons d-flex align-items-center justify-content-center ">
                                <ion-icon :src = "addProduct"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
                <section>
                    <div class="beverages">
                        <p class="our-foods mulish">Beverages</p>
                        <div class="card-container">
                            <div class="card my-3">
                                <div class="card-body">
                                    <p class="m-0 mulish label beverageSelect">Choose Beverages</p>   
                                <div class="card-content">
                                    <div class="row row-cols-2 container-fluid">
                                        <div class="col-10 p-0">
                                            <p class="m-0 beverageTitle ">Coke</p>
                                        </div>
                                        <div class="col-2 p-0 d-flex justify-content-end align-items-center chevDown" >
                                            <ion-icon :src="chevronDown"></ion-icon>
                                        </div>
                                    </div>
                               </div>
                                </div>
                            </div>
                        </div>
                        <div class="container-fluid p-0">
                            <div class="row row-cols-3 d-flex justify-content-between px-2">
                                <div class="col-4 p-1">
                                    <button class="btn custom-beverage-buttons warning w-100 mulish py-3">Regular</button>
                                </div>
                                <div class="col-4 p-1 ">
                                    <button class="btn custom-beverage-buttons white w-100 mulish py-3" >Large</button>
                                </div>
                                <div class="col-4 p-1">
                                    <button class="btn custom-beverage-buttons white w-100 mulish py-3">X-Large</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="addons mt-3">
                        <p class="our-foods mulish">Add-Ons</p>
                    </div>
                    <div class="card-container mx-3 mb-2">
                        <div class="card">
                                <div class="container-fluid">
                                    <div class="row row-cols-3 my-3">
                                <div class="col-3 m-0 p-0">
                                    <div class="container-fluid d-flex align-items-center p-0 m-0">
                                        <img class=" img-fluid" src="../../resources/sauce.png" alt="">
                                    </div>
                                </div>
                                <div class="col-4 p-0 m-0">
                                    <p class="m-0 mulish label w-100">Tomato Sauce</p>
                                    <p class="m-0 label2 mb-2">Sauce</p>
                                    <p class = "price2 m-0 mulish">P 49</p>
                                </div>
                                <div class="col-5 p-0">
                                    <div class="container-fluid mb-2">
                                        <div class="wrapper d-flex justify-content-end me-1">
                                            <input type="checkbox" class="checkbox" id="check">
                                            <label for="check" class="check"></label>
                                        </div>
                                    </div>
                                    <div class="container-fluid my-2 mt-3">
                                        <div class="row row-cols-3 d-flex align-items-center ms-1">
                                            <div class="col-4 p-0 d-flex align-items-center justify-content-center ">
                                                <div class="container-fluid d-flex justify-content-center">
                                                    <button class="btn btn-secondary iterationbuttons d-flex align-items-center justify-content-center">
                                                        <ion-icon :src = "removeProduct"></ion-icon>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="col-4 p-0 d-flex align-items-center justify-content-center w-auto">
                                            <div class="container-fluid d-flex justify-content-center">
                                                <p class="m-0 mt-1 w-100">1</p>
                                            </div>
                                            </div>
                                            <div class="col-4 p-0 d-flex align-items-center justify-content-center ">
                                                <div class="container-fluid d-flex justify-content-center">
                                                    <button class="btn btn-secondary iterationbuttons d-flex align-items-center justify-content-center ">
                                                        <ion-icon :src = "addProduct"></ion-icon>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-container mx-3 mb-5">
                        <div class="card">
                                <div class="container-fluid">
                                    <div class="row row-cols-3 my-3">
                                <div class="col-3 m-0 p-0">
                                    <div class="container-fluid d-flex align-items-center p-0 m-0">
                                        <img class=" img-fluid" src="../../resources/rice.png" alt="">
                                    </div>
                                </div>
                                <div class="col-4 p-0 m-0">
                                    <p class="m-0 mulish label w-100">White Rice</p>
                                    <p class="m-0 label2 mb-2">Rice</p>
                                    <p class = "price2 m-0 mulish">P 25</p>
                                </div>
                                <div class="col-5 p-0">
                                    <div class="container-fluid mb-2">
                                        <div class="wrapper d-flex justify-content-end me-1">
                                            <input type="checkbox" class="checkbox" id="check">
                                            <label for="check" class="check"></label>
                                        </div>
                                    </div>
                                    <div class="container-fluid my-2 mt-3">
                                        <div class="row row-cols-3 d-flex align-items-center ms-1">
                                            <div class="col-4 p-0 d-flex align-items-center justify-content-center ">
                                                <div class="container-fluid d-flex justify-content-center">
                                                    <button class="btn btn-secondary iterationbuttons d-flex align-items-center justify-content-center">
                                                        <ion-icon :src = "removeProduct"></ion-icon>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="col-4 p-0 d-flex align-items-center justify-content-center w-auto">
                                            <div class="container-fluid d-flex justify-content-center">
                                                <p class="m-0 mt-1 w-100">1</p>
                                            </div>
                                            </div>
                                            <div class="col-4 p-0 d-flex align-items-center justify-content-center ">
                                                <div class="container-fluid d-flex justify-content-center">
                                                    <button class="btn btn-secondary iterationbuttons d-flex align-items-center justify-content-center ">
                                                        <ion-icon :src = "addProduct"></ion-icon>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
           </section>
           <div class="section">
            <div class="container-fill">
            </div>
           </div>
           <ion-fab slot="fixed" vertical="bottom" horizontal="center">
                <ion-button class="mx-2 my-2 custon-float-button" id="open-custom-dialog">
                  <div class="px-3 py-3 custom-text-size">Add to Bag</div>
                </ion-button>
            </ion-fab>
            <ion-modal id="example-modal" ref="modal" trigger="open-custom-dialog" expand="block">
                <div class="wrapper">
                    <div class="container-fluid">
                        <div class="container d-flex justify-content-center mt-3">
                            <img src="../../resources/like.png" alt="" class="img-fluid like">
                        </div>
                        <p class="confirmation text-center mt-2 mb-1 mulish">Successfully Added!</p>
                        <p class="desicion text-center description ">What do you want to do now?</p>
                        <div class="container d-flex justify-content-center">
                            <button class="btn btn-danger checkoutButton" @click="$router.push('/checkOut') && dismiss()">Proceed to Checkout
                            </button>
                        </div>
                        <div class="container-addmore text-center">
                            <a class="mulish" href="/ordernow">Add More</a>
                        </div>
                    </div>
                </div>
            </ion-modal>
        </template>
    </base-layout>
</template>
<script setup>
import {IonCard, IonImg, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonSearchbar, IonCol, IonGrid, IonRow,  IonFab, IonFabButton, IonIcon, IonRadio, IonRadioGroup,IonModal} from '@ionic/vue';
import { ref } from 'vue';

const buttons = [
  { text: 'All' },
  { text: 'Breakfast' },
  { text: 'Chicken' },
  { text: 'Seafood' }
];

const modal = ref();

const dismiss = () => modal.value.$el.dismiss();

import {
chevronDownOutline,
chevronBackOutline,
checkmark,
heartOutline,
add,
remove,
} from "ionicons/icons";

const check = checkmark;

const addProduct = add;

const chevronDown = chevronDownOutline;

const removeProduct = remove;

const heart = heartOutline;

const chevBack = chevronBackOutline;

const activeButton = ref(buttons[0]);

function activateButton(button) {
  activeButton.value = button;
}

const fullStarSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#ffbf2a" stroke="#ffbf2a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.587 8.236l2.598-5.232a.911.911 0 0 1 1.63 0l2.598 5.232l5.808.844a.902.902 0 0 1 .503 1.542l-4.202 4.07l.992 5.75c.127.738-.653 1.3-1.32.952L12 18.678l-5.195 2.716c-.666.349-1.446-.214-1.319-.953l.992-5.75l-4.202-4.07a.902.902 0 0 1 .503-1.54z"/></svg>';

function encodefullStarSvg(fullStarSvg){
  const encodeData = btoa(fullStarSvg);
  return `data:image/svg+xml;base64,${encodeData}`;
}

const fullStar = encodefullStarSvg(fullStarSvg);

const halfStarSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 19"><path fill="currentColor" d="M21.951 9.67a1 1 0 0 0-.807-.68l-5.699-.828l-2.548-5.164A.98.98 0 0 0 12 2.486v16.28l5.097 2.679a1 1 0 0 0 1.451-1.054l-.973-5.676l4.123-4.02a1 1 0 0 0 .253-1.025" opacity="0.5"/><path fill="currentColor" d="M11.103 2.998L8.555 8.162l-5.699.828a1 1 0 0 0-.554 1.706l4.123 4.019l-.973 5.676a1 1 0 0 0 1.45 1.054L12 18.765V2.503a1.03 1.03 0 0 0-.897.495"/></svg>';

function encodeHalfStarSvg(halfStarSvg){
  const encodeData = btoa(halfStarSvg);
  return `data:image/svg+xml;base64,${encodeData}`;
}

const halfStar = encodeHalfStarSvg(halfStarSvg);
</script>
<style>

    .container-addmore{
        margin-top: 22px;
        font-size: 15px;
        text-decoration: none;
    }
    .container-addmore a{
        color:#D61921;;
        text-decoration: none;
    }
    .checkoutButton{
        padding: 10px 30px;
        border-radius: 18px;
        font-size: 15px
    }
    .our-foods{
        font-size: 25px;
    }
    .bag{
        fill: #D61921;
    }
    .backButton{
        font-size: 20px;
        color:rgb(78, 77, 77);
        border-radius: 15px;
        background-color:rgb(197, 197, 197);
        padding: 8px 8px;
        box-shadow: 1px 2px 6px rgb(224, 224, 224);
    } 
    .heartButton{
        border-radius:20px;
    }
    .picture{
        position: relative;
    }
    .picture img{
        height: 229px;
    }
    .b{
        display: flex;
        justify-content: center;
    }
    .heartButton{
        position: absolute;
        left: 50%;
        transform: translate(233%, 452%);
        background-color:white;
        box-shadow: 1px 2px 6px rgb(224, 224, 224);
        --bs-btn-border-color: white;
    }
    .heartButton .hearticon{
        padding: 12px;
        color: #D61921;
        --ionicon-stroke-width: 50px;
        font-size: 20px;
    }
    .cardwithLike{
        display: flex;
        justify-content: center;
    }
    .star{
        color: #ffbf2a;
        font-size: 19px;
    }
    .title{
        font-size: 15px;
    }
    .price1{
        font-size: 25px;
        color: #D61921;
    }
    .iterationbuttons{
        padding: 6px 6px;
        border-radius: 10px;
        background-color: rgb(197, 197, 197);
        --bs-btn-border-color: rgb(197, 197, 197);
    }
    .iterationbuttons ion-icon{
        color: #D61921;
        --ionicon-stroke-width: 70px;
        font-size: 15px;
    }
    .beverages{
        margin: 0px 15px;
    }
    .beverages .our-foods{
        font-size: 20px;
    }
    .chevDown{
        font-size: 20px;
        color: #D61921;
    }
    .beverageTitle{
        font-size: 18px;
    }
    .beverageSelect{
        font-size: 15px;
        color: rgb(180, 180, 180);
    }
    .custom-beverage-buttons{
        border-radius: 15px;
        font-size: 14px;
    }
    .warning{
        color: rgb(255, 255, 255);
        --background-color: #ffbf2a;
        background: #ffbf2a;
    }
    .custom-beverage-buttons.white{
        --bs-btn-border-color: rgb(151, 151, 151);
    }
    .addons{
        margin: 0px 15px;
    }
    .addons .our-foods{
        font-size: 20px;
    }
    .price2{
        font-size: 18px;
        color: #D61921;
    }
    .checkbox{
        appearance: none;
        -webkit-appearance: none;
        height: 20px;
        width: 20px;
        background-color: #ffffff;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-content: center;
        border-radius: 5px;        
    }

    .checkbox:after{
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        content: "\f00c";
        font-size:15px;
        color:#ffbf2a;
        display: none;
    }
    .checkbox:hover{
        background-color: #a5a5a5;
    }
    .checkbox:checked{
        background-color: white;
    }
    .checkbox:checked:after{
        display:block
    }
    .custon-float-button{
        --border-radius: 18px;
        width: 350px !important;
    }
    .container-fill{
        height: 50px;
    }
    ion-modal#example-modal {
    --width: fit-content;
    --min-width: 327px;
    --height: 305px;
    --border-radius: 15px;
    --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
  }

  ion-modal#example-modal h1 {
    margin: 20px 20px 10px 20px;
  }

  ion-modal#example-modal ion-icon {
    margin-right: 6px;

    width: 48px;
    height: 48px;

    padding: 4px 0;

    color: #aaaaaa;
  }

  ion-modal#example-modal .wrapper {
    margin-bottom: 10px;
  }
  .like{
    height: 100px;
    width: 100px;
  }
</style>