import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppsRoutingModule } from './apps-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppsComponent } from './apps.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';

import { ServiceblogService } from './blog/blog-service.service';

import { FullComponent } from './layout/full/full.component';

import { BannerComponent } from './shared/banner/banner.component';
import { BannerNavigationComponent } from './shared/banner-navigation/banner-navigation.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppsComponent,
    BlogComponent,
    BlogDetailComponent,
    FullComponent,
    BannerComponent,
    // BannerContentComponent,
    BannerNavigationComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    AppsRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ServiceblogService],
})
export class AppsModule {}
