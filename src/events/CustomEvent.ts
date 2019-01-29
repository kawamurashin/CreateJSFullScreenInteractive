namespace events
{
    export class CustomEvent extends createjs.Event{
        constructor(type:string,bubbles:boolean = null,cancelable:boolean = null)
        {
            super(type,bubbles,cancelable);
        }

    }
}