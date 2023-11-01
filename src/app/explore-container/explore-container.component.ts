import { Component, inject } from '@angular/core';
import { IonButton, ModalController } from '@ionic/angular/standalone';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  standalone: true,
  imports: [IonButton]
})
export class ExploreContainerComponent {
  public modalController = inject(ModalController);

  public async openModal() {
    console.log('button clicked');
    const modal = await this.modalController.create({
      component: ModalComponent,
    })
    console.log('modal created');
    await modal.present();
    console.log('modal presented');
  }
}
