import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class starComponent implements OnChanges{

    // Use @Input() decorator to expose a property of the component
    // anytime that it needs input data from the container
    @Input() rating: number; 
    starWidth: number;

    // Use @Output() decorator any time the component needs to raise events
    // and optionally pass information back to its container
    @Output() ratingClicked: EventEmitter<string> =
            new EventEmitter<string>();

    ngOnChanges(): void {
            this.starWidth = this.rating * (75 / 5);
            console.log('starWidth: ' + this.starWidth);
    }

    onClick(): void {
        console.log(`The rating ${this.rating} was clicked`);
        // use the defined ratingClicked EventEmitter to send an event to the container class with a string payload
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
        console.log('Event sent! <Emit complete>');
    }
}