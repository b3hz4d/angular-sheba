# angular-sheba
Iran sheba for anuglar 2+
### Used [iran-sheba](https://github.com/rghorbani/iran-sheba) source for compatibilty with typescript

## Installation

Install via **npm**

```shell
npm install angular-sheba -S
```

## Usage

Add ShebaService in app.module providers

```ts
import { NgModule } from '@angular/core';
import { ShebaService } from 'angular-sheba';

@NgModule({
    declarations: [
        .
        .
        .
    ],
    imports: [
        .
        .
        .
    ],
    providers: [
        ShebaService
    ]
})
export class AppModuleShared {
}
```

Use it in your component

```ts
import { Component } from '@angular/core';
import { ShebaService } from 'angular-sheba';

@Component({
    .
    .
    .
})

export class ExampleComponent {
    
    constructor(private shebaService: ShebaService) {
        console.log(this.isValid("IR012345678901234567890123"));
        console.log(this.recognize("IR012345678901234567890123"));
    }

    isValid(shebaNumber: string){
        return this.shebaService.isValid(shebaNumber)
    }

    recognize(shebaNumber: string){
        return this.shebaService.recognize(shebaNumber)
    }
}
```