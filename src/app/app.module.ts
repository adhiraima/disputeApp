import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AccordionModule } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { DisputeTableComponent } from './dispute-table/dispute-table.component';
import { TrxTableComponent } from './trx-table/trx-table.component';
import { HttpClientModule } from '@angular/common/http';
import { DisputeService } from './services/dispute-service';
import { TransactionService } from './services/transaction-service';
import { TabViewModule } from 'primeng/primeng';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { DisputePanelComponent } from './dispute-panel/dispute-panel.component';
import { TransactionPanelComponent } from './transaction-panel/transaction-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    // SidebarComponent,
    DisputeTableComponent,
    TrxTableComponent,
    SearchPanelComponent,
    DisputePanelComponent,
    TransactionPanelComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AccordionModule,
    BrowserAnimationsModule,
    CalendarModule,
    FormsModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    TabViewModule,
    //EventEmitter
  ],
  providers: [
    DisputeService,
    TransactionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
