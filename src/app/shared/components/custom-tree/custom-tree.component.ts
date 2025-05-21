import { Component, InputSignal, input } from '@angular/core';
import {MatTreeModule} from  '@angular/material/tree' ;
import {MatIconModule} from  '@angular/material/icon' ;
import {MatButtonModule} from  '@angular/material/button' ;

import { TDataBase } from '@shared/components/custom-tree/models';

@Component({
    selector: 'app-custom-tree',
    standalone: true,
    imports: [MatTreeModule, MatButtonModule, MatIconModule],
    templateUrl: './custom-tree.component.html',
    styleUrl: './custom-tree.component.less'
})
export class CustomTreeComponent {
    public data: InputSignal<TDataBase[]> = input.required()

    protected childrenAccessor(node: TDataBase): TDataBase[] {
        return node.children ?? [];
    }

    protected hasChild(_: number, node: TDataBase): boolean {
        return !!node.children && node.children.length > 0;
    }
}