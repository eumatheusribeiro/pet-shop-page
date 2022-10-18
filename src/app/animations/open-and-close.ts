import { animate, state, style, transition, trigger } from '@angular/animations';

export const openAndClose = trigger('openAndClose', [
        state('closed', style({
          left: '100%'
        })),
        state('open', style({
          left: '40%'
        })),
        transition('closed <=> open', animate('700ms ease-in'))
      ])
