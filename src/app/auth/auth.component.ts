import { Component, OnInit, OnChanges, ComponentFactoryResolver, ViewChild, OnDestroy } from '@angular/core';
import { Form, NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService, AuthResponseData } from './auth.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { LocalizationService } from '../shared/localization.service';
import { AlertComponent } from '../shared/alert/alert/alert.component';
import { PlaceHolderDirective } from '../shared/placeholder/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  isLoginMode = true;
  isLoading = false;
  error = null;
  authForm: FormGroup;
  lang;
  @ViewChild(PlaceHolderDirective) alertHost: PlaceHolderDirective;

  private closeSub: Subscription;

  constructor(private http: HttpClient,
              private authService: AuthService,
              private translate: TranslateService,
              private router: Router,
              private localizationService: LocalizationService,
              private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.authForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });

    this.localizationService.langSelected.subscribe( value => {
      console.log('Subscription Value: ', value);
      this.lang = value;
    });
  }

  ngOnDestroy() {
    if(this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    if (!this.authForm.valid) {
      return;
    }
    const email = this.authForm.value.email;
    const password = this.authForm.value.password;
    this.isLoading = true;
    let authObs: Observable<AuthResponseData>;

    if (this.isLoginMode === false) {
      authObs = this.authService.signup(email, password);
      } else {
      // signin
      authObs = this.authService.signIn(email, password);
    }

    authObs.subscribe(resData => {
      console.log(resData);
      this.isLoading = false;
      this.router.navigate(['/movies']);
    }, errorRes => {
       this.translate.get(errorRes).subscribe((errorResponse) => { // translate the error then assign it to this.error
          this.error = errorResponse;
          this.showError(errorResponse);
          }
        );
       this.isLoading = false;
    });



    this.authForm.reset();
  }

  onHandleError() {
    this.error = null;
  }

  private showError(message: string) {
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear()
    });

  }


}
