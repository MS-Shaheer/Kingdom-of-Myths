import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SuperheroesComponent } from "./superheroes/superheroes.component";
import { MagiciansComponent } from "./magicians/magicians.component";
import { KingsComponent } from "./kings/kings.component";
import { TownsComponent } from "./towns/towns.component";
import { VilliansComponent } from "./villians/villians.component";
import { ShowDescriptionSuperheroComponent } from "./superheroes/show-description-superhero/show-description-superhero.component";
import { ShowDescriptionTownComponent } from "./towns/show-description-town/show-description-town.component";
import { ShowDescriptionVillianComponent } from "./villians/show-description-villian/show-description-villian.component";
import { ShowDescriptionMagicianComponent } from "./magicians/show-description-magician/show-description-magician.component";
import { ShowDescriptionKingComponent } from "./kings/show-description-king/show-description-king.component";


const routes: Routes = [
    // {path: '', component: AppComponent},

    {
        path: 'superheroes', component: SuperheroesComponent,
        // children: [
        //     {path: '/description', component: ShowDescriptionSuperheroComponent}
        // ]
    },
    { path: 'superheroes/description/:id/:name', component: ShowDescriptionSuperheroComponent },
    
    {
        path: 'villians', component: VilliansComponent,
        // children: [
        //     {path: '/description', component: ShowDescriptionVillianComponent}
        // ]
    },
    { path: 'villians/description/:id/:name', component: ShowDescriptionVillianComponent },
    
    {
        path: 'magicians', component: MagiciansComponent,
        // children: [
        //     {path: '/description', component: ShowDescriptionMagicianComponent}
        // ]
    },
    { path: 'magicians/description/:id/:name', component: ShowDescriptionMagicianComponent },

    {
        path: 'kings', component: KingsComponent,
        // children: [
        //     {path: 'description/:id/:name', component: ShowDescriptionKingComponent}
        // ]
    },
    { path: 'kings/description/:id/:name', component: ShowDescriptionKingComponent },

    {
        path: 'towns', component: TownsComponent,
        // children: [
        //     {path: '/description', component: ShowDescriptionTownComponent}
        // ]
    },
    { path: 'towns/description/:id/:name', component: ShowDescriptionTownComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
