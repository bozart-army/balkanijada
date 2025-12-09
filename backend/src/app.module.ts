import { Module } from '@nestjs/common';
import { PlacesModule } from './modules/places/places.module';

@Module({
  imports: [PlacesModule],
})
export class AppModule {}
