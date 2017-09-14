import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[focus-reset-field]',
    host: {
        '(focus)': '_onFocus()',
        '(blur)': '_onBlur()',
    }
})
export class FocusResetFieldDirective implements OnInit {

    inputValue: string = null;
    private _element: any;

    constructor(private el: ElementRef) {}

    ngOnInit() {
        this._element = this.el.nativeElement;
    }

    setValue(value: any) {
        if (this._element.type === 'text') {
            this._element.value = value;
            if ('createEvent' in document) {
                const evt = document.createEvent('HTMLEvents');
                evt.initEvent('change', false, true);
                this._element.dispatchEvent(evt);
            } else {
                this._element.fireEvent('onchange');
            }
        }
    }
    _onFocus() {
        this.inputValue = this._element.value;
        if (!this.inputValue) {
            this.setValue(null);
        }
    }

    _onBlur() {
        if (this._element.value === null || this._element.value === '') {
            this.setValue(this.inputValue);
        }

        this.inputValue = this._element.value;
    }

}
