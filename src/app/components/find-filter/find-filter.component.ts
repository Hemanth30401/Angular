import { Component } from '@angular/core';

@Component({
  selector: 'app-find-filter',
  templateUrl: './find-filter.component.html',
  styleUrls: ['./find-filter.component.css']
})
export class FindFilterComponent {
  
  resultObj:any;
  resultArrObj:any;
  constructor(){}
  ngOnInit(){
  let arrObj = [
    {id:1,name:'Hemanth',branch:'ECE'},
    {id:2,name:'Hrushikesh',branch:'CSE'},
    {id:1,name:'Chey',branch:'ECE'}
  ]

  this.resultObj = arrObj.find(v => v.branch === 'ECE');

  this.resultArrObj = arrObj.filter(v => v.branch === 'ECE');
}
}
