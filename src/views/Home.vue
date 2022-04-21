<template>
  <ion-page>
    <ion-content>
      <img src="@/assets/logo.png">
      <ion-button>Hello Vite + Ionic</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonContent, IonPage, IonButton } from "@ionic/vue";


export default defineComponent({
  components: {
    IonPage, IonContent, IonButton
  },
})
</script>

<style>
</style>
