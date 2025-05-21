import { Component } from '@angular/core';

import { treeNodes } from '@features/main/components/main-page/constants';
import { TCustomData } from '@features/main/components/main-page/models';
import { CustomTreeComponent } from '@shared';

@Component({
    selector: 'app-main-page',
    standalone: true,
    imports: [CustomTreeComponent],
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.less'
})
export class MainPageComponent {
    protected dataForTree: TCustomData[] = treeNodes;
}