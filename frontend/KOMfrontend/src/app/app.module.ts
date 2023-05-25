import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { SuperheroesComponent } from './superheroes/superheroes.component';
import { MagiciansComponent } from './magicians/magicians.component';
import { KingsComponent } from './kings/kings.component';
import { TownsComponent } from './towns/towns.component';
import { ShowDelMagiciansComponent } from './magicians/show-del-magicians/show-del-magicians.component';
import { AddEditMagiciansComponent } from './magicians/add-edit-magicians/add-edit-magicians.component';
import { ShowDelKingsComponent } from './kings/show-del-kings/show-del-kings.component';
import { AddEditKingsComponent } from './kings/add-edit-kings/add-edit-kings.component';
import { AddEditSuperheroesComponent } from './superheroes/add-edit-superheroes/add-edit-superheroes.component';
import { ShowDelSuperheroesComponent } from './superheroes/show-del-superheroes/show-del-superheroes.component';
import { AddEditTownsComponent } from './towns/add-edit-towns/add-edit-towns.component';
import { ShowDelTownsComponent } from './towns/show-del-towns/show-del-towns.component';
import { ShowDelVilliansComponent } from './villians/show-del-villians/show-del-villians.component';
import { AddEditVilliansComponent } from './villians/add-edit-villians/add-edit-villians.component';
import { VilliansComponent } from './villians/villians.component';
import { ShowDescriptionSuperheroComponent } from './superheroes/show-description-superhero/show-description-superhero.component';
import { ShowDescriptionTownComponent } from './towns/show-description-town/show-description-town.component';
import { ShowDescriptionVillianComponent } from './villians/show-description-villian/show-description-villian.component';
import { ShowDescriptionMagicianComponent } from './magicians/show-description-magician/show-description-magician.component';
import { ShowDescriptionKingComponent } from './kings/show-description-king/show-description-king.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperheroesComponent,
    MagiciansComponent,
    KingsComponent,
    TownsComponent,
    ShowDelMagiciansComponent,
    AddEditMagiciansComponent,
    ShowDelKingsComponent,
    AddEditKingsComponent,
    AddEditSuperheroesComponent,
    ShowDelSuperheroesComponent,
    AddEditTownsComponent,
    ShowDelTownsComponent,
    ShowDelVilliansComponent,
    AddEditVilliansComponent,
    VilliansComponent,
    ShowDescriptionSuperheroComponent,
    ShowDescriptionTownComponent,
    ShowDescriptionVillianComponent,
    ShowDescriptionMagicianComponent,
    ShowDescriptionKingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
