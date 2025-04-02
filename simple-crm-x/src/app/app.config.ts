import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-x","appId":"1:1063438265534:web:546ec4f523a4d9e8d402ef","storageBucket":"simple-crm-x.firebasestorage.app","apiKey":"AIzaSyCN9mV8FOqpt_Pfbhy4d5Y4RiKv2VWIWPw","authDomain":"simple-crm-x.firebaseapp.com","messagingSenderId":"1063438265534","measurementId":"G-F6GF6W62VG"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())]
};
