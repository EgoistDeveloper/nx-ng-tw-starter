import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppClientDirectivesModule } from '@app/client-directives';
import { AppClientMaterialModule } from '@app/client-material';

import { AppClientChatbotRoutingModule } from './client-chatbot-routing.module';
import { AppChatbotRootComponent } from './components/chatbot-root/chatbot-root.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppClientMaterialModule,
    AppClientDirectivesModule,
    AppClientChatbotRoutingModule,
  ],
  declarations: [AppChatbotRootComponent],
})
export class AppClientChatbotModule {}
