<template>
  <base-layout>
      <template #header-content>
        <div>
            <ion-grid>
              <ion-row>
                <ion-col class="title">
                  <img class="homeCrown" src="../theme/crown.png" alt="crown">
                  <ion-label class="homePoints mulish">0 Points</ion-label>
                  <ion-icon :src="chevForOutSvg"></ion-icon>
                </ion-col>
                <ion-col class = "profile-position" size="auto">
                  <img class="homeProfilePicture" src="../../resources/ProfilePicture.jpg" alt="My Photo" />
                </ion-col>
              </ion-row>
            </ion-grid>
          </div>
      </template>
  </base-layout>
  <!-- <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="danger"><span><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="2em" viewBox="0 0 21 20" class="sc-ion-buttons-md"><path fill="none" stroke="crimson" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.1" d="M5 15h14M5 9h14" class="sc-ion-buttons-md"></path></svg></span></ion-menu-button>
        </ion-buttons>
        <ion-title >
          <div >
            <ion-grid>
              <ion-row>
                <ion-col class="title">
                  <img class="homeCrown" src="../theme/crown.png" alt="crown">
                  <ion-label class="homePoints mulish">0 Points</ion-label>
                  <ion-icon :src="chevForOutSvg"></ion-icon>
                </ion-col>
                <ion-col class = "profile-position" size="auto">
                  <img class="homeProfilePicture" src="../../resources/ProfilePicture.jpg" alt="My Photo" />
                </ion-col>
              </ion-row>
            </ion-grid>
          </div>
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div id="container">
        <strong class="capitalize">{{ $route.params.id }}</strong>
        <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      </div>
    </ion-content>
  </ion-page> -->
</template>

<script setup>
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

const chevForOut = '<svg xmlns="http://www.w3.org/2000/svg" width="0.5em" height="0.5em" viewBox="-2 -1 13 14" class="s-ion-icon"><path fill="crimson" d="M4.47 2.22a.75.75 0 0 0 0 1.06L7.19 6L4.47 8.72a.75.75 0 0 0 1.06 1.06l3.25-3.25a.75.75 0 0 0 0-1.06L5.53 2.22a.75.75 0 0 0-1.06 0"></path></svg>'

function encodeChevForOut(chevForOut){
  const encodeData = btoa(chevForOut);
  return `data:image/svg+xml;base64,${encodeData}`;
}

const chevForOutSvg = encodeChevForOut(chevForOut);

</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
.title{
  display:flex;
  align-items:center;
}
.homeCrown{
  margin-right: 20px;
  margin-left: 18px !important; 
  height: 25px;
  width: 25px;
}
.profile-position{
  display:flex;
  justify-content:end;
}
.homeProfilePicture{
  height: 4.5vh;
  width: 4.5vh;
  border-radius: 50%;
}
.homePoints{
  font-size:15px;
  color: rgb(10, 10, 10);
    padding-right: 5px;
}
</style>
