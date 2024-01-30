# Angular Workshop

# Etape 0: Installation

-------------------------------------------------------------------------------

Pour installer Angular, vous aurez besoin d'avoir Node.js et npm (gestionnaire de paquets Node) installés sur votre ordinateur. Une fois que ces prérequis sont installés, vous pouvez utiliser npm pour installer Angular en utilisant la commande suivante :

npm install -g @angular/cli

-------------------------------------------------------------------------------

Pour savoir si Node.js est installé :

node -v

Pour savoir si npm est installé :

npm -v

-------------------------------------------------------------------------------

Pour installer npm :

sudo dnf install npm

-------------------------------------------------------------------------------

Pour installer Node.js :

sudo dnf module install nodejs:18/common

-------------------------------------------------------------------------------

Si vous avez une version trop ancienne de node.js suivez les étapes de ce site
pour avoir la dernière version.

https://phoenixnap.com/kb/update-node-js-version

-------------------------------------------------------------------------------

Si Angular, npm et Node.js sont installés, vous avez fini ! C'était rapide non ?


# Etape 1: Introduction

L'objectif est de créer un site internet basique où vous allez pouvoir vous
balader d'une page à une autre de manière très fluide et très propre dans
l'architecture du code.

Pour commencer, créez vous un dossier où vous allez mettre votre super
site web !

Tapez dans le terminal au root de votre dossier :

ng new mon-projet

Dites "yes" à tout et choissisez "scss"

Si cela vous à générer un dossier "mon-projet" avec à l'intérieur tout un
tas de fichier et dossier tout est bon !

Faites :

cd mon-projet/

Puis :

ng serve

Désormais, si tout s'est bien passé, votre site tourne sur:

http://localhost:4200/


En résumer:

ng new = créer le projet
ng serve = lance votre site par défaut sur localhost:4200

# Etape 2: Component

Un component est un élément fondamental d'une application Angular. Un component
est un module qui contient du code HTML, CSS et Typescript.

Dans notre futur site nous aurons une toolbar qui permettra de naviguer
d'une page à l'autre, elle sera sur le haut du site et elle sera un component
(chacune des pages sera aussi un component)

Cela va permettre d'avoir un code très lisible et facilement débugable.

1)

Pour créer un component on va simplement taper la commande :

ng generate component [nom du component]

Dans notre cas vous pouvez écrire :

ng generate component toolbar
ng generate component page1
ng generate component page2
ng generate component page3
ng generate component page4

Vous remarquerez que cela à créer 5 dossiers dans src/app, qui contiennent
chacun un fichier html, scss, ts et spec.ts.

Ces 4 fichiers forment un component.

2)

Avant de véritablement commencer, il faut que vous sachiez que angular fourni
également des balises html qui vont nous être très utile pour écrire du code
html de manière plus concise.
Pour télécharger ces outils il faut que vous tapiez cette commande:

ng add @angular/material

3)

Dans ce dossier github je vous ai fourni mon component toolbar, vous pouvez
copier l'html et le scss dans votre component toolbar. Cela n'est pas forcèment,
important si vous ne comprenez pas pour le momoent ce qu'il y a écrit
dans ces deux fichiers, ils ne sont pas essentiels pour comprendre
la logique globale du projet.

Il vous faudra également copier quelques éléments (qui sont commenté // etape 2)
de mon fichier ts, ne faites pas un copier collé de l'intégralité de ce
fichier cela pourrait poser problème.

Si vous vous demandez si il y a des choses à copier du fichier spec.ts
sachez que ce fichier n'est jamais à modifié et ne se modifie quasiment
jamais peu importe le projet angular !

Si vous avez bien suivi, sachez que votre component toolbar est prêt !

Il vous faut maintenant l'intégrer à votre site !

4)

Vous le savez probablement, mais de manière générale les sites internets ont toujours
un index.html, qui correspond au début du site.

En angular ce fichier se trouve dans src/index.html

Ouvrez le, et vour remarquerez que ce fichier est composé de deux parties,
le header classique d'un site internet (les balises ```<head></head>``)
et le body (les balises ```<body></body>```)
qui contient uniquement :

```<app-root></app-root>```

A quoi correspond cette balise ?

Ouvrez le fichier src/app/app.component.ts
A l'intérieur vous pouvez trouver ce bout de code :

```ts

  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [
      RouterOutlet,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
  })

```


Vous pouvez voir que le selector est app-root (cela ne vous rappelle pas quelque chose ?)
la templateurl est app.component.html et le styleUrl est app.component.scss

Je vous invite à ouvrir app.component.html, et à littéralement tout effacer !
Et écrivez :

```<p>Bonjour Angular !</p>```

Que s'est t'il passé sur votre site ?

Vous l'avez peut être compris mais app.component.ts, app.component.html et
app.component.scss forment un component.
Et en écrivant <app-root></app-root> dans le body on appelle ce component.
C'est notre component principal et c'est depuis celui là que nous allons appeller
nos autres component.

5)

En théorie si vous ouvrez le .ts de votre component toolbar
vous pouvez trouvez exactement la même chose que dans app.component.ts avec un
selector égal à app-toolbar.

il vous reste donc à écrire dans le app.component.html

```<app-toolbar></app-toobar>```

Cela ne marche pas ? Vous avez une erreur dans le terminal ?
C'est normal !

Il faut que vous ajoutiez dans le app.component.ts

import { ToolbarComponent } from './toolbar/toolbar.component';

et dans le imports

```ts

  imports: [
      RouterOutlet,
      ToolbarComponent,
  ],

```

Désormais sur votre site vous êtes sensé voir votre toolbar.

Vous pouvez vous amusez à mettre plusieurs <app-toolbar></app-toolbar>

```<app-toolbar></app-toolbar>```
```<app-toolbar></app-toolbar>```
```<app-toolbar></app-toolbar>```
```<app-toolbar></app-toolbar>```
```<app-toolbar></app-toolbar>```

Vous comprenez maintenant que cela permet de réduire grandement l'écriture
et d'avoir un code très lisible, évidemment laissez juste une toolbar
c'était juste pour que vous puissiez voir que c'est possible !

Vous pouvez également sans oublier de les imports dans le app.component.ts ajoutez
vos différentes pages:

```<app-toolbar></app-toolbar>```
```<app-page1></app-page1>```
```<app-page2></app-page2>```
```<app-page3></app-page3>```
```<app-page4></app-page4>```

Normalement elles se sont toutes ajoutez les unes en-dessous des autres sur
votre site internet.
Encore une fois vous pouvez les supprimer, ça ne sert à rien car nous allons faire
quelque chose de beaucoup plus propre. Mais au moins vous savez que c'est possible !

Si sur votre site vous avez une toolbar avec 4 boutons. c'est tout bon pour vous !

# Etape 3: routing

Maintenant que les components n'ont plus de secret pour vous ! Il est temps
de faire quelque chose de super stylé !

LE ROUTING !

Vous avez remarquez, depuis le début votre site tourne uniquement sur
localhost:4200

Nous allons ajoutez 4 chemins:

localhost:4200/Page1     // chemin par défaut
localhost:4200/Page2
localhost:4200/Page3
localhost:4200/Page4

Concrètement nous allons faire en sorte que dès que notre utilisateur va arriver sur
notre site, Il sera automatiquement diriger vers localhost:4200/Page1.
C'est à dire qu'il verra le component toolbar avec la page1 en dessous,
et dès qu'il cliquera par exemple sur le bouton page 2 de la toolbar, il sera diriger
vers localhost:4200/Page2 ce qui correspond à une page avec la toolbar au dessus
et le component page2 en dessous.

C'est tout ! Facile nan ?

Pour cela vous avez un fichier app.route.ts qui se trouve dans src/app/
avec pour le moment ceci :

```ts

  export const routes: Routes = [];

```

Vous n'avez aucune routes pour le moment, pour en ajoutez une, c'est très simple :

```ts

  import { Page1Component } from './page1/page1.component';

  export const routes: Routes = [
      {
          path: "Page1", component: Page1Component,
      },
  ];

```

Je vous invite à le faire pour vos 4 pages !

Une fois les 4 pages ajoutez vous pouvez ajoutez également ces deux chemin :

{
  path: '', redirectTo: 'Page1', pathMatch: 'full'
},

Ce chemin est une gestion d'erreur pour quand l'utilisateur arrive au début
sur localhost:4200/ il soit diriger vers localhost:4200/Page1

{
  path: '**', redirectTo: 'Page1'
},

Ce chemin est aussi une gestion d'erreur pour que si l'utilisateur essaie de
mettre un chemin qui n'existe pas ex: localhost:4200/flashmcqueen il soit
diriger vers localhost:4200/Page1

Bonne nouvelle ! Votre router est prêt !

Vous avez maintenant simplement à l'ajoutez en dessous de ```<app-toolbar></app-toolbar>```
votre fichier devrait ressembler à ceci:

```<app-toolbar></app-toolbar>```
```<router-outlet></router-outlet>```

Normalement, vous devriez avoir un site avec votre toolbar et votre component
page1 en dessous. Les boutons de la toolbar ne marchent pas encore, pas de panique
on y arrive !

# Etape 4: Redirection

L'objectif désormais est de rentre les boutons de notre toolbar fonctionnel.
Pour qu'il redirige vers les bons chemins notre site internent.

Dans le .ts de mon component toolbar qui se trouve dans ce repo git. Vous
pouvez désormais copier tout ce qui est commenté // étape 4.
Si vous avez déjà fait de l'orienté object vous voyez qu'il y a un constructeur
(il s'agit de la première fonction qui est appellé lorsque l'on crée une class)
dans la class ToolbarComponent.

Ce constructeur crée une variable router qui est import depuis @angular/router

Ensuite, dans cette class, nous créeons 4 fonctions, qui vont être appellés par
nos 4 boutons. Ces fonctions vont utiliser router pour naviguer vers les bons
chemins.

A vous de jouer désormais pour trouver ce qu'il faut modifier dans le html de
votre toolbar pour que vos boutons appellent ces fonctions.

Une fois cela fait votre système de routing est en théorie fonctionnel !

# Etape 5: Décoration

Il vous reste du temps ?

Pourquoi ne pas remplir ces différentes pages avec des supers components
intégré automatique par Angular ! Allez voir ce site pour faire tout ça
il n'y a pas mieux !

https://material.angular.io/components/categories

Pourquoi ne pas ajouter un component footer en bas de votre site ?
