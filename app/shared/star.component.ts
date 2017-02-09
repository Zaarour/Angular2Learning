
import {Component,OnChanges,Input,Output,EventEmitter} from '@angular/core';

@Component({
selector:'ai-star',
templateUrl: 'app/shared/star.component.html',
styleUrls:['app/shared/star.component.css']

})

export class StarComponent implements OnChanges{
@Input() rating:number=4; // marking the rating as input allows the container component to pass a value to rating
starWidth:number;
@Output () ratingClicked: EventEmitter<string> =new EventEmitter<string>();

    ngOnChanges():void{
        this.starWidth=this.rating *86/5;
    }


    onClick():void{
        this.ratingClicked.emit('The rating '+this.rating+' was clicked.');
    }
}