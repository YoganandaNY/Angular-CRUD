import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  paymentHandler: any = null;
  stripeAPIKey: any =
    'pk_test_51NMtatSI1pHqZy66oByH6N4ZzyzLw7pjVEKDcx5SSgKtPYN3rk22l82f07XQvxnt1Q8S4lz5PGyoN9FGlKw28yOj00i63YcO6V';

  constructor() {}

  /*------------------------------------------
  --------------------------------------------
  ngOnInit() Function
  --------------------------------------------
  --------------------------------------------*/
  ngOnInit() {
    this.invokeStripe();
  }

  /*------------------------------------------
  --------------------------------------------
  makePayment() Function
  --------------------------------------------
  --------------------------------------------*/
  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: this.stripeAPIKey,
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        alert('Stripe token generated!');
      },
    });
    paymentHandler.open({
      name: 'IonicCap.com',
      description: '3 widgets',
      amount: amount * 100,
    });
  }

  /*------------------------------------------
  --------------------------------------------
  invokeStripe() Function
  --------------------------------------------
  --------------------------------------------*/
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');

      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: this.stripeAPIKey,
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            console.log('Payment has been successfull!');
          },
        });
      };

      window.document.body.appendChild(script);
    }
  }
}
