import { Module } from '@nestjs/common';
import { PlacesModule } from './modules/places/places.module';
import { EventsModule } from './modules/events/events.module';
import { StoriesModule } from './modules/stories/stories.module';
import { UsersModule } from './modules/users/users.module';
import { OrganizersModule } from './modules/organizers/organizers.module';
import { I18nModule } from './modules/i18n/i18n.module';

@Module({
  imports: [
    PlacesModule,
    EventsModule,
    StoriesModule,
    UsersModule,
    OrganizersModule,
    I18nModule,
  ],
})
export class AppModule {}
