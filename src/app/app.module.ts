import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './common/shared/features/menu/src/lib/menu.module';
import { СategoriesModule } from './common/shared/features/categories/src/lib/categories.module';
import { BannerModule } from './common/shared/features/banner/src/lib/banner.module';
import { FooterModule } from './common/shared/features/footer/src/lib/footer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    СategoriesModule,
    BannerModule,
    FooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
