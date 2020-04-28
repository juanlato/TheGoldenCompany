import { Component, OnDestroy, OnInit,Input } from '@angular/core';
import { LoadingScreenService } from "../../services/loading-screen/loading-screen.service";
import { Subscription } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.sass']
})
export class LoadingScreenComponent implements OnInit, OnDestroy {

  @Input() status:boolean;
  @Input() textIn:string;
  public loading: boolean = false;
  public statusTextVisible:boolean =false;
  public text: string='';
  public btm:boolean=false;
  loadingSubscription: Subscription;
  statusText: Subscription;
  constructor(private loadingScreenService: LoadingScreenService,private router:Router) {}

  ngOnInit() {
    if(this.status!=undefined){
      this.loading=this.status;
    }
    this.statusText = this.loadingScreenService.statusText.subscribe((value:any) => {
      this.statusTextVisible = value[0];
      this.text = value[1];
      this.btm = value[2];
    });
    this.loadingSubscription = this.loadingScreenService.loadingStatus.subscribe((value:boolean) => {
      this.loading = value;
    });
  }
  close(){
    this.status;
    this.loadingScreenService.stopLoading();
  }
  ngOnDestroy() {
    this.statusText.unsubscribe();
    this.loadingSubscription.unsubscribe();
  }
}