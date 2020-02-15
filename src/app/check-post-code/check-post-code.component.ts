import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostCode } from '../model/PostCodeModel';
import { ActivatedRoute, Params } from '@angular/router';
import { CheckPostCodeService } from './check-post-code.service';
import { calcDist, convertKmToMiles } from '../helpers/helper';

@Component({
  selector: 'app-check-post-code',
  templateUrl: './check-post-code.component.html',
  styleUrls: ['./check-post-code.component.scss']
})

export class CheckPostCodeComponent implements OnInit {

  postcode: PostCode;
  checkForm: FormGroup;
  postCodeModel: string;

  constructor(private activatedRoute: ActivatedRoute, private postCodeService: CheckPostCodeService) { 
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.postCodeModel = params['code']
    });

    this.checkForm = new FormGroup({
      postCode: new FormControl()
    });
  }

  onSubmit(){
    if(this.validPostCode())
      this.postCodeService.checkPost(this.postCodeModel).subscribe( data => {
        this.postcode = data;
        this.postcode.code = this.postCodeModel;
        this.generateDist(data);
      });  
  }

  async generateDist(data){
    this.postcode.distanceKm = Math.round(await calcDist(this.postcode.latStart, this.postcode.longStart, this.postcode.lat, this.postcode.long));
    this.postcode.distanceMiles = Math.round(await convertKmToMiles(this.postcode.distanceKm));
  }

  validPostCode(){
    if(this.postCodeModel && this.postCodeModel != null && this.postCodeModel != '')
      return true;
  }

  validData(){
    if(this.postcode && this.postcode != null)
      return true;
  }

  ngOnInit() {
    this.postcode = null
  }
}
