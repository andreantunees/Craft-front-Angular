import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistoryService } from './history.service';
import { Recent } from '../model/HistoryCodeModel';
import { PostCode } from '../model/PostCodeModel';
import { calcDist, convertKmToMiles } from '../helpers/helper';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  
  locations: Recent;
  auxiliar: Array<PostCode> = [];
  post: PostCode;
  kmDistance : number;

  constructor(private activatedRoute: ActivatedRoute, private historyService: HistoryService) { 
    this.locations = new Recent();
    
  }

  existsData(){
    if(this.locations && this.locations != null)
      return true; 

    return false;
  }

  loadData(){
    this.historyService.checkHistory().subscribe(async data => {
      this.locations = data;
      
      for(var i = 0 ; i < this.locations.postCodes.length ; i++){
        this.post = new PostCode();
        this.post.code = this.locations.postCodes[i].postcode;
        this.post.lat = this.locations.postCodes[i].lat;
        this.post.long = this.locations.postCodes[i].long;
        this.post.country = this.locations.postCodes[i].country;
        this.post.region = this.locations.postCodes[i].region;
  
        this.post.distanceKm = Math.round(await calcDist(this.locations.latStart, this.locations.longStart, this.locations.postCodes[i].lat, this.locations.postCodes[i].long));
        this.post.distanceMiles = Math.round(await convertKmToMiles(this.post.distanceKm));
  
        this.auxiliar.push(this.post);
      }
    });
  }

  ngOnInit() {
    this.loadData();
  }
}
