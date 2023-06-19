import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';
export function fadeInOut(timing = 0.5, name = 'fadeInOut') {
  return trigger(name, [
    transition(':enter', [style({ opacity: 0 }), animate(`${timing}s ease-in`, style({ opacity: 1 }))]),
    transition(':leave', [style({ opacity: 1 }), animate(`${timing}s ease-out`, style({ opacity: 0 }))]),
  ]);
}
export function reveal(timing = 0.6, name = 'reveal') {
  return trigger(name, [
    transition(':enter', [style({ opacity: 0, height: 0 }), animate(`${timing}s ease-in`, style({ transform: 'translateY(0)', opacity: 1 }))]),
    transition(':leave', [style({ height: '*', opacity: 1 }), animate(`${timing}s ease-out`, style({ opacity: 0, height: 0 }))]),
  ]);
}
export function slideTop(timing = 0.5, name = 'slideTop', translateY = 25) {
  return trigger(name, [
    transition(':enter', [style({ opacity: 0, transform: `translateY(-${translateY}%)` }), animate(`${timing}s ease-in`, style({ transform: 'translateY(0)', opacity: 1 }))]),
    transition(':leave', [style({ transform: 'translateY(0)', opacity: 1 }), animate(`${timing}s ease-out`, style({ opacity: 0, transform: `translateY(-${translateY}%)` }))]),
  ]);
}
export const container = [trigger('container', [transition(':enter, :leave', [query('@*', animateChild())])])];
export const EnterExitLeft = [
  trigger('enterExitLeft', [
    transition(':enter', [style({ opacity: 0, transform: 'translateX(-200px)' }), animate('300ms ease-in', style({ opacity: 1, transform: 'translateX(0)' }))]),
    transition(':leave', [animate('300ms ease-in', style({ opacity: 0, transform: 'translateX(-200px)' }))]),
  ]),
];
export const EnterExitRight = [
  trigger('enterExitRight', [
    transition(':enter', [style({ opacity: 0, transform: 'translateX(200px)' }), animate('300ms ease-in', style({ opacity: 1, transform: 'translateX(0)' }))]),
    transition(':leave', [animate('300ms ease-in', style({ opacity: 0, transform: 'translateX(200px)' }))]),
  ]),
];
