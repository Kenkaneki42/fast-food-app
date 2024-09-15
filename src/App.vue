<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-list id="inbox-list">
            <ion-grid>
              <ion-row>
                <ion-col size="auto">
                  <img class="profilePicture" src="../resources/ProfilePicture.jpg" alt="My Photo" />
                </ion-col>
                  <ion-col class="secondGrid">
                    <a class="pointsSection" href='/loyaltyPage'>
                      <img  class="crown" src="../resources/crown.png" alt="crown" >
                    <ion-label class="staticPoints mulish">0 Points</ion-label>
                    <ion-icon :src="chevForOutSvg"></ion-icon>
                  </a>
                  </ion-col>
              </ion-row>
            </ion-grid>
            <ion-list-header class="mulish" style="font-weight: 800; font-size: 25px">Chou Tzuyu</ion-list-header>
            <ion-note  class="mulish">+63 912 345 6789</ion-note>

            <ion-menu-toggle :auto-hide="false" v-for="(p, i) in appPages" :key="i">
              <ion-item 
                @click="selectedIndex = i"
                router-direction="root"
                :router-link="p.url"
                lines="none"
                :detail="false"
                class="hydrated"
                :class="{ selected: selectedIndex === i }"
              >
                <ion-icon aria-hidden="true" slot="start" :ios="p.iosIcon" :md="p.mdIcon" style="height: 20px; margin-right: 15px;"></ion-icon>
                <ion-label>{{ p.title }}</ion-label>
                <ion-badge class ="badge" slot="end">{{ p.badge }}</ion-badge>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>

          <ion-list id="labels-list">
            <ion-item v-for="(label, index) in labels" lines="none" :key="index">
              <ion-icon
                aria-hidden="true"
                slot="start"
                :ios="label.iosIcon"
                :md="label.mdIcon"
                style="height: 22px; margin-right: 15px;"
              ></ion-icon>
              <ion-label>{{ label.title }}</ion-label>
              <ion-badge class ="badge" slot="end">{{ label.badge }}</ion-badge>
            </ion-item>
          </ion-list>
        </ion-content>
        <ion-button class="logoutButton" color="danger" rounded>Logout</ion-button>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>



<script setup>

import {
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterOutlet,
  IonSplitPane,
} from "@ionic/vue";
import { ref } from "vue";
import {
  chevronForwardOutline,
  heart,
  helpCircle,
  notifications,
  person,
  storefront,
} from "ionicons/icons";

const homeSvgString = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1181.000000 1181.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.16, written by Peter Selinger 2001-2019
</metadata>
<g transform="translate(0.000000,1181.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path fill = "crimson" d="M3975 10509 c-55 -22 -174 -76 -263 -119 -1501 -728 -2333 -2272
-2086 -3870 181 -1168 948 -2196 2046 -2738 l177 -87 17 -75 c24 -109 98 -334
150 -457 92 -221 226 -448 393 -668 106 -141 408 -440 559 -554 490 -370 1036
-587 1667 -663 163 -19 616 -16 779 5 749 100 1385 399 1895 892 702 678 1022
1616 870 2548 -96 590 -369 1127 -800 1572 l-110 113 20 138 c40 274 50 527
31 784 -64 856 -422 1650 -1024 2268 l-130 133 -13 -63 c-34 -167 -172 -334
-328 -396 -20 -8 -39 -29 -54 -58 -31 -57 -117 -146 -184 -188 -194 -122 -428
-128 -633 -17 l-54 29 -20 -26 c-36 -46 -129 -119 -196 -151 -188 -92 -430
-77 -599 35 -56 37 -110 85 -142 127 l-22 28 -49 -35 c-102 -74 -218 -110
-352 -110 -98 0 -170 15 -255 54 -204 92 -335 289 -335 502 0 37 -4 68 -9 68
-5 0 -28 -7 -52 -15 -157 -56 -357 -33 -507 57 -110 67 -202 179 -244 296 -41
118 -32 297 21 401 20 38 20 39 1 77 -22 44 -50 147 -50 181 0 13 -3 23 -7 22
-5 0 -53 -18 -108 -40z m-217 -770 c141 -56 304 -179 393 -297 100 -132 149
-276 149 -436 0 -50 -18 -281 -41 -514 -23 -233 -40 -425 -38 -427 2 -2 56
-12 119 -24 63 -11 147 -28 187 -37 l72 -16 12 -56 c6 -32 13 -63 15 -71 3 -9
21 10 45 47 85 130 206 192 374 192 71 0 138 -21 200 -63 36 -25 40 -25 47
-10 3 10 7 35 7 55 1 45 0 45 161 53 63 3 141 8 173 12 l57 6 0 -39 c0 -21
-18 -230 -41 -464 -22 -234 -39 -453 -37 -487 6 -99 55 -130 128 -80 27 18 36
32 45 77 14 69 24 88 74 133 45 40 86 52 165 45 59 -5 101 -30 143 -85 22 -29
28 -49 31 -103 4 -59 1 -74 -28 -129 -61 -122 5 -178 136 -117 104 48 154 154
154 325 0 169 -49 297 -159 413 -57 61 -127 116 -135 107 -2 -2 -13 -38 -25
-79 -12 -41 -36 -119 -52 -172 l-30 -98 -60 0 c-33 0 -69 -5 -80 -10 -13 -8
-19 -7 -19 0 0 15 200 764 206 769 2 2 32 -3 66 -13 73 -20 182 -76 265 -137
136 -99 307 -303 363 -434 84 -193 55 -426 -70 -568 -109 -124 -337 -207 -567
-207 -111 0 -164 19 -270 95 -20 15 -23 14 -65 -27 -70 -67 -136 -99 -223
-105 -128 -10 -245 24 -297 85 l-25 30 -28 -35 c-34 -43 -107 -91 -152 -99
l-33 -6 40 -40 c22 -22 54 -69 72 -105 27 -55 32 -77 32 -138 1 -79 -12 -108
-68 -149 -39 -29 -133 -29 -173 0 -106 78 -96 221 20 278 l48 25 -30 15 c-38
20 -74 20 -140 0 -127 -37 -228 -210 -255 -436 l-7 -57 50 6 51 6 0 -59 c0
-32 -3 -76 -6 -96 -7 -38 -7 -38 -56 -38 -30 0 -50 -5 -53 -12 -4 -15 -21
-298 -35 -613 -25 -557 -90 -850 -226 -1031 -44 -57 -82 -92 -134 -120 -29
-16 -56 -19 -150 -19 -103 0 -121 3 -170 26 -76 36 -124 80 -156 145 -115 235
238 405 357 172 29 -58 25 -130 -11 -195 -35 -62 -37 -73 -10 -73 32 0 67 45
89 113 40 123 42 166 31 560 -6 206 -12 520 -13 696 l-2 322 -52 -7 -53 -6 0
43 c0 24 3 68 6 97 l7 52 51 0 c28 0 56 4 62 8 6 4 19 50 28 101 9 52 26 122
37 155 69 205 250 359 481 410 l27 6 -50 47 c-31 29 -63 73 -85 119 l-36 73
-41 -52 c-50 -64 -130 -141 -202 -197 -45 -35 -251 -163 -276 -172 -4 -2 -19
-54 -33 -117 -52 -230 -160 -495 -240 -588 -71 -82 -235 -172 -407 -223 -105
-31 -309 -39 -412 -16 -110 25 -191 69 -268 145 -153 152 -151 251 7 369 67
50 379 214 585 307 l107 48 12 91 c16 131 110 1130 105 1134 -11 11 -250 -111
-322 -166 l-32 -24 -55 25 c-64 30 -126 90 -155 151 -39 84 -49 249 -17 275
40 32 314 85 499 97 109 6 118 8 122 28 2 11 21 201 41 421 31 336 35 422 30
539 -10 210 -45 339 -116 419 -31 36 -35 38 -79 31 -210 -29 -400 -133 -591
-324 -194 -195 -308 -387 -372 -630 -29 -111 -35 -290 -13 -382 25 -106 80
-212 142 -276 l53 -54 -34 -52 c-79 -120 -143 -271 -181 -429 -14 -55 -26
-102 -29 -104 -2 -2 -31 33 -65 79 -113 154 -187 336 -212 525 -15 112 -5 326
20 455 75 372 298 777 590 1069 136 135 294 250 399 289 57 22 217 40 505 58
16 1 63 -12 105 -29z m3540 -861 c70 -33 125 -123 137 -228 3 -30 -1 -122 -9
-205 -22 -212 -28 -191 52 -187 l68 3 -3 -63 c-8 -136 -9 -138 -106 -138 -29
0 -49 -5 -51 -12 -8 -27 -69 -716 -68 -767 1 -30 8 -64 17 -77 33 -51 104 -39
155 26 30 38 90 156 90 177 0 16 23 22 100 24 64 2 65 2 61 -22 -5 -36 -60
-199 -82 -241 -11 -21 -19 -39 -19 -40 0 -2 44 -3 98 -4 114 -1 176 -21 279
-90 37 -25 69 -41 73 -37 4 5 23 184 43 398 40 428 39 463 -7 595 -13 39 -42
100 -65 135 -22 36 -36 67 -32 70 5 2 98 8 207 11 169 6 208 4 256 -10 141
-41 233 -167 261 -358 10 -69 5 -140 -42 -665 -29 -323 -70 -768 -92 -988 -21
-220 -39 -431 -39 -470 0 -73 21 -137 53 -163 26 -22 90 -26 123 -9 76 39 172
178 229 330 20 54 18 53 159 62 l98 6 -7 -38 c-14 -74 -86 -278 -134 -379 -62
-130 -119 -214 -196 -289 -120 -117 -215 -155 -390 -155 -182 0 -306 41 -387
128 l-45 48 -60 -66 c-106 -114 -227 -163 -413 -164 -124 -1 -190 14 -284 62
-81 42 -150 106 -204 190 l-38 60 -27 -42 c-69 -110 -145 -157 -262 -164 l-80
-5 -55 -57 c-58 -60 -125 -100 -200 -118 -163 -39 -298 -17 -408 66 -18 14
-51 53 -74 88 l-42 63 -39 -36 c-56 -51 -120 -75 -207 -81 l-74 -5 -47 -51
c-89 -98 -213 -142 -376 -133 -78 3 -103 9 -157 36 -150 73 -231 234 -243 481
-17 338 97 629 284 727 83 44 149 56 262 51 123 -6 172 -27 255 -110 73 -74
118 -157 142 -265 27 -124 12 -373 -32 -517 -6 -17 -2 -18 34 -13 50 6 93 36
122 83 20 31 22 48 21 147 -2 220 46 427 131 553 78 117 168 173 311 196 231
35 395 -69 485 -310 22 -58 25 -87 29 -217 3 -130 1 -165 -20 -265 -14 -63
-23 -116 -22 -118 2 -2 20 0 40 4 47 9 106 60 130 114 12 26 24 40 37 40 14 0
18 5 14 18 -54 184 -67 281 -68 477 -1 340 70 658 188 842 35 55 36 73 6 73
-27 0 -119 57 -140 87 -43 61 -55 136 -55 328 1 161 22 490 42 663 l8 64 -70
-4 -70 -3 2 75 c3 107 8 120 41 120 15 0 47 3 72 6 l44 6 19 207 c17 193 17
210 1 270 -9 36 -30 89 -46 120 -17 30 -28 57 -25 59 8 8 195 19 245 14 25 -2
64 -13 88 -24z m1402 -4118 c23 -43 -3 -108 -67 -167 -32 -30 -40 -29 -35 5 2
15 -1 51 -6 80 -11 59 0 90 38 109 27 13 54 4 70 -27z m387 -17 c78 -37 78
-128 0 -200 -63 -58 -118 -69 -264 -53 -62 7 -113 16 -113 21 0 4 16 16 36 25
19 9 72 57 117 105 110 119 150 138 224 102z m-782 -148 c178 -47 306 -183
351 -372 22 -94 14 -272 -16 -368 -48 -154 -182 -363 -296 -464 -179 -158
-457 -283 -850 -381 -204 -51 -631 -136 -639 -128 -12 12 15 46 61 80 91 65
223 254 324 463 58 120 80 178 186 480 133 381 243 540 446 642 116 59 309 80
433 48z m-2125 -465 c184 -23 306 -64 463 -158 194 -117 281 -145 428 -140
l101 3 -6 -26 c-10 -50 -79 -214 -144 -343 -75 -149 -174 -286 -250 -346 -69
-55 -107 -112 -122 -184 l-12 -59 -217 7 c-504 15 -1049 86 -1351 176 -64 19
-65 19 -40 0 45 -35 233 -128 350 -174 326 -127 740 -207 1220 -235 263 -16
807 2 1065 34 396 50 721 115 1050 210 177 51 462 154 513 185 60 37 116 154
82 175 -8 5 -414 -86 -691 -155 -135 -34 -461 -101 -466 -96 -2 2 34 25 80 51
268 150 482 393 584 664 32 86 63 248 63 333 0 38 2 68 5 68 3 0 32 -19 63
-42 173 -127 395 -346 616 -607 69 -82 126 -152 126 -155 0 -11 -141 -204
-229 -314 -110 -138 -412 -441 -568 -570 -516 -426 -913 -648 -1353 -756 -331
-80 -747 -75 -1096 13 -576 146 -1185 512 -1799 1081 -142 132 -315 311 -315
325 0 4 66 79 147 167 310 338 569 553 834 692 290 151 582 211 869 176z"/>
<path d="M4199 7848 c-4 -10 -95 -954 -92 -957 6 -7 137 125 212 214 144 170
214 298 231 425 6 47 20 119 31 162 10 42 19 78 19 81 0 21 -393 94 -401 75z"/>
<path d="M5043 7781 c-52 -24 -95 -87 -126 -186 -18 -58 -22 -93 -22 -210 0
-133 1 -143 28 -198 63 -127 208 -145 258 -31 28 62 45 168 58 345 10 149 5
201 -24 242 -37 52 -108 68 -172 38z"/>
<path d="M3277 6191 c-75 -80 -121 -166 -142 -266 -24 -116 -19 -165 19 -165
74 0 146 140 180 350 9 52 18 107 21 123 2 15 1 27 -4 27 -5 0 -38 -31 -74
-69z"/>
<path d="M7755 6659 c-112 -27 -198 -148 -246 -343 -40 -164 -34 -457 11 -579
43 -115 174 -194 278 -167 118 29 162 116 197 390 22 169 36 477 24 530 -16
72 -57 129 -114 158 -32 16 -106 22 -150 11z"/>
<path d="M6393 5911 c-76 -35 -136 -147 -156 -291 -17 -126 30 -294 96 -343
13 -11 46 -22 73 -25 l48 -5 -22 28 c-35 44 -63 150 -64 237 -1 152 78 246
198 236 l56 -5 -5 33 c-3 18 -15 54 -26 79 -32 73 -111 95 -198 56z"/>
<path d="M5289 5827 c-90 -60 -144 -190 -143 -342 1 -182 63 -294 171 -309
l42 -6 -25 42 c-70 123 -77 300 -13 388 39 54 81 74 152 73 52 -1 57 1 57 20
0 34 -45 123 -71 141 -36 25 -128 22 -170 -7z"/>
<path d="M8155 4246 c-27 -27 -40 -68 -55 -173 -26 -186 -134 -391 -328 -623
-44 -52 -79 -96 -77 -98 6 -6 90 41 161 89 85 59 204 180 263 268 56 82 125
229 145 307 9 34 16 94 16 133 0 63 -3 75 -25 96 -31 32 -69 32 -100 1z"/>
<path d="M4225 10481 c-3 -2 -5 -18 -5 -35 0 -28 6 -34 63 -63 35 -18 69 -33
77 -32 17 0 238 87 230 89 -17 6 -362 45 -365 41z"/>
<path d="M7482 9798 c22 -51 44 -96 50 -99 5 -3 44 -9 86 -12 75 -6 78 -6 99
20 l22 27 -145 78 c-79 43 -146 78 -148 78 -3 0 14 -42 36 -92z"/>
<path d="M4885 9679 c-38 -11 -93 -27 -122 -35 -39 -11 -51 -18 -47 -29 13
-32 307 -15 367 22 8 5 -108 64 -121 62 -4 0 -38 -10 -77 -20z"/>
<path d="M7574 9472 c-9 -14 -7 -23 12 -45 13 -16 24 -37 24 -47 0 -10 5 -31
11 -47 l11 -28 59 65 59 64 -68 28 c-80 32 -94 34 -108 10z"/>
</g>
</svg>`;
function encodeHomeSvg(homeSvgString) {
  const encodedData = btoa(homeSvgString);
  return `data:image/svg+xml;base64,${encodedData}`;
}

const home = encodeHomeSvg(homeSvgString);

//Custom Icons For Chicken Drumstick
const chickenSvgString = `<svg class="chicken-icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" transform="scale(-1, 1)">
  <path fill="default" d="M20.16 12.73A6.27 6.27 0 0 0 19.09 3c-2.01-1.33-4.7-1.34-6.73-.03c-1.76 1.13-2.73 2.89-2.9 4.71c-.13 1.32-.63 2.55-1.55 3.47l-.03.03c-1.16 1.16-1.16 2.93-.07 4.01l.99.99a2.794 2.794 0 0 0 3.95 0c.97-.97 2.25-1.5 3.64-1.65c1.37-.15 2.71-.75 3.77-1.8m-13.9 7.13c.27.56.18 1.24-.29 1.7a1.49 1.49 0 0 1-2.55-.98a1.49 1.49 0 0 1-.98-2.55c.46-.46 1.15-.56 1.7-.29l2.48-2.43c.14.19.3 .41.48.59l.99.99c.21.2.41.37.67.52z"/>
</svg>`;

function encodeChickenSvg(chickenSvgString) {
  const encodedData = btoa(chickenSvgString);
  return `data:image/svg+xml;base64,${encodedData}`;
}

const chickenDrumStick = encodeChickenSvg(chickenSvgString);

//Custom Icon For Order Tracker
const locationSvgString =
  '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path d="M16 2A11.013 11.013 0 0 0 5 13a10.9 10.9 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.9 10.9 0 0 0 27 13A11.013 11.013 0 0 0 16 2m0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"/><circle cx="16" cy="13" r="4" fill="none"/></svg>';

function encodeLocationSvg(locationSvgString) {
  const encodedData = btoa(locationSvgString);
  return `data:image/svg+xml;base64,${encodedData}`;
}

const locationSvg = encodeLocationSvg(locationSvgString);

//Custom Icon For History Icon
const historySvgString =
  '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M12 21q-3.45 0-6.012-2.287T3.05 13H5.1q.35 2.6 2.313 4.3T12 19q2.925 0 4.963-2.037T19 12t-2.037-4.962T12 5q-1.725 0-3.225.8T6.25 8H9v2H3V4h2v2.35q1.275-1.6 3.113-2.475T12 3q1.875 0 3.513.713t2.85 1.924t1.925 2.85T21 12t-.712 3.513t-1.925 2.85t-2.85 1.925T12 21m2.8-4.8L11 12.4V7h2v4.6l3.2 3.2z"/></svg>';

function encodeHistorySvg(historySvgString) {
  const encodedData = btoa(historySvgString);
  return `data:image/svg+xml;base64,${encodedData}`;
}

const historySvg = encodeHistorySvg(historySvgString);

//Custom Icon for Bag Icon
const bagSvgString ='<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-88 96a48.05 48.05 0 0 1-48-48a8 8 0 0 1 16 0a32 32 0 0 0 64 0a8 8 0 0 1 16 0a48.05 48.05 0 0 1-48 48"/></svg>';

function encodeBagSvg(bagSvgString) {
  const encodedData = btoa(bagSvgString);
  return `data:image/svg+xml;base64,${encodedData}`;
}

const bagSvg = encodeBagSvg(bagSvgString);

const chevForOut = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12"><path fill="crimson" d="M4.47 2.22a.75.75 0 0 0 0 1.06L7.19 6L4.47 8.72a.75.75 0 0 0 1.06 1.06l3.25-3.25a.75.75 0 0 0 0-1.06L5.53 2.22a.75.75 0 0 0-1.06 0"/></svg>'

function encodeChevForOut(chevForOut){
  const encodeData = btoa(chevForOut);
  return `data:image/svg+xml;base64,${encodeData}`;
}

const chevForOutSvg = encodeChevForOut(chevForOut);

const selectedIndex = ref(0);


const appPages = [
  {
    title: "Home",
    url: "/home",
    iosIcon: home,
    mdIcon: home,
  },
  {
    title: "Order Now!",
    url: "/ordernow",
    iosIcon: chickenDrumStick,
    mdIcon: chickenDrumStick,
  },
  {
    title: "Notifications",
    url: "/folder/Notifications",
    iosIcon: notifications,
    mdIcon: notifications,
    badge: '4'
  },
  {
    title: "Store Locator",
    url: "/folder/Store Location",
    iosIcon: storefront,
    mdIcon: storefront,
  },
  {
    title: "FAQ's",
    url: "/folder/FAQ's",
    iosIcon: helpCircle,
    mdIcon: helpCircle,
  },
];
const labels = [
  {
    title: "My Orders",
    iosIcon: bagSvg,
    mdIcon: bagSvg,
    badge:'2'
  },
  {
    title: "My Account",
    iosIcon: person,
    mdIcon: person,
  },
  {
    title: "My Favorites",
    iosIcon: heart,
    mdIcon: heart,
  },
  {
    title: "Order Tracker",
    iosIcon: locationSvg,
    mdIcon: locationSvg,
  },
  {
    title: "Order History",
    iosIcon: historySvg,
    mdIcon: historySvg,
  },
];

const path = window.location.pathname.split("folder/")[1];
if (path !== undefined) {
  selectedIndex.value = appPages.findIndex(
    (page) => page.title.toLowerCase() === path.toLowerCase()
  );
}
</script>

<style scoped>
.crown {
  margin-left: 10px;
  height: 25px;
  width: 25px;
}

.secondGrid {
  display: flex;
  justify-items: center;
  align-items: center;
}
.staticPoints{
  padding-left:20px;
  padding-right:20px;
}
.arrow{
  height: 17px;
  width: 17px;
}
a{
  color:black;
  text-decoration: none;
}
</style>